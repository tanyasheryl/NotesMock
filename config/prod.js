console.log('The value of PORT is:', process.env.MONGO_URI);
module.exports = {
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  googleClientID:
    '72305671294-hib0hhe1s0mlh6fnnrnkqn106qie6fri.apps.googleusercontent.com',

  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY
};
