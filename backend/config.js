import dotenv from 'dotenv';
dotenv.config();
export default {
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost/amazona',
  JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
  FACEBOOK_CLIENT_ID: process.env.FACEBOOK_CLIENT_ID,
  FACEBOOK_CLIENT_SECRET: process.env.FACEBOOK_CLIENT_SECRET,
  FACEBOOK_CALLBACK_URL: process.env.FACEBOOK_CALLBACK_URL,
  GOOGLE_PUBLIC_KEY: process.env.GOOGLE_PUBLIC_KEY,
  GOOGLE_SECRET_KEY: process.env.GOOGLE_SECRET_KEY,
  GOOGLE_CALLBACK_URL: process.env.GOOGLE_CALLBACK_URL,
}