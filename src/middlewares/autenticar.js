import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
import { UserService } from '../service/user.service.js'
import { registerUser, loginUser, jwtAuthentication } from '../controllers/autenticar.controller.js'
import { JWT_PRIVATE_KEY } from '../config.js'


passport.use('localRegister', new LocalStrategy(
  { passReqToCallback: true },
  registerUser
));

passport.use('localLogin', new LocalStrategy(
  loginUser
));

passport.use('jwtAuth', new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromExtractors([function (req) {
    let token = null;
    if (req?.signedCookies) {
      token = req.signedCookies['autorizar'];
    }
    return token;
  }]),
  secretOrKey: JWT_PRIVATE_KEY
}, jwtAuthentication));

passport.use('current', new LocalStrategy(
  (email, password, done) => {
    UserService.findUserByEmail({ email: email }, (err, user) => {
      if (err) { return done(err); }
      if (!user || user.role !== 'admin' || !user.comparePassword(password)) {
        return done(null, false, { message: 'Credenciales inválidas o acceso no autorizado' });
      }
      return done(null, user);
    });
  }
));



passport.serializeUser((user, next) => { next(null, user) })
passport.deserializeUser((user, next) => { next(null, user) })

export const passportInitialize = passport.initialize()
export const passportSession = passport.session()


