const { Quiz_attempt } = require('../db/models');

const submitQuizResults = async (req, res) => {
  try {
    const { ben_score, carmen_score, motun_score, outcome, user_id, quiz_id } = req.body;

    // Validate the data
    if (!ben_score || !carmen_score || !motun_score || !outcome || !user_id || !quiz_id) {
      return res.status(400).send({ message: 'Incomplete quiz results data' });
    }

    // Create a new quiz attempt record
    const attempt = await Quiz_attempt.create({ ben_score, carmen_score, motun_score, outcome, user_id, quiz_id });

    res.status(201).send({ message: 'Quiz results submitted successfully', attempt });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Server error' });
  }
};

module.exports = submitQuizResults;
