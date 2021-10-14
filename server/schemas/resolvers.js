const { Tech, Matchup } = require("../models");

const resolvers = {
  Query: {
    matchups: async () => {
      return Matchup.find();
    },

    matchup: async (parent, { matchupId }) => {
      return Matchup.findOne({ _id: matchupId });
    },

    techs: async () => {
      return Tech.find();
    },

    tech: async (parent, { techId }) => {
      return Tech.findOne({ _id: techId });
    },
  },

  Mutation: {
    createMatchup: async (parent, { tech1, tech2 }) => {
      return Matchup.create({ tech1, tech2 });
    },

    createVote: async (parent, { matchupId, techNum }) => {
      return Matchup.findOneAndUpdate(
        { _id: matchupId },
        { $inc: { [`tech${techNum}_votes`]: 1 } },
        {
          new: true,
          runValidators: true,
        }
      );
    },
  },
};

module.exports = resolvers;
