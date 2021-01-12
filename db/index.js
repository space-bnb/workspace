const mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost/21027');

let repoSchema = mongoose.Schema({
  name: String,
  id: Number,
  office_cap: Number,
  desks_cap: Number,
  membership_rate: Number,
  pass_rate: Number,
  room_rate: Number
});

let Repo = mongoose.model('Workspaces', repoSchema);