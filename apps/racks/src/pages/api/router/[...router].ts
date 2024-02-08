import { createApiHandler } from 'apps/racks/src/router/handler';
import { typeChatSDK } from 'apps/racks/src/router/sdk';

export default createApiHandler({
  sdk: typeChatSDK,
  createContext: async (req, res) => ({
    user: {
      id: '1',
      name: 'Patrick',
    },
  }),
});
