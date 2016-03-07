# <%= moduleName %>
[![npm version](https://img.shields.io/npm/v/<%= moduleName %>.svg)](https://www.npmjs.com/package/<%= moduleName %>)
[![Build Status](https://travis-ci.org/<%= githubUsername %>/<%= moduleName %>.svg?branch=master)](https://travis-ci.org/<%= githubUsername %>/<%= moduleName %>)
[![npm download count](http://img.shields.io/npm/dm/<%= moduleName %>.svg?style=flat)](http://npmjs.org/<%= moduleName %>)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

> npm module to <%= description %>

<br>

## Install

```
npm install --save <%= moduleName %>
```


<br>

## Usage

```js
const <%= camelModuleName %> = require('<%= moduleName %>');

<%= camelModuleName %>('hackathons');
//=> 'hackathons & rainbows'
```


<br>

## API

### <%= camelModuleName %>(target)

##### target

Type: `string` || `Array`

<%= description %>

<br><% if (cli) { %>

## CLI

```
$ npm install --global <%= moduleName %>
```

```
$ <%= moduleName %> --help

  Usage
    <%= moduleName %> [input]

  Options
    --foo  Lorem ipsum. [Default: false]

  Examples
    $ <%= moduleName %>
    hackathons & rainbows

<br>
```<% } %>

## License

MIT © [Dawson Botsford](http://dawsonbotsford.com)


---
If you like this, star it. If you want to follow me, follow me.
