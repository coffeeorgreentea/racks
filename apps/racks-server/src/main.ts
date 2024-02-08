import {
  fastifyTRPCPlugin,
  FastifyTRPCPluginOptions,
} from '@trpc/server/adapters/fastify';
import fastify from 'fastify';
import { appRouter, createContext, type AppRouter } from '@racks/api';
import ws from '@fastify/websocket';

const server = fastify({
  maxParamLength: 5000,
  logger: true,
});

server.register(ws);

server.register(fastifyTRPCPlugin, {
  useWSS: true,
  prefix: '/trpc',
  trpcOptions: {
    router: appRouter,
    createContext,
    onError({ path, error }) {
      // report to error monitoring
      console.error(`Error in tRPC handler on path '${path}':`, error);
    },
  } satisfies FastifyTRPCPluginOptions<AppRouter>['trpcOptions'],
});

(async () => {
  try {
    await server.listen({ port: 7000 });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
})();
