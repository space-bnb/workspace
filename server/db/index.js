const mongoose = require ('mongoose');
require('dotenv').config()
mongoose.connect(`mongodb://localhost/${process.env.DEV_DB}`, 
                  { useNewUrlParser: true, useUnifiedTopology: true });

const { seed } = require('./data_seed.js');

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

let retrieve = (filter) => {
  return Repo.find(filter, (err, docs) => err ? err : docs);
}

let remove = (filter) => {
  return Repo.deleteMany(filter, (err) => err);
}

let seeder = () => {
  let w_seed = seed();
  for (let item of w_seed) {
    try {
      const repo = new Repo(item);
      repo.save();
    }
    catch (err) {
      console.log("error: ", err);
    }
  }
}

let initialize = () => {
  remove({})
    .then(() => seeder());
}

let close = () => {
  mongoose.connection.close();
}

module.exports.initialize = initialize;
module.exports.retrieve = retrieve;
module.exports.close = close;