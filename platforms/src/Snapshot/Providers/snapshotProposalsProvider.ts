// ----- Types
import type { Provider, ProviderOptions } from "../../types";
import type { RequestPayload, VerifiedPayload } from "@gitcoin/passport-types";
import axios from "axios";

export const snapshotGraphQLDatabase = "https://hub.snapshot.org/graphql";

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

export class SnapshotProposalsProvider implements Provider {
  type = "SnapshotProposalsProvider";
  _options = {};

  constructor(options: ProviderOptions = {}) {
    this._options = { ...this._options, ...options };
  }

  async verify(payload: RequestPayload): Promise<VerifiedPayload> {
    const address = payload.address.toLocaleLowerCase();
    let valid = false,
      verifiedPayload = {
        proposalHasVotes: false,
      };

    try {
=======
<<<<<<< REPLACE (index=1)
interface ProposalsQueryResponse {
  data?: {
    data?: SnapshotProposalQueryResult;
  };
  status?: number;
}

type SnapshotProposalCheckResult = {
  proposalHasVotes: boolean;
};

export class SnapshotProposalsProvider implements Provider {
  type = "SnapshotProposalsProvider";
  _options = {};

  constructor(options: ProviderOptions = {}) {
    this._options = { ...this._options, ...options };
  }

  async verify(payload: RequestPayload): Promise<VerifiedPayload> {
      const address = payload.address.toLocaleLowerCase();
      let valid = false;
      let verifiedPayload: SnapshotProposalCheckResult = {
        proposalHasVotes: false,
      };

      try {
        verifiedPayload = await checkForSnapshotProposals(snapshotGraphQLDatabase, address);
        valid = address && verifiedPayload.proposalHasVotes;
      } catch (e) {
        console.error("Error occurred during verification:", e);
        return { valid: false };
      }

      return {
        valid: valid,
        record: valid
          ? {
              address: address,
              hasGT1SnapshotProposalsVotedOn: String(valid),
            }
          : undefined,
      };
    }
    const address = payload.address.toLocaleLowerCase();
    let valid = false,
      verifiedPayload = {
        proposalHasVotes: false,
      };

    try {
      verifiedPayload = await checkForSnapshotProposals(snapshotGraphQLDatabase, address);

      valid = address && verifiedPayload.proposalHasVotes ? true : false;
    } catch (e) {
      return { valid: false };
    }

    return {
      valid: valid,
      record: valid
        ? {
            address: address,
            hasGT1SnapshotProposalsVotedOn: String(valid),
          }
        : undefined,
    };
  }
}
    const address = payload.address.toLocaleLowerCase();
    let valid = false,
      verifiedPayload = {
        proposalHasVotes: false,
      };

    try {
      verifiedPayload = await checkForSnapshotProposals(snapshotGraphQLDatabase, address);

      valid = address && verifiedPayload.proposalHasVotes ? true : false;
    } catch (e) {
      return { valid: false };
    }

    return {
      valid: valid,
      record: valid
        ? {
            address: address,
            hasGT1SnapshotProposalsVotedOn: String(valid),
=======
new line(s) to replace

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
  type = "SnapshotProposalsProvider";
  _options = {};

  constructor(options: ProviderOptions = {}) {
    this._options = { ...this._options, ...options };
  }

  async verify(payload: RequestPayload): Promise<VerifiedPayload> {
    const address = payload.address.toLocaleLowerCase();
    let valid = false,
      verifiedPayload = {
        proposalHasVotes: false,
      };

    try {
      verifiedPayload = await checkForSnapshotProposalsOld(snapshotGraphQLDatabase, address);

      valid = address && verifiedPayload.proposalHasVotes ? true : false;
    } catch (e) {
      return { valid: false };
    }

    return {
      valid: valid,
      record: valid
        ? {
            address: address,
            hasGT1SnapshotProposalsVotedOn: String(valid),
          }
        : undefined,
    };
  }
}
    const address = payload.address.toLocaleLowerCase();
    let valid = false,
      verifiedPayload = {
        proposalHasVotes: false,
      };

    try {
      verifiedPayload = await checkForSnapshotProposals(snapshotGraphQLDatabase, address);

      valid = address && verifiedPayload.proposalHasVotes ? true : false;
    } catch (e) {
      return { valid: false };
    }

    return {
      valid: valid,
      record: valid
        ? {
            address: address,
            hasGT1SnapshotProposalsVotedOn: String(valid),
  const address = payload.address.toLocaleLowerCase();
  let valid = false;
  let verifiedPayload: SnapshotProposalCheckResult = {
    proposalHasVotes: false,
  };

  try {
    verifiedPayload = await checkForSnapshotProposals(snapshotGraphQLDatabase, address);
    valid = address && verifiedPayload.proposalHasVotes;
  } catch (e) {
    console.error("Error occurred during verification:", e);
    return { valid: false };
  }

  return {
    valid: valid,
    record: valid
      ? {
          address: address,
          hasGT1SnapshotProposalsVotedOn: String(valid),
        }
      : undefined,
  };
}
    const address = payload.address.toLocaleLowerCase();
    let valid = false,
      verifiedPayload = {
        proposalHasVotes: false,
      };

    try {
      verifiedPayload = await checkForSnapshotProposals(snapshotGraphQLDatabase, address);

      valid = address && verifiedPayload.proposalHasVotes ? true : false;
    } catch (e) {
      return { valid: false };
    }

    return {
      valid: valid,
      record: valid
        ? {
            address: address,
            hasGT1SnapshotProposalsVotedOn: String(valid),
          }
        : undefined,
    };
  }
}

const checkForSnapshotProposals = async (url: string, address: string): Promise<SnapshotProposalCheckResult> => {
  if (!result.data) {
    return { proposalHasVotes: false };
  }
  let proposalHasVotes = false;
  let result: ProposalsQueryResponse;

  try {
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

  if (proposals.length > 0) {
    const proposalCheck = proposals.findIndex((proposal) => proposal.scores_total > 0);
    proposalHasVotes = proposalCheck === -1 ? false : true;
  }

  return {
    proposalHasVotes,
  };
};
  let proposalHasVotes = false;
  let result: ProposalsQueryResponse;

  // Query the Snapshot graphQL DB
  try {
    let result;
    result = await axios.post(url, {
      query: `
        query Proposals {
          proposals (
            where: {
              author: ${address}
            }
          ) {
            id
            scores_total
            author
          }
        }`,
    });
  } catch (e: unknown) {
    throw formatErrorMessage(e);
    throw formatErrorMessage(e);
  }

  const proposals = result.data.data.proposals;

  // Check to see if the user has any proposals, and if they do,
  // iterate through the proposals list to find the first instance of a
  // proposal with a total score > 0, which indicates it received votes
  if (proposals.length > 0) {
    const proposalCheck = proposals.findIndex((proposal) => proposal.scores_total > 0);
    proposalHasVotes = proposalCheck !== -1 && proposal.scores_total > 0;
  }

  // Return false by default (if the proposals array is empty or there is no
  // matching verification)
  return {
    proposalHasVotes,
  };
};
