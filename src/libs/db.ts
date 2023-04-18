import { Redis } from '@upstash/redis';

import { API_URL, API_TOKEN } from '../config';

export const db = new Redis({
  url: API_URL,
  token: API_TOKEN,
});
