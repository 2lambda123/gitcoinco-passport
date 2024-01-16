/* eslint-disable */
import { AppContext, ProviderPayload } from "../types";
import { Platform } from "../utils/platform";
import { SnapshotProposalsProvider, snapshotGraphQLDatabase } from "./Providers/snapshotProposalsProvider";
import { checkForSnapshotProposals } from "./Providers/checkForSnapshotProposals";

export class SnapshotPlatform extends Platform {
  platformId = "Snapshot";
  path = "Snapshot";
  isEVM = true;

  async getProviderPayload(appContext: AppContext): Promise<ProviderPayload> {
    const result = await Promise.resolve({});
    return result;
  }

  async verifyProviderPayload(providerPayload: ProviderPayload): Promise<boolean> {
    if (providerPayload.type === "SnapshotProposalsProvider") {
      const snapshotProvider = new SnapshotProposalsProvider();
      const payload = {
        address: providerPayload.address,
      };
      const verificationResult = await snapshotProvider.verify(payload);
      return verificationResult.valid;
    }
    return false;
  }
}
