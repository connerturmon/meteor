import { LOCK_SKIN, UNLOCK_SKIN } from '../actions/skinsTypes';
import Skin from '../models/Skin';
const { SkinIds } = require("../common/skinUtilities");

const initialSkinsState = {
  [SkinIds.CAPTAIN]: new Skin(SkinIds.CAPTAIN, 'Captain: Admiral'),
  [SkinIds.COMMANDO]: new Skin(SkinIds.COMMANDO, 'Commando: Hornet'),
  [SkinIds.CROCO]: new Skin(SkinIds.CROCO, 'Acrid: Albino'),
  [SkinIds.ENGINEER]: new Skin(SkinIds.ENGINEER, 'Engineer: EOD Tech'),
  [SkinIds.HUNTRESS]: new Skin(SkinIds.HUNTRESS, 'Huntress: Arctic'),
  [SkinIds.LOADER]: new Skin(SkinIds.LOADER, 'Loader: Classic'),
  [SkinIds.MAGE]: new Skin(SkinIds.MAGE, 'Artificer: Chrome'),
  [SkinIds.MERCENARY]: new Skin(SkinIds.MERCENARY, 'Mercenary: Oni'),
  [SkinIds.TOOLBOT]: new Skin(SkinIds.TOOLBOT, 'MUL-T: Janitor'),
  [SkinIds.TREEBOT]: new Skin(SkinIds.TREEBOT, 'REX: Smoothie')
}

export default function skinsReducer(state = initialSkinsState, action) {
  switch (action.type) {
    case UNLOCK_SKIN:
      return {...state, [action.skin]: {...state[action.skin], unlocked: true}}
    case LOCK_SKIN:
      return {...state, [action.skin]: {...state[action.skin], unlocked: false}}
    default:
      return state;
  }
}