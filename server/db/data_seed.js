// Creates 100 items with id, office_cap, desks_cap, membership_rate, pass_rate, and room_rate
// Random values, different chances for each value to be 0
let seed = () => {
  let workspaces = [];
  for (let id = 1; id <= 100; id++) {
    let item = {};
    let rand = Math.random();
    item.id = id;
    item.office_cap = rand < .1 ? 0 : Math.floor(rand * 50)
    item.desks_cap = Math.floor(rand * 2)
    item.membership_rate = rand > .95 ? 0 : Math.floor(rand * 600 + 200)
    item.pass_rate = rand > .7 ? 0 : Math.floor(rand * 40 + 10)
    item.room_rate = rand > .7 ? 0 : Math.floor(rand * 30 + 15)
    workspaces.push(item);
  }
  return workspaces;
}

module.exports.seed = seed;