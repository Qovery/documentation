#!/bin/sh

echo "######################"
echo "# START LIVE WRITING #"
echo "######################"

if [ "$(uname)" == "Linux" ] ; then
    ORIG_PWD=$(pwd)
    cd website && yarn start &
    cd $ORIG_PWD
    inotifywait -qrm -e close_write . | while read content ; do
        make generate USE_CONTAINER=none
    done
else
    echo "Sorry, your OS is not supported yet"
fi

