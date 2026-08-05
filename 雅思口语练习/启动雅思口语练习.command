#!/bin/zsh

cd "$(dirname "$0")" || exit 1

if [ ! -d node_modules ]; then
  pnpm install
fi

(sleep 2; open "http://localhost:46273") &
pnpm run dev
