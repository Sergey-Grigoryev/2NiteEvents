const mongoose = require("mongoose");
// const db = require('../models');
const { Event } = require("../../server/models/index");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/2niteevents", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const eventsSeed = [
  {
    title: "Karaoke - DJ Melie Mel",
    start: "2021-10-05T21:00:00.000Z",
    end: "2021-10-05T23:00:00.000Z",
    aveSpend: "$30",
    visitCount: 12,
    businessId: 0,
  },
  {
    title: "Karaoke - DJ Melie Mel",
    start: "2021-10-12T21:00:00.000Z",
    end: "2021-10-12T23:00:00.000Z",
    aveSpend: "$30",
    visitCount: 0,
    businessId: 0,
  },
  {
    title: "Karaoke - DJ Melie Mel",
    start: "2021-10-19T21:00:00.000Z",
    end: "2021-10-19T23:00:00.000Z",
    aveSpend: "$30",
    visitCount: 0,
    businessId: 0,
  },
  {
    title: "Karaoke - DJ Melie Mel",
    start: "2021-10-26T21:00:00.000Z",
    end: "2021-10-26T23:00:00.000Z",
    aveSpend: "$30",
    visitCount: 0,
    businessId: 0,
  },
  {
    title: "Karaoke - DJ Melie Mel",
    start: "2021-11-02T21:00:00.000Z",
    end: "2021-11-02T23:00:00.000Z",
    aveSpend: "$30",
    visitCount: 0,
    businessId: 0,
  },
  {
    title: "Karaoke - DJ Melie Mel",
    start: "2021-11-09T21:00:00.000Z",
    end: "2021-11-09T23:00:00.000Z",
    aveSpend: "$30",
    visitCount: 0,
    businessId: 0,
  },
  {
    title: "Karaoke - DJ Melie Mel",
    start: "2021-11-16T21:00:00.000Z",
    end: "2021-11-16T23:00:00.000Z",
    aveSpend: "$30",
    visitCount: 0,
    businessId: 0,
  },
  {
    title: "Karaoke - DJ Melie Mel",
    start: "2021-11-23T21:00:00.000Z",
    end: "2021-11-23T23:00:00.000Z",
    aveSpend: "$30",
    visitCount: 0,
    businessId: 0,
  },
  {
    title: "Karaoke - DJ Melie Mel",
    start: "2021-11-30T21:00:00.000Z",
    end: "2021-11-30T23:00:00.000Z",
    aveSpend: "$30",
    visitCount: 0,
    businessId: 0,
  },
  {
    title: "Karaoke - DJ Katie",
    start: "2021-10-06T21:00:00.000Z",
    end: "2021-10-06T23:00:00.000Z",
    aveSpend: "$30",
    visitCount: 15,
    businessId: 0,
  },
  {
    title: "Karaoke - DJ Katie",
    start: "2021-10-13T21:00:00.000Z",
    end: "2021-10-13T23:00:00.000Z",
    aveSpend: "$30",
    visitCount: 0,
    businessId: 0,
  },
  {
    title: "Karaoke - DJ Katie",
    start: "2021-10-20T21:00:00.000Z",
    end: "2021-10-20T23:00:00.000Z",
    aveSpend: "$30",
    visitCount: 0,
    businessId: 0,
  },
  {
    title: "Karaoke - DJ Katie",
    start: "2021-10-27T21:00:00.000Z",
    end: "2021-10-27T23:00:00.000Z",
    aveSpend: "$30",
    visitCount: 0,
    businessId: 0,
  },
  {
    title: "Karaoke - DJ Katie",
    start: "2021-11-03T21:00:00.000Z",
    end: "2021-11-03T23:00:00.000Z",
    aveSpend: "$30",
    visitCount: 0,
    businessId: 0,
  },
  {
    title: "Karaoke - DJ Katie",
    start: "2021-11-10T21:00:00.000Z",
    end: "2021-11-10T23:00:00.000Z",
    aveSpend: "$30",
    visitCount: 0,
    businessId: 0,
  },
  {
    title: "Karaoke - DJ Katie",
    start: "2021-11-17T21:00:00.000Z",
    end: "2021-11-17T23:00:00.000Z",
    aveSpend: "$30",
    visitCount: 0,
    businessId: 0,
  },
  {
    title: "Karaoke - DJ Katie",
    start: "2021-11-24T21:00:00.000Z",
    end: "2021-11-24T23:00:00.000Z",
    aveSpend: "$30",
    visitCount: 0,
    businessId: 0,
  },
  {
    title: "Karaoke - DJ Katie",
    start: "2021-12-01T21:00:00.000Z",
    end: "2021-12-01T23:00:00.000Z",
    aveSpend: "$30",
    visitCount: 0,
    businessId: 0,
  },
  {
    title: "Happy Hour",
    start: "2021-10-04T15:00:00.000Z",
    end: "2021-10-04T18:00:00.000Z",
    aveSpend: "$20",
    visitCount: 22,
    businessId: 0,
  },
  {
    title: "Happy Hour",
    start: "2021-10-11T15:00:00.000Z",
    end: "2021-10-11T18:00:00.000Z",
    aveSpend: "$20",
    visitCount: 0,
    businessId: 0,
  },
  {
    title: "Happy Hour",
    start: "2021-10-18T15:00:00.000Z",
    end: "2021-10-18T18:00:00.000Z",
    aveSpend: "$20",
    visitCount: 0,
    businessId: 0,
  },
  {
    id: 21,
    title: "Happy Hour",
    start: "2021-10-25T15:00:00.000Z",
    end: "2021-10-25T18:00:00.000Z",
    aveSpend: "$20",
    visitCount: 0,
    businessId: 0,
  },
  {
    id: 22,
    title: "Happy Hour",
    start: "2021-11-01T15:00:00.000Z",
    end: "2021-11-01T18:00:00.000Z",
    aveSpend: "$20",
    visitCount: 0,
    businessId: 0,
  },
  {
    id: 23,
    title: "Happy Hour",
    start: "2021-11-08T15:00:00.000Z",
    end: "2021-11-08T18:00:00.000Z",
    aveSpend: "$20",
    visitCount: 0,
    businessId: 0,
  },
  {
    id: 24,
    title: "Happy Hour",
    start: "2021-11-15T15:00:00.000Z",
    end: "2021-11-15T18:00:00.000Z",
    aveSpend: "$20",
    visitCount: 0,
    businessId: 0,
  },
  {
    id: 25,
    title: "Happy Hour",
    start: "2021-11-22T15:00:00.000Z",
    end: "2021-11-22T18:00:00.000Z",
    aveSpend: "$20",
    visitCount: 0,
    businessId: 0,
  },
  {
    id: 26,
    title: "Happy Hour",
    start: "2021-11-29T15:00:00.000Z",
    end: "2021-11-29T18:00:00.000Z",
    aveSpend: "$20",
    visitCount: 0,
    businessId: 0,
  },
];

