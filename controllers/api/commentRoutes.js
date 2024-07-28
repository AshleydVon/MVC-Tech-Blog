const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    if (!req.session.user_id) {
      res.status(401).json({ message: 'Please log in first!' });
      return;
    }

    const newComment = await Comment.create({
      content: req.body.content,
      user_id: req.session.user_id,
      post_id: req.body.post_id,
    });

    res.status(200).json(newComment);
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

module.exports = router;
