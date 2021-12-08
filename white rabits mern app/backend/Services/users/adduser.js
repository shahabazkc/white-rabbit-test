const { addUser } = require("../../Controllers/user handler/addUser");

const addUserService = (req, res) => {
    //Handling the add user router
    //addUser function is the controller
    addUser(req.body).then((response) => {
        if (response) {
            res.status(200).json({ response });
        }
        else {
            res.status(401).json({ status: false })
        }
    }).catch((err) => {
        res.status(200).json({ status: false,alreadySameEmailFound:true });
    })
};

module.exports = { addUserService };