import { getMember as firebaseGetMember } from './firebase-api.js';

export async function getMember() {
    return await firebaseGetMember();
}