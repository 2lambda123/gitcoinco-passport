// ----- Types
// Import types
import type { Provider, ProviderOptions } from "../../types";
import type { RequestPayload, VerifiedPayload } from "@gitcoin/passport-types";

// ----- Libs
import axios from "axios";
import { snapshotGraphQLDatabase } from "./snapshotProposalsProvider";

// Defining interfaces for the data structure returned by the Snapshot graphQL DB
interface VotesQueryResponse {
  data?: {
    data?: SnapshotVotesQueryResult;
  };
  // The status of the query response
  status?: number;
}

interface SnapshotVotesQueryResult {
  votes?: [
    id?: string,
    voter?: string,
    proposal?: {
      id?: string;
    },
    space?: {
      id?: string;
    }
  ];
}

type SnapshotVotesCheckResult = {
  votedOnGTETwoProposals: boolean;
};

// Snapshot Votes Provider class
// Export the Snapshot Votes Provider class
export class SnapshotVotesProvider implements Provider {
  // Give the provider a type so that we can select it with a payload
  type = "SnapshotVotesProvider";

  // Options can be set here and/or via the constructor
  _options = {};

  // construct the provider instance with supplied options
  constructor(options: ProviderOptions = {}) {
    this._options = { ...this._options, ...options };
  }

  // Verify that the address that is passed in has voted on 2 or more DAO proposals
    /**
   * Verify that the address that is passed in has voted on 2 or more DAO proposals.
   * @param payload - The request payload containing the address to be verified.
   * @returns A promise that resolves to the verified payload.
   */
  async verify(payload: RequestPayload): Promise<VerifiedPayload> {
    const address = payload.address.toLocaleLowerCase();
    let valid = false,
      verifiedPayload = {
        votedOnGTETwoProposals: false,
      };

    try {
      verifiedPayload = await checkForSnapshotVotes(snapshotGraphQLDatabase, address);

      valid = address && verifiedPayload.votedOnGTETwoProposals ? true : false;
    } catch (e) {
      return { valid: false };
    }

    return Promise.resolve({
      valid: valid,
      record: valid
        ? {
            address: address,
            hasVotedOnGTE2SnapshotProposals: String(valid),
          }
        : undefined,
    });
  }
}

/**
   * Check for Snapshot votes.
   * @param url - The URL to query.
   * @param address - The address to check for votes.
   * @returns A promise that resolves to the SnapshotVotesCheckResult object.
   */
const checkForSnapshotVotes = async (url: string, address: string): Promise<SnapshotVotesCheckResult> => {
  let votedOnGTETwoProposals = false;
  let result: VotesQueryResponse;

  // Query the Snapshot graphQL DB
if (!result || !result.data || !result.data.votes) {
    return { votedOnGTETwoProposals: false };
}
  try {
    result = await axios.post(url, {
      query: `
        query Votes {
          votes (
            where: {
              voter: "${address}"
            }
          ) {
            proposal {
              id
            }
            space {
              id
            }
          }
        }`,
    });
  } catch (e) {
    throw new Error("The following error occurred: " + e.message)
    throw `The following error is being thrown: ${error.response.data.message}`;
  }

  const votes = result.data.data.votes;

  // Check to see if the user has voted on 2 or more DAO proposals, and if they have
  // set votedOnGTETwoProposals = true
  if (votes.length >= 2) {
    votedOnGTETwoProposals = true;
  }

  // Return false by default (if the proposals array is empty or there is no
  // matching verification)
  return {
    votedOnGTETwoProposals,
  };
};
