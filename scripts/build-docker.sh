#!/usr/bin/env bash

# build-docker.sh
#
# SUMMARY
#
#   Builds the Qovery docker images and optionally
#   pushes it to the Docker registry

set -eux

CHANNEL=$(scripts/util/release-channel.sh)
VERSION=$(scripts/version.sh)
DATE=$(date -u +%Y-%m-%d)
PUSH=${PUSH:-}
PLATFORM=${PLATFORM:-}

#
# Functions
#

build() {
  base=$1
  version=$2

  if [ -n "$PLATFORM" ]; then
    export DOCKER_CLI_EXPERIMENTAL=enabled
    docker run --rm --privileged docker/binfmt:66f9012c56a8316f9244ffd7622d7c21c1f6f28d
    docker buildx rm qovery-builder || true
    docker buildx create --use --name qovery-builder
    docker buildx install

    docker buildx build \
      --platform="$PLATFORM" \
      --tag timberio/qovery:$version-$base \
      target/artifacts \
      -f distribution/docker/$base/Dockerfile ${PUSH:+--push}
  else
    docker build \
      --tag timberio/qovery:$version-$base \
      target/artifacts \
      -f distribution/docker/$base/Dockerfile

    if [ -n "$PUSH" ]; then
      docker push timberio/qovery:$version-$base
    fi
  fi
}

#
# Build
#

echo "Building timberio/qovery:* Docker images"

if [[ "$CHANNEL" == "latest" ]]; then
  version_exact=$VERSION
  version_minor_x=$(echo $VERSION | sed 's/\.[0-9]*$/.X/g')
  version_major_x=$(echo $VERSION | sed 's/\.[0-9]*\.[0-9]*$/.X/g')

  for i in $version_exact $version_minor_x $version_major_x latest; do
    build alpine $i
    build debian $i
  done
elif [[ "$CHANNEL" == "nightly" ]]; then
  for i in nightly-$DATE nightly; do
    build alpine $i
    build debian $i
  done
fi
