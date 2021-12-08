const { mongoose } = require('../Config/mongooseConn');

var Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    Indroduction: {
        type: String, required: true, min: [12, 'Must be at least 12'],
    },
    Email: {
        type: String, required: true, validate: {
            validator: async function (Email) {
                const user = await this.constructor.findOne({ Email });
                if (user) {
                    if (this.id === user.id) {
                        return true;
                    }
                    return false;
                }
                return true;
            },
            message: props => 'The specified email address is already in use.'
        },
    },

    Phone: {
        type: Number, required: true, min: [10, "minimum 10 digits needed"]
    },
    Experience: { type: String, required: true, min: [12, "minimum 10 digits needed"] },
    Achievements: { type: String, required: true, min: [12, "minimum 10 digits needed"] }
});

module.exports = { userSchema };