const db = require("./connection");
const { AppUser, Event, Business, ClientAccount } = require("../models");

const event = {
  title: "gaming",
  startDate: Date.now(),
  endDate: Date.now(),
  avgSpend: 20,
  numberVisited: 2,
};

Event.create(event).then((e) => {
  const app = {
    email: "test@email.com",
    password: "test@password.com",
    eventId: [e._id],
    rating: 5,
    friends: 1,
  };
  AppUser.create(app);
});

const business = {
  name: "Target",
  phoneNumber: 123 - 1234 - 1234,
  address: "1234 Target Ave",
};

Business.create(business).then((b) => {
  clientAccount = {
    name: "TargetMan",
    businessId: b._id,
    username: "TheTargetMan",
    password: "test@password.com",
  };
  ClientAccount.create(clientAccount);
});
