import { LOCK_CHARACTER, UNLOCK_CHARACTER } from "./characterTypes";

export function unlockCharacter(character) {
  return {
    type: UNLOCK_CHARACTER,
    character: character
  }
}

export function lockCharacter(character) {
  return {
    type: LOCK_CHARACTER,
    character: character
  }
}