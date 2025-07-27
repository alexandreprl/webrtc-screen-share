#!/bin/bash
set -e
set -o pipefail

pkg .

zip -r webrtc-screen-share.zip dist

butler push webrtc-screen-share.zip themarelle/webrtc-screen-share:win-linux-osx

TAG_NAME=deploy_$(date +"%Y%m%d%H%M")
git tag $TAG_NAME
git push origin $TAG_NAME