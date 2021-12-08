const { mongoose } = require('../../Config/mongooseConn');
const { userSchema } = require('../../Schemas/userSchema');

//Get Users Controller
const getUsers = () => {
    return new Promise(async (resolve, reject) => {
        
        try {
            const userModel = mongoose.model('users', userSchema);

            //finding every users in user collection
            const users = await userModel.find();
            if (users) resolve(users);
            
            else reject({ status: false })
        } catch (err) {
            //Error handling
            reject(err)
        }

    })
};

module.exports = { getUsers }