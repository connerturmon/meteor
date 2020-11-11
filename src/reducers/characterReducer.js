import { CharacterInternalIds } from "../common/characterUtilities";
import Character from "../models/Character";

const { UNLOCK_CHARACTER, LOCK_CHARACTER } = require("../actions/characterTypes");

const initialCharacterState = {
  [CharacterInternalIds.CAPTAIN]: new Character(CharacterInternalIds.CAPTAIN, 'Captain'),
  [CharacterInternalIds.CROCO]: new Character(CharacterInternalIds.CROCO, 'Acrid'),
  [CharacterInternalIds.ENGINEER]: new Character(CharacterInternalIds.ENGINEER, 'Engineer'),
  [CharacterInternalIds.HUNTRESS]: new Character(CharacterInternalIds.HUNTRESS, 'Huntress'),
  [CharacterInternalIds.LOADER]: new Character(CharacterInternalIds.LOADER, 'Loader'),
  [CharacterInternalIds.MAGE]: new Character(CharacterInternalIds.MAGE, 'Artificer'),
  [CharacterInternalIds.MERCENARY]: new Character(CharacterInternalIds.MERCENARY, 'Mercenary'),
  [CharacterInternalIds.TOOLBOT]: new Character(CharacterInternalIds.TOOLBOT, 'MUL-T'),
  [CharacterInternalIds.TREEBOT]: new Character(CharacterInternalIds.TREEBOT, 'REX')
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