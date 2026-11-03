#!/bin/bash
# Download a known public image to replace logo.png
# React logo from the React GitHub repo (public domain / open license)
curl -L -o /home/kendy/coding/react/pemira-2026/src/logo.png \
  "https://raw.githubusercontent.com/reactjs/react.dev/main/static/logo.svg" \
  2>/dev/null || \
curl -L -o /home/kendy/coding/react/pemira-2026/src/logo.png \
  "https://upload.wikimedia.org/wikipedia/commons/a/a7/react-logo.svg" \
  2>/dev/null

echo "Downloaded $(stat -c%s /home/kendy/coding/react/pemira-2026/src/logo.png 2>/dev/null || echo 'failed') bytes"