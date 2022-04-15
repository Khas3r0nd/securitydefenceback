const express = require('express');
const UserRouter = require('./UserRouter');
const QuestionRouter = require('./QuestionRouter');
const AnswerRouter = require('./AnswerRouter');
const VacancyRouter = require('./VacancyRouter');
const ShopRouter = require('./ShopRouter');
const NewsRouter = require('./NewsRouter');

const router = express.Router();

router.use('/users', UserRouter);
router.use('/questions', QuestionRouter);
router.use('/answers', AnswerRouter);
router.use('/vacancies', VacancyRouter);
router.use('/shop', ShopRouter);
router.use('/news', NewsRouter);

module.exports = router;