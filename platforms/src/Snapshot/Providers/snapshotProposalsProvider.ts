// ----- Types
import type { Provider, ProviderOptions } from "../../types";
import type { RequestPayload, VerifiedPayload } from "@gitcoin/passport-types";

// ----- Libs
import axios from "axios";

// Snapshot graphQL database
export const snapshotGraphQLDatabase = "https://hub.snapshot.org/graphql";

// Defining interfaces for the data structure returned by the subgraph
interface SnapshotProposalQueryResult {
  proposals: [
    {
      id?: string;
      scores_total?: number;
      author?: string;
    }
  ];
}

interface ProposalsQueryResponse {
  data?: {
    data?: SnapshotProposalQueryResult;
  };
  status?: number;
}

type SnapshotProposalCheckResult = {
  proposalHasVotes: boolean;
};

// Export a Snapshot proposals provider
export class SnapshotProposalsProvider implements Provider {
  // Give the provider a type so that we can select it with a payload
  type = "SnapshotProposalsProvider";

  // Options can be set here and/or via the constructor
  _options = {};

  // construct the provider instance with supplied options
  constructor(options: ProviderOptions = {}) {
    this._options = { ...this._options, ...options };
  }

  // Verify that the address that is passed in has created a proposal that
  // has received votes, which means the proposal score is greater than zero
  async verify(payload: RequestPayload): Promise<VerifiedPayload> {
    const address = payload.address.toLocaleLowerCase();
    let valid = false,
      verifiedPayload = {
        proposalHasVotes: false,
      };

    try {
      // Verify that the address that is passed in has created a proposal that
  // Log the address being verified
  console.log('Verifying address:', address);

  verifiedPayload = await checkForSnapshotProposals(snapshotGraphQLDatabase, address);

      valid = address && verifiedPayload.proposalHasVotes ? true : false;
    } catch (e) {
    console.error('An error occurred during the snapshotProposalsProvider.verify call:', e);
    return { error: 'An error occurred during the snapshotProposalsProvider.verify call' };
      return { valid: false, error: 'An error occurred during the snapshotProposalsProvider.verify call' };
    }

    return {
      valid: valid,
        valid: valid
        ? {
            address: address,
            hasGT1SnapshotProposalsVotedOn: String(valid),
          }
        : undefined,
    };
  }
}

const checkForSnapshotProposals = async (url: string, address: string): Promise<SnapshotProposalCheckResult> => {
  let proposalHasVotes = false;
  let result: ProposalsQueryResponse;

  // Query the Snapshot graphQL DB
  try 
  {
    result = await axios.post(url, {
      query: `
        query Proposals {
          proposals (
            where: {
              author: "${address}"
            }
          ) {
            id
            scores_total
            author
          }
        }`,
    });
  } catch (e: unknown) {
    const error = e as { response: { data: { message: string } } };
    throw `The following error is being thrown: ${error.response.data.message}`;
  }

  const proposals = result.data.data.proposals;

    // Check to see if the user has any proposals, and if they do,

  // Process the response data to check for proposal votes

  // Log the proposal check result
console.log('Proposal check result:', proposalHasVotes);
  const proposals = result.data.data.proposals;

  // Log the resulting proposals data
  console.log('Retrieved proposals data:', proposals);
  console.log('Retrieved proposals data:', proposals);
  // iterate through the proposals list to find the first instance of a
  // proposal with a total score > 0, which indicates it received votes
    if (proposals.length > 0) {
    console.log('Processing proposals list...');
    console.log('Processing proposals list...');
    const proposalCheck = proposals.findIndex((proposal) => proposal.scores_total > 0);
    proposalHasVotes = proposalCheck === -1 ? false : true;
  }

   
  if (!result || !result.data || !result.data.proposals) {
    console.error('Invalid response data from the snapshot query:', result);
    throw 'Invalid response data from the snapshot query';
  }
  // matching verification)
  return {
    proposalHasVotes,
  };
};
