#!/bin/zsh
set -e

cd "$(dirname "$0")"
site_url="file://$(pwd)/index.html?v=$(/bin/date +%s)"
open "$site_url"
