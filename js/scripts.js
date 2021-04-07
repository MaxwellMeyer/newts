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

