#!/bin/zsh

cd "$(dirname "$0")" || exit 1

if [ ! -d node_modules ]; then
  npm install
fi

(sleep 2; open "http://localhost:46273") &
npm run dev
