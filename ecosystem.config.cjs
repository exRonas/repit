module.exports = {
  apps: [
    {
      name: "qore-app",
      script: "server.js",
      env: {
        NODE_ENV: "production",
        PORT: 3000
      }
    }
  ]
};
