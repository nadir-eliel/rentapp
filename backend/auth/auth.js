const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const User = require("../models/User");

const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;

passport.use(
  "login",
  new localStrategy(
    {
      usernameField: "user_name",
      passwordField: "password",
    },
    async (user_name, password, done) => {
      try {
        const user = await User.findOne({ user_name });
        if (!user) {
          return done(null, false, { message: "User not found" });
        }

        const validate = await user.isValidPassword(password);

        if (!validate) {
          return done(null, false, { message: "Wrong password" });
        }

        return done(null, user, { message: "Login successfull" });
      } catch (e) {
        return done(e);
      }
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      secretOrKey: "top_secret",
      jwtFromRequest: ExtractJWT.fromUrlQueryParameter("secret_token"),
    },
    async (token, done) => {
      try {
        return done(null, token.user);
      } catch (e) {
        done(error);
      }
    }
  )
);
