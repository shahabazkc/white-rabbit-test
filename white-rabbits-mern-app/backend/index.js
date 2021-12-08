const express = require('express');
var createError = require('http-errors');

require('dotenv').config();

const mainRouter = require('./Routes/mainRoute');
const { mongoose } = require('./Config/mongooseConn');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Setting the Cors
app.use(cors({
    origin: ["", "http://localhost:3000"],
    credentials: true
}));

//Using the main router
app.use('/', mainRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    console.log(err);
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(process.env.APPLICATION_PORT, () => {
    console.log(`Application started on port ${process.env.APPLICATION_PORT}`);
})