
const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getAllUsers, getUserById, updateUser, deleteUser } = require('../controllers/userController');
const { authenticator, validator } = require('../middlewares/authMiddleware');


router.post('/register', registerUser);
router.post('/login', loginUser);


router.get('/', authenticator, validator, getAllUsers); // Admin only
router.get('/:id', authenticator, getUserById);         // Any authenticated user
router.put('/:id', authenticator, validator, updateUser); // Admin only
router.delete('/:id', authenticator, validator, deleteUser); // Admin only

module.exports = router;


