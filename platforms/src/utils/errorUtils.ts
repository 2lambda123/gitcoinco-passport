// platforms/src/utils/errorUtils.ts

export const formatErrorMessage = (error: Error): string => {
  // Extract relevant error details
  const errorMessage = error.message;
  const errorStack = error.stack;

  // Format error details into a human-readable message
  let formattedErrorMessage = `Error: ${errorMessage}`;
  if (errorStack) {
    formattedErrorMessage += `\nStack Trace:\n${errorStack}`;
  }

  return formattedErrorMessage;
};
```

// Unit tests
describe('formatErrorMessage', () => {
  it('should format error message with stack trace', () => {
    const error = new Error('Something went wrong');
    error.stack = 'Error stack trace';

    const formattedMessage = formatErrorMessage(error);

    expect(formattedMessage).toBe('Error: Something went wrong\nStack Trace:\nError stack trace');
  });

  it('should format error message without stack trace', () => {
    const error = new Error('Something went wrong');

    const formattedMessage = formatErrorMessage(error);

    expect(formattedMessage).toBe('Error: Something went wrong');
  });
});
