const { getUser } = require("../../Controllers/user handler/getUser");

//fetch users route handler
const fetchUser = (req, res) => {
    //getting user from the controller
    //get userId
    let userId = req.params.id;

    getUser(userId).then((response) => {
        
       // console.log(response);
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

module.exports = { fetchUser };