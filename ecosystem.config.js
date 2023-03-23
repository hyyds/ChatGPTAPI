module.exports = {
  apps: [
    {
      name: "ChatGPTAPI",
      script: "ts-node",
      args: '-P ./tsconfig.build.json ./src/main.ts',
      log_date_format: "YYYY-MM-DD HH:mm Z",
    },
  ],
};

