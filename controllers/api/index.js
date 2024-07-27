const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');
const authRoutes = require('./authRoutes');
const schemaRoutes = require('./schemaRoutes'); // Include schema routes

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/auth', authRoutes);
router.use('/schema', schemaRoutes); // Use schema routes

module.exports = router;
