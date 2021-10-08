const mongoose = require("mongoose");
// const db = require('../models');

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/imageperformance",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const businessSeed = [
  {
    id: 0,
    businessName: "Old Town Saloon",
    businessPhone: "(559) 298-4662",
    address: "450 Clovis Ave, Clovis, CA 93612",
  },
  {
    id: 1,
    businessName: "Yard House",
    businessPhone: "(559) 261-2165",
    address: "90 El Camino, Fresno, CA 93720",
  },
  {
    id: 2,
    businessName: "Dog House Grill",
    businessPhone: "(559) 294-9920",
    address: "2789 E Shaw Ave, Fresno, CA 93710",
  },
];
