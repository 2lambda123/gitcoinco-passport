import { SnapshotVotesProvider } from "../snapshotVotesProvider";

describe("SnapshotVotesProvider", () => {
  let provider: SnapshotVotesProvider;

  beforeEach(() => {
    provider = new SnapshotVotesProvider();
  });

  it("should return valid when the address has voted on 2 or more DAO proposals", async () => {
    // Mock the necessary dependencies
    const checkForSnapshotVotesMock = jest.fn().mockResolvedValue({
      votedOnGTETwoProposals: true,
    });

    // Set up the provider with the mock dependency
    provider.checkForSnapshotVotes = checkForSnapshotVotesMock;

    // Create a payload with an address that has voted on 2 or more DAO proposals
    const payload = {
      address: "0x123456789",
    };

    // Verify the payload
    const result = await provider.verify(payload);

    // Expect the result to be valid
    expect(result.valid).toBe(true);
    expect(result.record).toEqual({
      address: "0x123456789",
      hasVotedOnGTE2SnapshotProposals: "true",
    });
  });

  it("should return invalid when the address has not voted on 2 or more DAO proposals", async () => {
    // Mock the necessary dependencies
    const checkForSnapshotVotesMock = jest.fn().mockResolvedValue({
      votedOnGTETwoProposals: false,
    });

    // Set up the provider with the mock dependency
    provider.checkForSnapshotVotes = checkForSnapshotVotesMock;

    // Create a payload with an address that has not voted on 2 or more DAO proposals
    const payload = {
      address: "0x987654321",
    };

    // Verify the payload
    const result = await provider.verify(payload);

    // Expect the result to be invalid
    expect(result.valid).toBe(false);
    expect(result.record).toBeUndefined();
  });
});
