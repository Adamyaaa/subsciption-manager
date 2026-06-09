// import { client as workflowClient } from '@upstash/workflow';
import { QSTASH_URL, QSTASH_TOKEN } from './env.js';

// Mock client for testing - upstash workflow client
const client = {
    url: QSTASH_URL || 'http://localhost:8000',
    token: QSTASH_TOKEN || 'mock_token',
    send: async () => ({ success: true })
};

export default client;