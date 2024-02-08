import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { APIError } from './error';

export interface HandlerOptions {
  sdk: SDK; // Simplified SDK type
  createContext?: (
    req: NextApiRequest,
    res: NextApiResponse
  ) => Promise<unknown> | unknown;
}

// Simplified and Unified SDK Interface
export interface SDK {
  call: (options: CallOptions) => Promise<unknown>;
}

export interface CallOptions {
  method: string;
  path: string;
  body?: unknown;
  query?: { [key: string]: unknown };
}

export function createApiHandler({
  sdk,
  createContext,
}: HandlerOptions): NextApiHandler {
  return async (req, res) => {
    try {
      const context = createContext ? await createContext(req, res) : {};
      const path = req.query.router
        ? Array.isArray(req.query.router)
          ? req.query.router.join('/')
          : req.query.router
        : '';

      if (!path) throw new APIError('No path specified', 'BAD_REQUEST');

      const response = await sdk.call({
        method: req.method ?? 'GET',
        path,
        body: req.body,
        query: req.query,
        // ...context,
      });

      res.status(200).json(response);
    } catch (error: any) {
      console.error(error);
      res
        .status(error.code === 'BAD_REQUEST' ? 400 : 500)
        .json({ message: error.message || 'Internal Server Error' });
    }
  };
}