Event.create(eventsSeed);

// {
//   id: 27,
//   title: "Social Dancing Night!",
//   start: "2021-10-05T21:00:00.000Z",
//   end: "2021-10-05T23:00:00.000Z",
//   aveSpend: "$30",
//   visitCount: 12,
//   businessId: 1,
// },
// {
//   id: 28,
//   title: "Social Dancing Night!",
//   start: "2021-10-12T21:00:00.000Z",
//   end: "2021-10-12T23:00:00.000Z",
//   aveSpend: "$30",
//   visitCount: 0,
//   businessId: 1,
// },
// {
//   id: 29,
//   title: "Social Dancing Night!",
//   start: "2021-10-19T21:00:00.000Z",
//   end: "2021-10-19T23:00:00.000Z",
//   aveSpend: "$30",
//   visitCount: 0,
//   businessId: 1,
// },
// {
//   id: 30,
//   title: "Social Dancing Night!",
//   start: "2021-10-26T21:00:00.000Z",
//   end: "2021-10-26T23:00:00.000Z",
//   aveSpend: "$30",
//   visitCount: 0,
//   businessId: 1,
// },
// {
//   id: 31,
//   title: "Social Dancing Night!",
//   start: "2021-11-02T21:00:00.000Z",
//   end: "2021-11-02T23:00:00.000Z",
//   aveSpend: "$30",
//   visitCount: 0,
//   businessId: 1,
// },
// {
//   id: 32,
//   title: "Social Dancing Night!",
//   start: "2021-11-09T21:00:00.000Z",
//   end: "2021-11-09T23:00:00.000Z",
//   aveSpend: "$30",
//   visitCount: 0,
//   businessId: 1,
// },
// {
//   id: 33,
//   title: "Social Dancing Night!",
//   start: "2021-11-16T21:00:00.000Z",
//   end: "2021-11-16T23:00:00.000Z",
//   aveSpend: "$30",
//   visitCount: 0,
//   businessId: 1,
// },
// {
//   id: 34,
//   title: "Social Dancing Night!",
//   start: "2021-11-23T21:00:00.000Z",
//   end: "2021-11-23T23:00:00.000Z",
//   aveSpend: "$30",
//   visitCount: 0,
//   businessId: 1,
// },
// {
//   id: 35,
//   title: "Karaoke - DJ Melie Mel",
//   start: "2021-11-30T21:00:00.000Z",
//   end: "2021-11-30T23:00:00.000Z",
//   aveSpend: "$30",
//   visitCount: 0,
//   businessId: 1,
// },
// {
//   id: 36,
//   title: "Goldfish Racing!",
//   start: "2021-10-06T21:00:00.000Z",
//   end: "2021-10-06T23:00:00.000Z",
//   aveSpend: "$30",
//   visitCount: 15,
//   businessId: 1,
// },
// {
//   id: 37,
//   title: "Goldfish Racing!",
//   start: "2021-10-13T21:00:00.000Z",
//   end: "2021-10-13T23:00:00.000Z",
//   aveSpend: "$30",
//   visitCount: 0,
//   businessId: 1,
// },
// {
//   id: 38,
//   title: "Goldfish Racing!",
//   start: "2021-10-20T21:00:00.000Z",
//   end: "2021-10-20T23:00:00.000Z",
//   aveSpend: "$30",
//   visitCount: 0,
//   businessId: 1,
// },
// {
//   id: 39,
//   title: "Goldfish Racing!",
//   start: "2021-10-27T21:00:00.000Z",
//   end: "2021-10-27T23:00:00.000Z",
//   aveSpend: "$30",
//   visitCount: 0,
//   businessId: 1,
// },
// {
//   id: 40,
//   title: "Goldfish Racing!",
//   start: "2021-11-03T21:00:00.000Z",
//   end: "2021-11-03T23:00:00.000Z",
//   aveSpend: "$30",
//   visitCount: 0,
//   businessId: 1,
// },
// {
//   id: 41,
//   title: "Goldfish Racing!",
//   start: "2021-11-10T21:00:00.000Z",
//   end: "2021-11-10T23:00:00.000Z",
//   aveSpend: "$30",
//   visitCount: 0,
//   businessId: 1,
// },
// {
//   id: 42,
//   title: "Goldfish Racing!",
//   start: "2021-11-17T21:00:00.000Z",
//   end: "2021-11-17T23:00:00.000Z",
//   aveSpend: "$30",
//   visitCount: 0,
//   businessId: 1,
// },
// {
//   id: 43,
//   title: "Goldfish Racing!",
//   start: "2021-11-24T21:00:00.000Z",
//   end: "2021-11-24T23:00:00.000Z",
//   aveSpend: "$30",
//   visitCount: 0,
//   businessId: 1,
// },
// {
//   id: 44,
//   title: "Goldfish Racing!",
//   start: "2021-12-01T21:00:00.000Z",
//   end: "2021-12-01T23:00:00.000Z",
//   aveSpend: "$30",
//   visitCount: 0,
//   businessId: 1,
// },
// {
//   id: 45,
//   title: "Happy Hour",
//   start: "2021-10-04T15:00:00.000Z",
//   end: "2021-10-04T18:00:00.000Z",
//   aveSpend: "$20",
//   visitCount: 22,
//   businessId: 1,
// },
// {
//   id: 46,
//   title: "Happy Hour",
//   start: "2021-10-11T15:00:00.000Z",
//   end: "2021-10-11T18:00:00.000Z",
//   aveSpend: "$20",
//   visitCount: 0,
//   businessId: 1,
// },
// {
//   id: 47,
//   title: "Happy Hour",
//   start: "2021-10-18T15:00:00.000Z",
//   end: "2021-10-18T18:00:00.000Z",
//   aveSpend: "$20",
//   visitCount: 0,
//   businessId: 1,
// },
// {
//   id: 48,
//   title: "Happy Hour",
//   start: "2021-10-25T15:00:00.000Z",
//   end: "2021-10-25T18:00:00.000Z",
//   aveSpend: "$20",
//   visitCount: 0,
//   businessId: 1,
// },
// {
//   id: 49,
//   title: "Happy Hour",
//   start: "2021-11-01T15:00:00.000Z",
//   end: "2021-11-01T18:00:00.000Z",
//   aveSpend: "$20",
//   visitCount: 0,
//   businessId: 1,
// },
// {
//   id: 50,
//   title: "Happy Hour",
//   start: "2021-11-08T15:00:00.000Z",
//   end: "2021-11-08T18:00:00.000Z",
//   aveSpend: "$20",
//   visitCount: 0,
//   businessId: 1,
// },
// {
//   id: 51,
//   title: "Happy Hour",
//   start: "2021-11-15T15:00:00.000Z",
//   end: "2021-11-15T18:00:00.000Z",
//   aveSpend: "$20",
//   visitCount: 0,
//   businessId: 1,
// },
// {
//   id: 52,
//   title: "Happy Hour",
//   start: "2021-11-22T15:00:00.000Z",
//   end: "2021-11-22T18:00:00.000Z",
//   aveSpend: "$20",
//   visitCount: 0,
//   businessId: 1,
// },

