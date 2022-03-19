const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const methodOverride = require('method-override');
require('dotenv').config();

const authRouter = require('./routes/auth');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const organizationRouter = require('./routes/organization');
const testimonialsRouter  = require('./routes/testimonials');
const contactsRouter = require('./routes/contacts');
const activitiesRouter = require('./routes/activities');
const newsRouter = require('./routes/news');

const app = express();
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/organizations', organizationRouter);
app.use('/contacts', contactsRouter);
app.use('/activities', activitiesRouter);
app.use('/users', usersRouter);
app.use('/news', newsRouter);
app.use('/testimonials', testimonialsRouter);

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

module.exports = app;
