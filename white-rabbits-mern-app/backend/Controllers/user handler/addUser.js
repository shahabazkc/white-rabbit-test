const { mongoose } = require('../../Config/mongooseConn');
const { userSchema } = require('../../Schemas/userSchema');

//Add user Controller
const addUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {

            //CREATING USER OBJECT LIKE USER SCHEMA
            let userData = {
                FirstName: data.firstName,
                LastName: data.lastName,
                Email: data.email,
                Indroduction: data.introduction,
                Experience: data.experience,
                Achievements: data.achievements,
                Phone: data.number,
            };

            //Getting the userSchema
            const userModel = mongoose.model('users', userSchema);
            const user = new userModel(userData);
           
            //saving the user to the database
            user.save().then((res) => {
                //if saved
                let response = {
                    status: true,
                    userAdded: true
                };

                resolve(response);

            }).catch((err) => {
                //Handling the error
                reject(err);
            })
        } catch (err) {
            reject(err)
        }
    })
};

module.exports = { addUser }