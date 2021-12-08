const { mongoose } = require('../../Config/mongooseConn');
const { userSchema } = require('../../Schemas/userSchema');
const getUser = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const userModel = mongoose.model('users', userSchema);
            const user = await userModel.findOne({ _id: userId });
            if (user) resolve(user);
            else reject({ status: false })
        } catch (err) {
            console.log(err)
            reject(err)
        }
    })
};

module.exports = { getUser }