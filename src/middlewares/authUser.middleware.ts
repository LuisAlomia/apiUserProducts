import { ExtractJwt, Strategy as jwtStrategy } from "passport-jwt";
import userServices = require("../users/user.services");
import { config } from "../config/env.config";

export default new jwtStrategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
    secretOrKey: config.secretKey,
  },
  async (decoded, done) => {
    try {
      const authUser = await userServices.getOne(decoded.id);

      if (authUser) {
        done(null, decoded);
      } else {
        done(null, false);
      }
    } catch (err) {
      return done(err, false);
    }
  }
);
