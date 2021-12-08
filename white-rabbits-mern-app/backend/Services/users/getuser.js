const { getUser } = require("../../Controllers/user handler/getUser");

//fetch users route handler
const fetchUser = (req, res) => {

    //get userId
    let userId = req.params.id;
    //getting user from the controller
    getUser(userId).then((response) => {
        if (response) {
            res.status(200).json({ response });
        }
        else {
            res.status(401).json({ status: false })
        }
    }).catch((err) => {

        //error from the controller handling
        res.status(500).json({ status: false });
    })
};

module.exports = { fetchUser };