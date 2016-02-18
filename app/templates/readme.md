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

### <%= camelModuleName %>(target)

##### target

<<<<<<< 3daa72ff00831b5f13eeac7475b2a216e20236fe
Type: `string` || `Array`

Removes all **exact occurences** of pattern in target
=======
Type: `string`

<%= description %>
>>>>>>> maybe fixed

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

[Do What The F*ck You Want To License](https://www.tldrlegal.com/l/wtfpl) © [<%= name %>](<%= website %>)
