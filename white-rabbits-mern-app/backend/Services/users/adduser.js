const { addUser } = require("../../Controllers/user handler/addUser");

/*                     /add-user router handler                            */
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
        //handling the catch if same user found
        res.status(200).json({ status: false, alreadySameEmailFound: true });
    })
};

module.exports = { addUserService };