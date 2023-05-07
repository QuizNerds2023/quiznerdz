const listReactions = async (req, res) => {
  const { Reaction } = req.db;
  const reactions = await Reaction.list();
  res.send(reactions);
};

module.exports = listReactions;
