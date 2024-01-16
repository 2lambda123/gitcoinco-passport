// ----- Types
import type { Provider, ProviderOptions } from "../../types";
import type { RequestPayload, VerifiedPayload } from "@gitcoin/passport-types";
import { IdenaAgeProvider } from "./IdenaAgeProvider";
import { IdenaStakeProvider } from "./IdenaStakeProvider";
import { IdenaStateProvider } from "./IdenaStateProvider";

// Export the Idena Provider
export class IdenaProvider implements Provider {
  // Give the provider a type so that we can select it with a payload
  type = "IdenaProvider";

  // Options can be set here and/or via the constructor
  _options: ProviderOptions;

  // Construct the provider instance with supplied options
  constructor(options: ProviderOptions = {}) {
    this._options = options;
  }

  // Verify the Idena-specific information in the payload
  async verify(payload: RequestPayload): Promise<VerifiedPayload> {
    const address = payload.address.toString().toLowerCase();
    let valid = false;

    // Implement the Idena-specific verification logic
    const ageProvider = new IdenaAgeProvider(this._options);
    const stakeProvider = new IdenaStakeProvider(this._options);
    const stateProvider = new IdenaStateProvider(this._options);

    const ageValid = await ageProvider.verify(payload);
    const stakeValid = await stakeProvider.verify(payload);
    const stateValid = await stateProvider.verify(payload);

    valid = ageValid.valid && stakeValid.valid && stateValid.valid;

    return Promise.resolve({
      valid,
      record: valid ? {} : undefined,
    });
  }
}
