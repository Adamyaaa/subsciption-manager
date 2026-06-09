import dotenv from 'dotenv';
dotenv.config({ path: './config/.env.development.local' });

export const {
    PORT, NODE_ENV, DB_URI,
    JWT_SECRET, JWT_EXPIRES_IN,
    ARCJET_ENV, ARCJET_KEY,
    QSTASH_URL, QSTASH_TOKEN, QSTASH_CURRENT_SIGNING_KEY, QSTASH_NEXT_SIGNING_KEY
} = process.env;