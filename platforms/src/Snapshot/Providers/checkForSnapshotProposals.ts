import axios from 'axios';

export interface SnapshotProposalCheckResult {
  proposalHasVotes: boolean;
}

// Snapshot graphQL database
export const snapshotGraphQLDatabase = "https://hub.snapshot.org/graphql";

export const checkForSnapshotProposals = async (url: string, address: string): Promise<SnapshotProposalCheckResult> => {
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
    proposalHasVotes = proposalCheck !== -1 && proposal.scores_total > 0;
  }

  return {
    proposalHasVotes,
  };
};
