import passport from 'passport';
import LocalStrategy from 'passport-local';
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
import constants from '../config/constants';
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

const jwtStrategyOpts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('JWT'),
  secretOrKey: constants.JWT_SECRET
};

const jwtStrategy = new JWTStrategy(jwtStrategyOpts, async (payload, done) => {
  try {
    const user = await UserModel.findOne({ _id: '5ba244289e8a7d521870c11e' });
    if (!user) {
      return done(null, false);
    }
    return done(null, user);
  } catch (e) {
    return done(e, false);
  }
});

passport.use(localStategy);
passport.use(jwtStrategy);

export const AuthLogin = passport.authenticate('local', { session: false });
export const JwtAuth = passport.authenticate('jwt', { session: false });
