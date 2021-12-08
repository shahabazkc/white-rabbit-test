//Importing the route Handlers
const { addUserService } = require('../Services/users/adduser');
const { fetchUsers } = require('../Services/users/fetchUser');
const { fetchUser } = require('../Services/users/getuser');

//express router
const router = require('express').Router();

//Get Users route
router.get('/get-users', fetchUsers);

//Adding the user route
router.post('/add-user', addUserService);

//Get a user details route

router.get('/get-user/:id', fetchUser);//Get user id as params

module.exports = router;