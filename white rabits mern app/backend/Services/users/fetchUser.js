const { getUsers } = require("../../Controllers/user handler/getUsers");

//fetch users route handler
const fetchUsers = (req, res) => {
    //getting user from the controller
    getUsers().then((response) => {
        //if response 
        if (response) {
            res.status(200).json({ response });
        }
        else {
            res.status(401).json({ status: false })
        }
    }).catch((err) => {
        res.status(500).json({ status: false });
    })
};

module.exports = { fetchUsers };