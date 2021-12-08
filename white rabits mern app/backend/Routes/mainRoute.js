
const { addUserService } = require('../Services/users/adduser');
const { fetchUsers } = require('../Services/users/fetchUser');
const { fetchUser } = require('../Services/users/getuser');

const router = require('express').Router();


router.get('/get-users', fetchUsers);

router.post('/add-user', addUserService);

router.get('/get-user/:id', fetchUser);

module.exports = router;