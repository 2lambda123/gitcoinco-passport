import { SnapshotProposalsProvider } from "../snapshotProposalsProvider";

describe("SnapshotProposalsProvider", () => {
  let provider: SnapshotProposalsProvider;

  beforeEach(() => {
    provider = new SnapshotProposalsProvider();
  });

  it("should return valid when the address has created a proposal with votes", async () => {
    // Mock the necessary dependencies
    const checkForSnapshotProposalsMock = jest.fn().mockResolvedValue({
      proposalHasVotes: true,
    });

    // Set up the provider with the mock dependency
    provider.checkForSnapshotProposals = checkForSnapshotProposalsMock;

    // Create a payload with an address that has created a proposal with votes
    const payload = {
      address: "0x123456789",
    };

    // Verify the payload
    const result = await provider.verify(payload);

    // Expect the result to be valid
    expect(result.valid).toBe(true);
    expect(result.record).toEqual({
      address: "0x123456789",
      hasGT1SnapshotProposalsVotedOn: "true",
    });
  });

  it("should return valid when the address has created a proposal without votes", async () => {
    // Mock the necessary dependencies
    const checkForSnapshotProposalsMock = jest.fn().mockResolvedValue({
      proposalHasVotes: false,
    });

    // Set up the provider with the mock dependency
    provider.checkForSnapshotProposals = checkForSnapshotProposalsMock;

    // Create a payload with an address that has created a proposal without votes
    const payload = {
      address: "0x987654321",
    };

    // Verify the payload
    const result = await provider.verify(payload);

    // Expect the result to be valid
    expect(result.valid).toBe(true);
    expect(result.record).toEqual({
      address: "0x987654321",
      hasGT1SnapshotProposalsVotedOn: "false",
    });
  });

  it("should return invalid when the address has not created any proposals", async () => {
    // Mock the necessary dependencies
    const checkForSnapshotProposalsMock = jest.fn().mockResolvedValue({
      proposalHasVotes: false,
    });

    // Set up the provider with the mock dependency
    provider.checkForSnapshotProposals = checkForSnapshotProposalsMock;

    // Create a payload with an address that has not created any proposals
    const payload = {
      address: "0xabcdef123",
    };

    // Verify the payload
    const result = await provider.verify(payload);

    // Expect the result to be invalid
    expect(result.valid).toBe(false);
    expect(result.record).toBeUndefined();
  });
});
