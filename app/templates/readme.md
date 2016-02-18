# <%= moduleName %> [![Build Status](https://travis-ci.org/<%= githubUsername %>/<%= moduleName %>.svg?branch=master)](https://travis-ci.org/<%= githubUsername %>/<%= moduleName %>) [![npm](https://img.shields.io/npm/v/<%= moduleName %>.svg)](https://www.npmjs.com/package/<%= moduleName %>)

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

<%= camelModuleName %>('unicorns');
//=> 'unicorns & rainbows'
```


<br>

## API

### <%= camelModuleName %>(pattern, target)

##### pattern

Type: `string`

##### target

Type: `string` || `Array`

Removes all **exact occurences** of pattern in target

<br>

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
    unicorns & rainbows
    $ <%= moduleName %> ponies
    ponies & rainbows
```<% } %>


<br>

## License

[WTFPL-2.0](https://tldrlegal.com/license/do-wtf-you-want-to-public-license-v2-(wtfpl-2.0)#summary) [<%= name %>](<%= website %>)
