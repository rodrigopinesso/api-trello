const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const authorizeRoles = require('../middlewares/role.middleware');

router.use(authMiddleware); 
router.use(authorizeRoles('admin', 'moderator')); 

router.get('/', (req, res) => userController.list(req, res));
router.delete('/:id', (req, res) => userController.delete(req, res));

module.exports = router;