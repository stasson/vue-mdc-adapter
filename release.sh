#!/bin/bash
DESC=`git describe --tags`
BRANCH="build-$DESC"

# cleanup
function cleanup () {
  git checkout --quiet master
  git branch -D $BRANCH
}

function error () {
  echo -e "error: $1"
  git reset --hard --quiet
  git checkout --quiet master
  cleanup
  exit 1
}

function ctrl_c {
  error "cancelled!"
}

trap ctrl_c INT

# make shure we are on master
current_branch=`git branch | sed -n '/\* /s///p'`
if [ "$current_branch" != "master" ]; then
  error "not on master"
fi

# make sure repo is clean
test -z "$(git status --porcelain)" || error "git status unclean:\n`git status --porcelain`" 

# checkout build branch
git checkout -b $BRANCH || error "can't checkout $BRANCH"
echo "build branch:  $BRANCH"

# patch version number
VERSION=`npm version patch --no-git-tag-version`  || error "npm version patch failed"

# changelog
npm run changelog

# build 
npm run build || error "build failed"

# ammend
git add --all || error "git add --all failed"
git add -u || error "git add -u failed"
git commit -m "build: $VERSION" || error "git commit failed"

# rebase master
git checkout master || error "can't checkout master"
git rebase $BRANCH || error "rebase on $BRANCH failed"

# publish
git tag -a $VERSION -m "$VERSION" || error "git tag failed"
git push origin master || error "git push failed"
git push origin $VERSION || error "git push tag failed"
npm publish || error "npm publish failed"

# exit
cleanup
echo $VERSION published
exit 0
