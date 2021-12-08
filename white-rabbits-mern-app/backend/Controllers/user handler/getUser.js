const { mongoose } = require('../../Config/mongooseConn');
const { userSchema } = require('../../Schemas/userSchema');

//Get User Controller
const getUser = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            //Getting the user
            const userModel = mongoose.model('users', userSchema);

            //finding the user with userId
            const user = await userModel.findOne({ _id: userId });
            if (user) resolve(user);
            else reject({ status: false })

        } catch (err) {
            //Handling the errors while fetching
            reject(err)
        }
    })
};

module.exports = { getUser }