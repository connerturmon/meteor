export default class Skin {
  constructor(internal_id, name, unlocked = false) {
    this.internal_id = internal_id;
    this.name = name;
    this.unlocked = unlocked;
  }
}