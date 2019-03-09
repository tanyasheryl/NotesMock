console.log('kikky');
console.log('The value of PORT is:', process.env.PORT);
module.exports = {
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  googleClientID: process.env.GOOGLE_CLIENT_ID,

  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY
};
