const router = require('express').Router();
const users = require('../../controllers/userController')
// get all users
router.get('/', users.getAllUsers);

//get user by id
router.get('/:id', users.getSingleUser);

//create new user
router.post('/', users.createUser);

//update existing user
router.put('/:id', users.updateUser);

//delete user
router.delete('/:id', users.deleteUser)

//add friends
router.post('/:userId/friends/:friendId', users.addFriend)

//delete friend
router.delete('/:userId/friends/:friendId', users.deleteFriend)

module.exports = router;