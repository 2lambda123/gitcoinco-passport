import { SnapshotProposalsProvider } from "./snapshotProposalsProvider";

describe("SnapshotProposalsProvider", () => {
  const provider = new SnapshotProposalsProvider();

  it("should return valid true and record when there are GT1 snapshot proposals voted on", async () => {
    // Mock the necessary dependencies and test the function with a valid payload
    const payload = { address: "0x123" };
    const result = await provider.verify(payload);

    expect(result.valid).toBe(true);
    expect(result.record).toEqual({
      address: "0x123",
      hasGT1SnapshotProposalsVotedOn: "true",
    });
  });

  it("should return valid false when there are no snapshot proposals voted on", async () => {
    // Mock the necessary dependencies and test the function with a valid payload
    const payload = { address: "0x456" };
    const result = await provider.verify(payload);

    expect(result.valid).toBe(false);
    expect(result.record).toBeUndefined();
  });

  // Add more test cases to cover other scenarios
});
