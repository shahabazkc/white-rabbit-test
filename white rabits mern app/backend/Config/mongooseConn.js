const mongoose = require('mongoose');

//connecting mongoose
mongoose.connect(`${process.env.MONGOOSE_URL}`);

const conSuccess = mongoose.connection;

conSuccess.once('open', () => {
    console.log("Database Connected");
})

module.exports = { mongoose };
