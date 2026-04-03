import dotenv from 'dotenv';
dotenv.config({ path: './config/.env.development.local' });

export const{
    PORT,NODE_ENV,DB_URI,
    JWT_SECRET,JWT_EXPIRES_IN
} = process.env;