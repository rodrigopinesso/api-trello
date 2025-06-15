const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.use(authMiddleware); 

router.post('/', (req, res) => taskController.create(req, res));

module.exports = router;