import { CREATE_NAME } from "./types";

export function createNames (nameInput) {
    return {
        type: CREATE_NAME,
        payload: nameInput
    }
} 