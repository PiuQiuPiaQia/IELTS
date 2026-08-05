module.exports = {
  apps: [
    {
      name: "ielts-writing-review",
      cwd: __dirname,
      script: "node_modules/vinext/dist/cli.js",
      args: "start --port 4173 --hostname 127.0.0.1",
      interpreter: "/Users/zhangao/.local/bin/node",
      exec_mode: "fork",
      instances: 1,
      autorestart: true,
      restart_delay: 2000,
      max_restarts: 20,
      watch: false,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
