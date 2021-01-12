let option_templates = [
  {
    type: "Private Office",
    capacity: Math.floor(Math.random() * 20),
    description: "Lockable office space for teams of all sizes",
    price: "View inventory"
  },
  {
    type: "Dedicated Desks",
    capacity: Math.floor(Math.random() * 2),
    description: "Desk space in a shared lockable office",
    price: "View inventory"
  },
  {
    type: "Hot Desk Membership",
    capacity: 1,
    description: "On-demand access to shared workspace and common areas",
    price: `Sign up for ${rate}/mo`,
    rate: Math.floor(Math.random() * 500 + 300)
  },
  {
    type: "Day Pass",
    capacity: Math.floor(Math.random() * 2),
    description: "Book a day pass for a seat in our coworking spaces with access to amenities",
    price: `only $${rate}/day`,
    rate: Math.floor(Math.random() * 50 + 15)
  },
  {
    type: "Conference Rooms",
    capacity: Math.floor(Math.random() * 2),
    description: "Book a room by the hour for meeting clients and coworkers",
    price: `from $${rate}/hour`,
    rate: Math.floor(Math.random() * 60 + 10)
  }
];

let places = 
["689  Del Dew Drive", "4749  Riverwood Drive", "4158  Freshour Circle", "2627  Carson Street", "670  Worley Avenue",
"2615  Twin Willow Lane", "1809  Radford Street", "1745 T Street Southeast", "6007 Applegate Lane", 
"560 Penstock Drive", "150 Carter Street", "2721 Lindsay Avenue", "18 Densmore Drive", "637 Britannia Drive", 
"5601 West Crocus Drive", "5403 Illinois Avenue", "8821 West Myrtle Avenue", "2203 7th Street Road", 
"6463 Vrain Street", "87 Horseshoe Drive", "60 Desousa Drive", "4 Old Colony Way", "314 South 17th Street", 
"1649 Timberridge Court", "5461 West Shades Valley Drive", "629 Debbie Drive", "22572 Toreador Drive", 
"3034 Mica Street", "3729 East Mission Boulevard", "5114 Greentree Drive", "3466 Southview Avenue", 
"1513 Cathy Street", "600 West 19th Avenue", "1208 Elkader Court North", "210 Green Road", "49548 Road 200", 
"81 Seaton Place Northwest", "1267 Martin Street", "7431 Candace Way", "1407 Walden Court", "5906 Milton Avenue", 
"74 Springfield Street", "2905 Stonebridge Court", "20930 Todd Valley Road", "5928 West Mauna Loa Lane", 
"802 Madison Street Northwest", "2811 Battery Place Northwest", "210 Lacross Lane", "2010 Rising Hill Drive", 
"388 East Main Street", "450 Kinhawk Drive", "131 Westerly Street", "308 Woodleaf Court", "8502 Madrone Avenue", 
"23 Sable Run Lane", "716 Waller Road", "416 McIver Street", "1508 Massachusetts Avenue Southeast", 
"5615 West Villa Maria Drive", "3162 Martin Luther King Junior Boulevard", "5306 Ritchie Highway", 
"109 Summit Street", "816 West 19th Avenue", "172 Alburg Springs Road", "159 Downey Drive", "125 John Street", 
"1101 Lotus Avenue", "8376 Albacore Drive", "491 Arabian Way", "12245 West 71st Place", "80 North East Street", 
"4695 East Huntsville Road", "310 Timrod Road", "1364 Capri Drive", "132 Laurel Green Court", 
"6657 West Rose Garden Lane", "519 West 75th Avenue", "31353 Santa Elena Way", "8398 West Denton Lane", 
"700 Winston Place", "232 Maine Avenue", "1 Kempf Drive", "5811 Crossings Boulevard", "5108 Franklin Street", 
"913 Fallview Trail", "270 Chrissy's Court", "130 Old Route 103", "10826 Pointe Royal Drive", "74 Ranch Drive", 
"6601 West Ocotillo Road", "19416 Barclay Road", "1347 Blackwalnut Court", "1770 Colony Way", 
"165 Saint John Street", "2409 Research Boulevard", "1903 Bashford Manor Lane", "8315 Surf Drive", 
"3301 Old Muldoon Road", "8800 Cordell Circle", "117 East Cook Avenue"
]

let seed = () => {
  let workspaces = [];
  for (let [id, place] of places.entries()) {
    let item = {};
    let rand = Math.random();
    item.name = place;
    item.id = id;
    item.office_cap = rand > .8 ? 0 : Math.floor(rand * 50)
    item.desks_cap = Math.floor(rand * 2)
    item.membership_rate = Math.floor(rand * 600 + 200)
    item.pass_rate = rand < .3 ? 0 : Math.floor(rand * 40 + 10)
    item.room_rate = rand < .3 ? 0 : Math.floor(rand * 30 + 15)
    workspaces.push(item);
  }
  return workspaces;
}

module.export.seed = seed;