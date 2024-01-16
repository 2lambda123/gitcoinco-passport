// Import necessary functions and classes from cyberconnect_nonevm.ts
import { checkForOrgMember, CyberProfileOrgMemberProvider } from '../cyberconnect_nonevm';

// Mock axios for testing
jest.mock('axios');

describe('CyberConnect Nonevm Provider Tests', () => {
  describe('checkForOrgMember', () => {
    it('should return isMember and identifier when a successful response is received', async () => {
      // Mock axios.post to return a successful response
      const mockResponse = {
        data: {
          data: {
            checkVerifiedOrganizationMember: {
              isVerifiedOrganizationMember: true,
              uniqueIdentifier: '1234567890',
            },
          },
        },
      };
      jest.spyOn(axios, 'post').mockResolvedValue(mockResponse);

      // Call the function
      const result = await checkForOrgMember('https://api.cyberconnect.dev/', 'address');

      // Assert the expected values
      expect(result.isMember).toBe(true);
      expect(result.identifier).toBe('1234567890');
    });

    it('should throw an error when an error response is received', async () => {
      // Mock axios.post to throw an error
      const mockError = new Error('Request failed');
      jest.spyOn(axios, 'post').mockRejectedValue(mockError);

      // Call the function and expect it to throw an error
      await expect(checkForOrgMember('https://api.cyberconnect.dev/', 'address')).rejects.toThrow(
        'The following error is being thrown: Request failed'
      );
    });
  });

  describe('CyberProfileOrgMemberProvider', () => {
    it('should return valid and record when a successful response is received', async () => {
      // Create an instance of the provider with mock options
      const provider = new CyberProfileOrgMemberProvider();

      // Mock the checkForOrgMember function to return a successful response
      jest.spyOn(provider, 'checkForOrgMember').mockResolvedValue({
        isMember: true,
        identifier: '1234567890',
      });

      // Create a mock payload
      const payload = {
        address: 'address',
      };

      // Call the verify method
      const result = await provider.verify(payload);

      // Assert the expected values
      expect(result.valid).toBe(true);
      expect(result.record).toEqual({
        orgMembership: '1234567890',
      });
    });

    it('should return valid and error when an error response is received', async () => {
      // Create an instance of the provider with mock options
      const provider = new CyberProfileOrgMemberProvider();

      // Mock the checkForOrgMember function to throw an error
      jest.spyOn(provider, 'checkForOrgMember').mockRejectedValue(new Error('Request failed'));

      // Create a mock payload
      const payload = {
        address: 'address',
      };

      // Call the verify method
      const result = await provider.verify(payload);

      // Assert the expected values
      expect(result.valid).toBe(false);
      expect(result.error).toEqual(['CyberProfile provider check organization membership error']);
    });
  });
});
