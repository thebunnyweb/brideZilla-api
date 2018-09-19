import passport from 'passport';
import LocalStrategy from 'passport-local';
import { Strategy as JWTStrategy, ExtractJwt } from 'passport'; /*eslint-disable-line*/
// import constants from '../config/constants';
import UserModel from '../modules/users/users.model';

const LocalOPts = {
  usernameField: 'email'
};

const localStategy = new LocalStrategy(LocalOPts, async (email, password, done) => {
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return done(null, false);
    }
    if (!user.authenticateUser(password)) {
      return done(null, false);
    }
    return done(null, user);
  } catch (e) {
    return done(e, false);
  }
});

passport.use(localStategy);

export const AuthLogin = passport.authenticate('local', { session: false });
