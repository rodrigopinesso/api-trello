const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const authorizeRoles = require('../middlewares/role.middleware');

router.use(authMiddleware);

router.get('/me', userController.getMe);
router.put('/me', userController.updateMe);
router.get('/', authorizeRoles('admin', 'moderator'), userController.list);
router.get('/:id', authorizeRoles('admin'), userController.getById);
router.put('/:id', authorizeRoles('admin'), userController.updateById);
router.delete('/:id', authorizeRoles('admin'), userController.delete);

module.exports = router; // <- Isso é fundamental