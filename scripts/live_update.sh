#!/bin/bash

function check_bin() {
    bin=$1
    which $bin
    status=$(echo $?)
    if [ $status -ne 0 ] ; then
        echo "$bin is not found, please install it"
        exit 1
    fi
}

echo "######################"
echo "# START LIVE WRITING #"
echo "######################"

ORIG_PWD=$(pwd)
cd website && yarn start --host 0.0.0.0 &
cd $ORIG_PWD

if [ $IS_DOCKER_ON_MAC -eq 1 ] ; then
    echo "Docker on Mac, refreshing every 30s"
    while [ 1 ] ; do
        make generate USE_CONTAINER=none
        sleep 30
    done
elif [ "$(uname)" == "Linux" ] ; then
    make generate USE_CONTAINER=none
    check_bin inotifywait
    inotifywait -qrm -e close_write . | while read content ; do
        make generate USE_CONTAINER=none
    done
elif [ "$(uname)" == "Darwin" ] ; then
    check_bin fswatch
    fswatch -o . | xargs -n1 -I{} make generate USE_CONTAINER=none
else
    echo "Sorry, your OS is not supported"
fi

