let option_templates = [
  {
    type: "Private Office",
    capacity: 0-20,
    description: "Lockable office space for teams of all sizes",
    price: "View inventory"
  },
  {
    type: "Dedicated Desks",
    capacity: 0-1,
    description: "Desk space in a shared lockable office",
    price: "View inventory"
  },
  {
    type: "Hot Desk Membership",
    capacity: 1,
    description: "On-demand access to shared workspace and common areas",
    price: `Sign up for rate/mo`,
    rate: 300-800
  },
  {
    type: "Day Pass",
    capacity: Math.floor(Math.random() * 2),
    description: "Book a day pass for a seat in our coworking spaces with access to amenities",
    price: `only $rate/day`,
    rate: 15-60
  },
  {
    type: "Conference Rooms",
    capacity: Math.floor(Math.random() * 2),
    description: "Book a room by the hour for meeting clients and coworkers",
    price: `from $rate/hour`,
    rate: 10-70
  }
];

let seed = () => {
  let workspaces = [];
  for (let id = 0; id < 100; id++) {
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