const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  remotes: {
    posts: "http://localhost:3301/remoteEntry.js",
    users: "http://localhost:3302/remoteEntry.js",
    photos: "http://localhost:3303/remoteEntry.js",
    fields: "http://localhost:3304/remoteEntry.js",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
