import * as jose from "jose";
import { NextRequest } from "next/server";

const jwtConfig = {
  secret: new TextEncoder().encode(process.env.JWT_SECRET),
};

export const isAuthenticated = async (request: NextRequest) => {
  let token = request.cookies.get("session")?.value;

  if (token) {
    try {
      if (token.startsWith("Bearer")) {
        token = token.replace("Bearer ", "");
      }

      const decoded = await jose.jwtVerify(token, jwtConfig.secret);

      if (decoded.payload.email) {
        return true;
      }

      return false;
    } catch (err) {
      console.error("isAuthenticated error: ", err);

      return false;
    }
  } else {
    return false;
  }
};
