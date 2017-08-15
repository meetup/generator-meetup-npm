# generator-meetup-npm [![npm version](https://badge.fury.io/js/%40meetup%2Fgenerator-meetup-npm.svg)](https://badge.fury.io/js/%40meetup%2Fgenerator-meetup-npm.svg) [![Build Status](https://travis-ci.org/meetup/generator-meetup-npm.svg?branch=master)](https://travis-ci.org/meetup/generator-meetup-npm)
> Yeoman generator for npm packages

## Installation

First, install [Yeoman](http://yeoman.io) and generator-meetup-npm using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g @meetup/generator-meetup-npm
```

Then generate your new project:

```bash
yo meetup-npm
```

## This script has some rough edges

 * It will fail if there's existing `github_deploy_key` `github_deploy_key.pub` `.travis` files / directorties
 * It will copy the deployment keys for you. You need to add them to the github repo settings go to https://github.com/(your_repo)/settings/keys and make sure "Allow write access" is checked
 * You need to `.gitignore` `github_deploy_key` or you will deploy it with your npm module, making it public.
 * You need to edit the `.travis.yml` to include the key id's.

## License

MIT © [Matt Kime]()


[npm-image]: https://badge.fury.io/js/generator-meetup-npm.svg
[npm-url]: https://npmjs.org/package/generator-meetup-npm
[travis-image]: https://travis-ci.org/mattkime/generator-meetup-npm.svg?branch=master
[travis-url]: https://travis-ci.org/mattkime/generator-meetup-npm
[daviddm-image]: https://david-dm.org/mattkime/generator-meetup-npm.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/mattkime/generator-meetup-npm
