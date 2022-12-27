/* eslint-disable linebreak-style */
export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(obj) {
    if (this.members.has(obj)) {
      throw new Error('obj exists');
    } else {
      this.members.add(obj);
    }
  }

  addAll(...rest) {
    rest.forEach((obj) => this.members.add(obj));
  }

  toArray() {
    return Array.from(this.members);
  }
}
