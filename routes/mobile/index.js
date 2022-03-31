const express = require('express');
const router = express.Router();
const authRoutes = require('./auth');
const userRoutes = require('./user');
// const coursesRoutes = require('./course');
// const weekRoutes = require('./week');
// const lessionRoutes = require('./lession');
// const chapterRoutes = require('./chapter');
// const missionRoutes = require('./mission');
// const missionContentRoutes = require('./missionContent');
// const discussionRoutes = require('./discussion');
// const postRoutes = require('./post');

router.use('/auth', authRoutes);
router.use('/user', userRoutes);
// router.use('/courses', coursesRoutes);
// router.use('/week', weekRoutes);
// router.use('/lession', lessionRoutes);
// router.use('/chapter', chapterRoutes);
// router.use('/mission', missionRoutes);
// router.use('/missioncontent', missionContentRoutes);
// router.use('/discussion', discussionRoutes);
// router.use('/post', postRoutes);

module.exports = router;