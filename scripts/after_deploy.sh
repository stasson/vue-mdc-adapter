#!/bin/bash

TAG=`git describe --tags --abbrev=0`
git add -A
git commit --no-verify -m "ci: publish $TAG" -m "[skip ci]"
git push --follow-tags https://$GH_TOKEN@github.com/stasson/vue-mdc-adapter.git HEAD:master
