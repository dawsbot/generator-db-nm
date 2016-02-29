# <%= moduleName %>
[![npm version](https://img.shields.io/npm/v/<%= moduleName %>.svg)](https://www.npmjs.com/package/<%= moduleName %>)
[![Build Status](https://travis-ci.org/<%= githubUsername %>/<%= moduleName %>.svg?branch=master)](https://travis-ci.org/<%= githubUsername %>/<%= moduleName %>)
[![npm download count](http://img.shields.io/npm/dm/<%= moduleName %>.svg?style=flat)](http://npmjs.org/<%= moduleName %>)

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
    $ <%= moduleName %> ponies
    ponies & rainbows

<br>
```<% } %>

## License

[MIT](https://tldrlegal.com/l/wtfpl) © [Dawson Botsford](http://dawsonbotsford.com)


---
If you like this, star it. If you want to follow me, follow me.