// {
//   id: 53,
//   title: "Happy Hour",
//   start: "2021-11-29T15:00:00.000Z",
//   end: "2021-11-29T18:00:00.000Z",
//   aveSpend: "$20",
//   visitCount: 0,
//   businessId: 1,
// },
// {
//   id: 54,
//   title: "Comedy Night",
//   start: "2021-10-05T21:00:00.000Z",
//   end: "2021-10-05T23:00:00.000Z",
//   aveSpend: "$30",
//   visitCount: 12,
//   businessId: 2,
// },
// {
//   id: 55,
//   title: "Comedy Night",
//   start: "2021-10-12T21:00:00.000Z",
//   end: "2021-10-12T23:00:00.000Z",
//   aveSpend: "$30",
//   visitCount: 0,
//   businessId: 2,
// },
// {
//   id: 56,
//   title: "Comedy Night",
//   start: "2021-10-19T21:00:00.000Z",
//   end: "2021-10-19T23:00:00.000Z",
//   aveSpend: "$30",
//   visitCount: 0,
//   businessId: 2,
// },
// {
//   id: 57,
//   title: "Comedy Night",
//   start: "2021-10-26T21:00:00.000Z",
//   end: "2021-10-26T23:00:00.000Z",
//   aveSpend: "$30",
//   visitCount: 0,
//   businessId: 2,
// },
// {
//   id: 58,
//   title: "Comedy Night",
//   start: "2021-11-02T21:00:00.000Z",
//   end: "2021-11-02T23:00:00.000Z",
//   aveSpend: "$30",
//   visitCount: 0,
//   businessId: 2,
// },
// {
//   id: 59,
//   title: "Comedy Night",
//   start: "2021-11-09T21:00:00.000Z",
//   end: "2021-11-09T23:00:00.000Z",
//   aveSpend: "$30",
//   visitCount: 0,
//   businessId: 2,
// },
// {
//   id: 60,
//   title: "Comedy Night",
//   start: "2021-11-16T21:00:00.000Z",
//   end: "2021-11-16T23:00:00.000Z",
//   aveSpend: "$30",
//   visitCount: 0,
//   businessId: 2,
// },
// {
//   id: 61,
//   title: "Comedy Night",
//   start: "2021-11-23T21:00:00.000Z",
//   end: "2021-11-23T23:00:00.000Z",
//   aveSpend: "$30",
//   visitCount: 0,
//   businessId: 2,
// },
// {
//   id: 62,
//   title: "Comedy Night",
//   start: "2021-11-30T21:00:00.000Z",
//   end: "2021-11-30T23:00:00.000Z",
//   aveSpend: "$30",
//   visitCount: 0,
//   businessId: 2,
// },
// {
//   id: 63,
//   title: "Trivia Night",
//   start: "2021-10-06T21:00:00.000Z",
//   end: "2021-10-06T23:00:00.000Z",
//   aveSpend: "$30",
//   visitCount: 15,
//   businessId: 2,
// },
// {
//   id: 64,
//   title: "Trivia Night",
//   start: "2021-10-13T21:00:00.000Z",
//   end: "2021-10-13T23:00:00.000Z",
//   aveSpend: "$30",
//   visitCount: 0,
//   businessId: 2,
// },
// {
//   id: 65,
//   title: "Trivia Night",
//   start: "2021-10-20T21:00:00.000Z",
//   end: "2021-10-20T23:00:00.000Z",
//   aveSpend: "$30",
//   visitCount: 0,
//   businessId: 2,
// },
// {
//   id: 66,
//   title: "Trivia Night",
//   start: "2021-10-27T21:00:00.000Z",
//   end: "2021-10-27T23:00:00.000Z",
//   aveSpend: "$30",
//   visitCount: 0,
//   businessId: 2,
// },
// {
//   id: 67,
//   title: "Trivia Night",
//   start: "2021-11-03T21:00:00.000Z",
//   end: "2021-11-03T23:00:00.000Z",
//   aveSpend: "$30",
//   visitCount: 0,
//   businessId: 2,
// },
// {
//   id: 68,
//   title: "Trivia Night",
//   start: "2021-11-10T21:00:00.000Z",
//   end: "2021-11-10T23:00:00.000Z",
//   aveSpend: "$30",
//   visitCount: 0,
//   businessId: 2,
// },
// {
//   id: 69,
//   title: "Trivia Night",
//   start: "2021-11-17T21:00:00.000Z",
//   end: "2021-11-17T23:00:00.000Z",
//   aveSpend: "$30",
//   visitCount: 0,
//   businessId: 2,
// },
// {
//   id: 70,
//   title: "Trivia Night",
//   start: "2021-11-24T21:00:00.000Z",
//   end: "2021-11-24T23:00:00.000Z",
//   aveSpend: "$30",
//   visitCount: 0,
//   businessId: 2,
// },
// {
//   id: 71,
//   title: "Trivia Night",
//   start: "2021-12-01T21:00:00.000Z",
//   end: "2021-12-01T23:00:00.000Z",
//   aveSpend: "$30",
//   visitCount: 0,
//   businessId: 2,
// },
// {
//   id: 72,
//   title: "Happy Hour",
//   start: "2021-10-04T15:00:00.000Z",
//   end: "2021-10-04T18:00:00.000Z",
//   aveSpend: "$20",
//   visitCount: 22,
//   businessId: 2,
// },
// {
//   id: 73,
//   title: "Happy Hour",
//   start: "2021-10-11T15:00:00.000Z",
//   end: "2021-10-11T18:00:00.000Z",
//   aveSpend: "$20",
//   visitCount: 0,
//   businessId: 2,
// },
// {
//   id: 74,
//   title: "Happy Hour",
//   start: "2021-10-18T15:00:00.000Z",
//   end: "2021-10-18T18:00:00.000Z",
//   aveSpend: "$20",
//   visitCount: 0,
//   businessId: 2,
// },
// {
//   id: 75,
//   title: "Happy Hour",
//   start: "2021-10-25T15:00:00.000Z",
//   end: "2021-10-25T18:00:00.000Z",
//   aveSpend: "$20",
//   visitCount: 0,
//   businessId: 2,
// },
// {
//   id: 76,
//   title: "Happy Hour",
//   start: "2021-11-01T15:00:00.000Z",
//   end: "2021-11-01T18:00:00.000Z",
//   aveSpend: "$20",
//   visitCount: 0,
//   businessId: 2,
// },
// {
//   id: 77,
//   title: "Happy Hour",
//   start: "2021-11-08T15:00:00.000Z",
//   end: "2021-11-08T18:00:00.000Z",
//   aveSpend: "$20",
//   visitCount: 0,
//   businessId: 2,
// },
// {
//   id: 78,
//   title: "Happy Hour",
//   start: "2021-11-15T15:00:00.000Z",
//   end: "2021-11-15T18:00:00.000Z",
//   aveSpend: "$20",
//   visitCount: 0,
//   businessId: 2,
// },
// {
//   id: 79,
//   title: "Happy Hour",
//   start: "2021-11-22T15:00:00.000Z",
//   end: "2021-11-22T18:00:00.000Z",
//   aveSpend: "$20",
//   visitCount: 0,
//   businessId: 2,
// },

// {
//   id: 80,
//   title: "Happy Hour",
//   start: "2021-11-29T15:00:00.000Z",
//   end: "2021-11-29T18:00:00.000Z",
//   aveSpend: "$20",
//   visitCount: 0,
//   businessId: 2,
// },
