function CorkBoard() {
  this.notes = {};
  this.currentId = 0;
}
CorkBoard.prototype.postNote = function(note) {
  note.id = this.assignId();
  this.notes[note.id] = note;
}
CorkBoard.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}
CorkBoard.prototype.locateNote = function(id) {
  if (this.notes[id] != undefined) {
    return this.notes[id];
  }
  return false;
}
CorkBoard.prototype.burnNote = function(id) {
  if (this.notes[id] === undefined) {
    return false;
  }
  delete this.notes[id];
  return true;
}
