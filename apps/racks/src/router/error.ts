export class APIError extends Error {
  constructor(message: string, public code: string = 'GENERIC_ERROR') {
    super(message);
    this.name = 'APIError';
  }
}
