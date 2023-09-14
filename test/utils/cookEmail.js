import { MAILOSAUR } from '../constants/config.js';
import { fakeGenerator } from '../services/fakeGenerator.js';

const { SERVER_ID, DOMAIN } = MAILOSAUR;

export const cookMailosaurEmail = (username = fakeGenerator.username()) => {
    return `${username}@${SERVER_ID}.${DOMAIN}`;
};
