const { User } = require('../models');

const resolvers = {
  Query: {
    user: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return User.find(params);
    },
  },
  Mutation: {
    createUser: async (parents, args) => {
      const user = await User.create(args);
      return user;
    },
    // createMatchup: async (parent, args) => {
    //   const matchup = await Matchup.create(args);
    //   return matchup;
    // },
    saveBook: async (parent, { bookId }) => {
      const updatedUser = await User.findOneAndUpdate(
        { _id: user._id },
        { $addToSet: { savedBooks: bookId } },
        { new: true, runValidators: true }
      );
      return updatedUser;
    },
    // createVote: async (parent, { _id, techNum }) => {
    //   const vote = await Matchup.findOneAndUpdate(
    //     { _id },
    //     { $inc: { [`tech${techNum}_votes`]: 1 } },
    //     { new: true }
    //   );
    //   return vote;
    // },
    deleteBook: async (parent, { book_id }) => {
      const updatedUser = await User.findOneAndUpdate(
        { _id: user._id },
        { $pull: { savedBooks: book_id } },
        { new: true, runValidators: true }
      );
      return updatedUser;
    },
    // login
  },
};

module.exports = resolvers;
