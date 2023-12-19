// libs/client.js
import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'kzoi6idfio',
  apiKey: process.env.API_KEY,
});