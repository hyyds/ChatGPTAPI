module.exports = {
  apps: [
    {
      name: "ChatGPTAPI",
      script: "ts-node",
      cron_restart: '1 1 * * *',
      cwd: './src',
      args: 'main.ts',
      log_date_format: "YYYY-MM-DD HH:mm Z",
    },
  ],
};
