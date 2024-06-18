#!/bin/bash

export LANG=en_US.UTF-8
# tmp fix https://stackoverflow.com/questions/69692842/error-message-error0308010cdigital-envelope-routinesunsupported
#export NODE_OPTIONS=--openssl-legacy-provider

cd /mnt/documentation/website
yarn
cd ..
./scripts/live_update.sh
