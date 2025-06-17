const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const bcrypt = require("bcryptjs");
const User = require("../models/user");

module.exports = function (passport) {
  // Serialize/deserialize
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) => {
    User.findById(id)
      .then((user) => done(null, user))
      .catch(done);
  });

  // Local signup
  passport.use(
    "local-signup",
    new LocalStrategy(
      { usernameField: "email", passReqToCallback: true },
      async (req, email, password, done) => {
        try {
          if (await User.findOne({ email })) {
            return done(null, false, req.flash("error", "Email already taken"));
          }
          const hash = await bcrypt.hash(password, 12);
          const newUser = await User.create({
            name: req.body.name,
            email,
            password: hash,
          });
          return done(null, newUser);
        } catch (err) {
          return done(err);
        }
      },
    ),
  );

  // Local login
  passport.use(
    "local-login",
    new LocalStrategy(
      { usernameField: "email" },
      async (email, password, done) => {
        try {
          const user = await User.findOne({ email });
          if (!user) return done(null, false, { message: "No user found" });
          if (!user.password) {
            return done(null, false, {
              message:
                "User Signed Up with Google, Use Google Authentication to Continue",
            });
          }
          const match = await bcrypt.compare(password, user.password);
          if (!match) return done(null, false, { message: "Wrong password" });
          return done(null, user);
        } catch (err) {
          return done(err);
        }
      },
    ),
  );

  // Google OAuth
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        const existing = await User.findOne({ googleId: profile.id });
        if (existing) return done(null, existing);
        const user = await User.create({
          googleId: profile.id,
          name: profile.displayName,
          email: profile.emails[0].value,
        });
        done(null, user);
      },
    ),
  );
};
