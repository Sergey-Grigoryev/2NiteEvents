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
  },
  Mutation: {
    addClientAccount: async (parent, args) => {
      const user = await ClientAccount.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addEvent: async (parent, { Events }, context) => {
      console.log(context);
      if (context.Event) {
        const event = new Event({ Events });

        await Event.findByIdAndUpdate(context.Event._id, {
          $push: { Events: Event },
        });

        return event;
      }

      throw new AuthenticationError("Not able to Add Event");
    },
    updateClientAccount: async (parent, args, context) => {
      if (context.ClientAccount) {
        return await ClientAccount.findByIdAndUpdate(
          context.ClientAccount._id,
          args,
          { new: true }
        );
      }

      throw new AuthenticationError("Failed to Update Account");
    },
    updateEvent: async (parent, args, context) => {
      if (context.Event) {
        return await Event.findByIdAndUpdate(context.Event._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Failed to Update Event");
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
