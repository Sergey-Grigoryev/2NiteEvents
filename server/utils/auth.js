const jwt = require("jsonwebtoken");

const secret = "mysecretsshhhhh";
const expiration = "12h";

module.exports = {
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    console.log("token", token);

    console.log("user", req.user);

    if (!token) {
      console.log("no token");
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch (error) {
      console.error(error);
      console.log("Invalid token");
    }

    return req;
  },
  signToken: function ({ username, _id }) {
    console.log("sign token");
    const payload = { username, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
