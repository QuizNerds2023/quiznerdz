const createReaction = async (req, res) => {
  const {
    session,
    db: { Reaction },
    body: { reaction_text, quiz_id },
  } = req;

  const user_id = session.userId;

  const reaction = await Reaction.create(reaction_text, user_id, quiz_id);

  res.send(reaction);
};

module.exports = createReaction;
