module.exports = {
  apps: [
    {
      name: "yunusescom",
      script: "pnpm",
      args: "run start",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
