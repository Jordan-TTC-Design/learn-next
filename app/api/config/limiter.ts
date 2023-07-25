import { RateLimiter } from 'limiter';

export const limiter = new RateLimiter({
  // 10 requests per second
  tokensPerInterval: 10,
  // 1 minute
  interval: 'min',
  fireImmediately: true,
});
