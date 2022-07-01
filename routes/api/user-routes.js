const router = require('express').Router();
const {getAllUsers, getSingleUser, postUser, updateUser, deleteUser} = require('../../controllers/user-controller')

router.route('/').get(getAllUsers).post(postUser)

router.route('/:id').get(getSingleUser).put(updateUser).delete(deleteUser)