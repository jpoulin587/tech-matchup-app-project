const { Tech, Matchup } = require('../models');

const resolvers = {
    Query: {
        matchups: async () => {
            return Matchups.find();
        },

        matchup: async (parent, { matchupId}) => {
            return Matchup.findOne({_id: matcvhupId });
        }
    },

    Mutation: {

    }

}




module.export = resolvers