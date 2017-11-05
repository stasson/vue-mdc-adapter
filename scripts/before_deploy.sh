#!/bin/bash

# verify one of the commit was a release
LAST_TAG=`git describe --tags --abbrev=0`
git log $LAST_TAG..HEAD --oneline --format="%s" | grep -E "^chore\(release\)"
