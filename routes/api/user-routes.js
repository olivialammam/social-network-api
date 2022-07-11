const router = require('express').Router();

const { getAllUser, getUserById, createUser, updateUser, deleteUser, addFriend, deleteFriend } = require('../../controllers/user-controller');

// const {getAllUsers, getSingleUser, postUser, updateUser, deleteUser} = require('../../controllers/user-controller')

router.route('/').get(getAllUser).post(postUser)

router.route('/:id').get(getSingleUser).put(updateUser).delete(deleteUser)
router.route('/:id/friends/:friendId').post(addFriend).delete(deleteFriend)

module.exports = router; 