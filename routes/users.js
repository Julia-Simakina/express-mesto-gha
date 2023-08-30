const router = require('express').Router();
const { userIdValidation, updateAvatarValidation, updateProfileValidation } = require('../middlewares/userValidation');

const {
  getAllUsers, getUserById, getCurrentUser, updateProfile, updateAvatar,
} = require('../controllers/users');

router.get('/', getAllUsers);
router.get('/me', getCurrentUser);
router.get('/:userId', userIdValidation, getUserById);
router.patch('/me', updateProfileValidation, updateProfile);
router.patch('/me/avatar', updateAvatarValidation, updateAvatar);

module.exports = router;
