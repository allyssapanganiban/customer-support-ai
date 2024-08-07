import dotenv from 'dotenv';

dotenv.config();

// Debugging
console.log('Loaded OPENAI_API_KEY:', process.env.OPENAI_API_KEY);

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },
};

export default nextConfig;
