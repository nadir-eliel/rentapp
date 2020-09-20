const passport = require("passport");
const User = require("../models/User");

async function findUser(username, callback) {
  const user = await User.findByUserName(username);
  if (user && username === user.user_name) {
    return callback(null, user);
  }
  return callback(null);
}

function initPassport() {
  const JwtStrategy = require("passport-jwt").Strategy,
    ExtractJwt = require("passport-jwt").ExtractJwt;
  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = "top_secret";

  passport.use(
    new JwtStrategy(opts, function (jwt_payload, done) {
      findUser(jwt_payload.user_name.toUpperCase(), (err, user) => {
        if (err) {
          return done(err);
        } else if (jwt_payload.expire <= Date.now()) {
          return done("Token Expired", null);
        }
        // User not found
        if (!user) {
          return done(null, false);
        }
        return done(null, user);
      });
    })
  );
}

module.exports = initPassport;
