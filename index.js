const express = require('express');
//const authRoutes = require('./routes/authRoutes');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
const passport = require('passport');
const passportConfig = require('./services/passport');
const cookieSession = require('cookie-session');
const app = express();
mongoose
  .connect(keys.mongoURI)
  .then(() => console.log('connected to db'))
  .catch(err => console.error(err));
/*
app.post('/login', passport.authenticate('local'), function(req, res) {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.
  res.redirect('/users/'); //+ req.user.username);
});

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
}); */
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
