# Gatcoin Javascript Test

## This repo was initialised using this [boilerplate project](https://github.com/ant-design/create-react-app-antd)

## Install
I am using `Yarn`, `NPM` has more or less the same command.

run `yarn install` at `/solution`.

## Running
Run `yarn start` at `/solution`.

## QnA

### How did you decide which technologies to use as part of your solution?
React Router should be the default option for a SPA's client side routing. Great community and good guides around.
Ant Design is an up and rising framework. Its parent company, Ant(if I am not mistaken), just got
huge funding! That makes me even more confident that the project will be sustainable.
Lodash is an awesome utility library that I use all the time. I am aware that there are ES6 versions of it now,
but at this point, its just muscle memory already.

### Are there any improvements you could make to your submission?
Yeah a few, for the card items, when its title is longer than the card's width, it line-breaks.
A solution would be to chunk up the items into groups of 6 and `<Row>` each of the chunks.
This solves the problem of the line break making a huge whitespace-d gap on screen.

### What would you do differently if you were allocated more time?
Tests for data fetching. Empty states for item rendering. Expand long titles on hover rather than have it immediately displayed on screen.
That would make all the items aligned horizontally.
Dynamic filters! I can pick which releaseYear I want to limit.