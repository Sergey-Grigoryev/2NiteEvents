const { AuthenticationError } = require("apollo-server-express");
const { ClientAccount, Event, Business } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.ClientAccount) {
        const user = await ClientAccount.findById(
          context.ClientAccount._id
        ).populate({
          populate: "BusinessId",
        });

        return user;
      }

      throw new AuthenticationError("Not logged in");
    },
    getOneEvent: async (parent, args, context) => {
      console.log(context);
      const event = await Event.findById(context.body.variables.eventId);
      return event;
    },
    getAllEvent: async (parent, args, context) => {
      const event = await Event.find({}).catch((e) => console.error(e));
      console.log(event);
      return event;
    },
  },
  Mutation: {
    addClientAccount: async (parent, args) => {
      const user = await ClientAccount.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addEvent: async (parent, args, context) => {
      // console.log(args);
      const event = await Event.create(args).catch((e) => console.log(e));
      // console.log(event);
      return event;
    },
    updateClientAccount: async (parent, args, context) => {
      console.log(args);
      return await ClientAccount.findByIdAndUpdate(args._id, args, {
        new: true,
      });

      throw new AuthenticationError("Failed to Update Account");
    },
    updateEvent: async (parent, args, context) => {
      console.log(args);
      return await Event.findByIdAndUpdate(args._id, args, {
        new: true,
      });

      throw new AuthenticationError("Failed to Update Event");
    },
    deleteEvent: async (parent, args, context) => {
      return await Event.findByIdAndDelete(args._id);
    },
    login: async (parent, { username, password }) => {
      const user = await ClientAccount.findOne({ username });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
