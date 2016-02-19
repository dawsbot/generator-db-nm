# <%= moduleName %>
[![Build Status](https://travis-ci.org/<%= githubUsername %>/<%= moduleName %>.svg?branch=master)](https://travis-ci.org/<%= githubUsername %>/<%= moduleName %>)
[![NPM downloads](http://img.shields.io/npm/dm/<%= moduleName %>.svg?style=flat)](http://npmjs.org/<%= moduleName %>)
[![npm](https://img.shields.io/npm/v/<%= moduleName %>.svg)](https://www.npmjs.com/package/<%= moduleName %>)

> <%= description %>

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

[WTFPL-2.0](https://tldrlegal.com/l/wtfpl) [<%= name %>](<%= website %>)
