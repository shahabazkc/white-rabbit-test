const { mongoose } = require('../../Config/mongooseConn');
const { userSchema } = require('../../Schemas/userSchema');
const getUsers = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const userModel = mongoose.model('users', userSchema);
            const users = await userModel.find();
            if (users) resolve(users);
            else reject({ status: false })
        } catch (err) {
            reject(err)
        }
    })
};

module.exports = { getUsers }