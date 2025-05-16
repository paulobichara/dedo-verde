import { Platform } from 'react-native';

export const { DateInput } = Platform.select({
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  native: () => require('./date-input.native'),
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  default: () => require('./date-input.web'),
})();
