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

{
  "proxies":
  {
    "default":
    {
      "httpProxy": "http://120.25.125.165:1189",
        "httpsProxy": "http://120.25.125.165:1189",
        "noProxy": "*.test.example.com,.example2.com,127.0.0.0/8"
    }
  }
}
