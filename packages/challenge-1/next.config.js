const withTM = require("next-transpile-modules")(["@tour-radar/design-system"]);

module.exports = withTM({
  reactStrictMode: true,
});
