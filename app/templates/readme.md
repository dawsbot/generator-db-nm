# <%= moduleName %> [![Build Status](https://travis-ci.org/<%= githubUsername %>/<%= moduleName %>.svg?branch=master)](https://travis-ci.org/<%= githubUsername %>/<%= moduleName %>) [![npm version](https://badge.fury.io/js/<%= moduleName %>.svg)](https://badge.fury.io/js/<%= moduleName %>)

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

### <%= camelModuleName %>.secondThing(input, [options])

##### input

Type: `string`

secondThing does a specific thing to input

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.<% if (cli) { %>


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

MIT © [<%= name %>](<%= website %>)
