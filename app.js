var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var Electronic = require("./models/electronics");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var electronicsRouter = require('./routes/electronics');
var selectorRouter = require('./routes/selector');
var boardRouter = require('./routes/board');
var resourceRouter = require('./routes/resource');

var app = express();

require('dotenv').config();
const connectionString =
  process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function () {
  console.log("Connection to DB succeeded")
});
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/electronics', electronicsRouter);
app.use('/selector', selectorRouter);
app.use('/board', boardRouter);
app.use('/resource', resourceRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
async function recreateDB() {
  // Delete everything
  await Electronic.deleteMany();
  let instance1 = new
    Electronic({
      Electronic_Name: "Apple", Electronic_Origin: 'USA',
      Electronic_ManufacturingYear: 2012
    });
  instance1.save();
  instance1 = new
    Electronic({
      Electronic_Name: "Oneplus", Electronic_Origin: 'China',
      Electronic_ManufacturingYear: 2019
    });
  instance1.save();
  instance1 = new
    Electronic({
      Electronic_Name: "Samsung", Electronic_Origin: 'Korea',
      Electronic_ManufacturingYear: 2005
    });
  instance1.save();

}
let reseed = true;
if (reseed) { recreateDB(); }
module.exports = app;
