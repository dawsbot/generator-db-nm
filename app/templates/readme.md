# <%= moduleName %>
[![npm version](https://img.shields.io/npm/v/<%= moduleName %>.svg)](https://www.npmjs.com/package/<%= moduleName %>)
<% if (!appveyor) { %>[![Build Status](https://travis-ci.org/<%= githubUsername %>/<%= moduleName %>.svg?branch=master)](https://travis-ci.org/<%= githubUsername %>/<%= moduleName %>)
<% } %>[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
<% if (appveyor) { %>
  <table>
    <thead>
      <tr>
        <th>Linux & OSX</th>
        <th>Windows</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td align="center">
          <a href="https://travis-ci.org/dawsonbotsford/<%= moduleName %>"><img src="https://api.travis-ci.org/dawsonbotsford/<%= moduleName %>.svg?branch=master"></a>
        </td>
        <td align="center">
          <a href="https://ci.appveyor.com/project/dawsonbotsford/<%= moduleName %>"><img src="http://www.gravatar.com/avatar/5f66f56cae930eb9ab2cd9e62b8285e6"></a>
        </td>
      </tr>
    </tbody>
  </table>
<% } %>
> <%= description %>

<br>
<% if (cli) { %>
# CLI

## Install

```sh
$ npm install --global <%= moduleName %>
```

## Usage

```sh
$ <%= moduleName %>

```

<br>

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

<br>

# Package
```<% } %>
## Install

```
npm install --save <%= moduleName %>
```

<br>

## Usage
<% if(bundle) {%>
#### Node

<% } -%>

```js
const <%= camelModuleName %> = require('<%= moduleName %>');

<%= camelModuleName %>('hackathons');
//=> 'hackathons'
```
<% if(bundle) { -%>
<br>

#### Web

```html
<script src="https://rawgit.com/dawsonbotsford/<%= moduleName %>/master/bundle.js"></script>
<script>
  alert(<%= camelModuleName %>('hackathons'));
  //=> 'hackathons'
</script>
```

<br>

Alternatively, you can install the browser bundle and reference it in `node_modules`

```html
<script src="<path to node_modules>/node_modules/<%= moduleName %>/bundle.js"></script>
```
<% } %><br>

## API

### <%= camelModuleName %>(target)

<br>

#### target

Type: `string`

<br>

#### returns

Type: `string`

<br>

## License

MIT © [Dawson Botsford](http://dawsonbotsford.com)
