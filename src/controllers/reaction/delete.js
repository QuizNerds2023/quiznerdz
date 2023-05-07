const deleteReaction = async (req, res) => {
  const {
    params: { id },
    db: { Reaction },
  } = req;

  const success = await Reaction.delete(id);

  if (success) {
    res.send({ message: `Reaction with id ${id} has been deleted.` });
  } else {
    res.status(404).send({ message: `Reaction with id ${id} not found.` });
  }
};

module.exports = deleteReaction;
