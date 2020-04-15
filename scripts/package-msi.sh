#!/bin/bash
set -exuo pipefail

rm -rf target/msi-x64
cp -R distribution/msi target/msi-x64
cp target/artifacts/qovery-x86_64-pc-windows-msvc.zip target/msi-x64
pushd target/msi-x64
powershell '$progressPreference = "silentlyContinue"; Expand-Archive qovery-x86_64-pc-windows-msvc.zip'
./build.sh
popd
cp target/msi-x64/qovery.msi target/artifacts/qovery-x64.msi
