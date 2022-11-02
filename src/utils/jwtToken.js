import sign from "jwt-encode";
import jwt_decode from "jwt-decode";

export const enCodeToken = (token) => {
  return sign(token, "secret");
};

export const deCodeToken = (token) => {
  return jwt_decode(token, { header: true });
};
