#!/bin/zsh
set -e

cd "$(dirname "$0")"

if [ ! -d "node_modules" ]; then
  npm install
fi

npm run dev -- --host 127.0.0.1 --port 4173 --strictPort > ".local-server.log" 2>&1 &
LOCAL_APP_PID=$!

finish() {
  kill "$LOCAL_APP_PID" 2>/dev/null || true
}
trap finish EXIT INT TERM

for attempt in {1..80}; do
  if curl --silent --fail "http://127.0.0.1:4173" > /dev/null; then
    open "http://127.0.0.1:4173"
    wait "$LOCAL_APP_PID"
    exit 0
  fi
  sleep 0.25
done

echo "启动失败，请查看 .local-server.log"
wait "$LOCAL_APP_PID"
