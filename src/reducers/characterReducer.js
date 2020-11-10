import { CAPTAIN_INTERNAL_ID, CROCO_INTERNAL_ID } from "../common/characterConstants";
import Character from "../models/Character";

const { UNLOCK_CHARACTER, LOCK_CHARACTER } = require("../actions/characterTypes");

const initialCharacterState = {
  [CAPTAIN_INTERNAL_ID]: new Character(CAPTAIN_INTERNAL_ID, 'Captain'),
  [CROCO_INTERNAL_ID]: new Character(CROCO_INTERNAL_ID, 'Astrid')
}

function characterReducer(state = initialCharacterState, action) {
  switch (action.type) {
    case UNLOCK_CHARACTER:
      return {...state, [action.character]: {...state[action.character], unlocked: true}}
    case LOCK_CHARACTER:
      return {...state, [action.character]: {...state[action.character], unlocked: false}}
    default:
      return state;
  }
}

export default characterReducer;