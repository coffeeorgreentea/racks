import { z } from 'zod';

export const CallOptionsSchema = z.object({
  method: z.string(),
  path: z.string(),
  body: z.unknown().optional(),
  query: z.record(z.unknown()).optional(),
});

export type CallOptionsType = z.infer<typeof CallOptionsSchema>;

export const Response = z.object({
  status: z
    .number()
    .int()
    .describe(
      'The HTTP status code. 200, 404, 500, etc. Return errors as needed if the request seems broken or nonsensical.'
    ),
  body: z
    .unknown()
    .describe(
      'The response body. This can be anything based on the users request prompt.'
    ),
});

export const ResponseSchema = {
  Response: Response.describe(
    'A schema definition that represents a api response object based on the users request prompt.'
  ),
};

export type ResponseType = z.infer<typeof Response>;
