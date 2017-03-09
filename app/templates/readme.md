# <%= moduleName %>
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![XO code style][xo-image]][xo-url] ![][node-version-image]

> <%= description -%>

<% if (cli) { -%>
# CLI

## Install

```sh
$ yarn add global <%= moduleName %>
```

## Usage

```sh
$ <%= moduleName %>

```

More help

```sh
$ <%= moduleName %> --help

  Usage
    <%= moduleName %> [input]

  Options
    --foo  Lorem ipsum. [Default: false]

  Examples
    $ <%= moduleName %>
    hackathons & rainbows

# Package
```<% } %>
## Install

```
yarn add <%= moduleName %>
```

## Usage

```js
const <%= camelModuleName %> = require('<%= moduleName %>');

<%= camelModuleName %>('');
//=> ''
```

## API

### <%= camelModuleName %>(target)

#### Arguments

| Name    | Description                     |   Type   |  Default  |
| ------- | ------------------------------- | -------- |  -------  |
| target  | Object to split value's of      | `string` |   None    |

#### Returns

Type: `object`

## License

MIT © [Dawson Botsford](http://dawsonbotsford.com)

[npm-image]: https://badge.fury.io/js/<%= moduleName %>.svg
[npm-url]: https://npmjs.org/package/<%= moduleName %>
[travis-image]: https://travis-ci.org/<%= githubUsername %>/<%= moduleName %>.svg?branch=master
[travis-url]: https://travis-ci.org/<%= githubUsername %>/<%= moduleName %>
[xo-image]: https://img.shields.io/badge/code_style-XO-5ed9c7.svg
[xo-url]: https://github.com/sindresorhus/xo
[node-version-image]: https://img.shields.io/badge/Node-%3E%3Dv4.0.0-ff69b4.svg
