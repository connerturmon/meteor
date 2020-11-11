import { LOCK_SKIN, UNLOCK_SKIN } from "./skinsTypes";

export function unlockSkin(skin) {
  return {
    type: UNLOCK_SKIN,
    skin: skin
  }
}

export function lockSkin(skin) {
  return {
    type: LOCK_SKIN,
    skin: skin
  }
}