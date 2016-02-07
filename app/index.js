'use strict';
const superb = require('superb');
const normalizeUrl = require('normalize-url');
const humanizeUrl = require('humanize-url');
const yeoman = require('yeoman-generator');
const _s = require('underscore.string');

module.exports = yeoman.Base.extend({
  init() {
    const cb = this.async();
    const self = this;
    const githubUsername = 'dawsonbotsford';
    const website = 'http://dawsonbotsford.com';

    this.prompt([{
      name: 'moduleName',
      message: 'What do you want to name your module?',
    default: this.appname.replace(/\s/g, '-'),
      filter: x => _s.slugify(x)
    }, {
      name: 'cli',
      message: 'Do you need a CLI?',
      type: 'confirm',
    default: false
    }], props => {
      const tpl = {
        moduleName: props.moduleName,
        camelModuleName: _s.camelize(props.moduleName),
        githubUsername: githubUsername,
        name: self.user.git.name(),
        email: self.user.git.email(),
        website: website,
        humanizedWebsite: humanizeUrl(website),
        superb: superb(),
        cli: props.cli
      };

      const mv = (from, to) => {
        self.fs.move(self.destinationPath(from), self.destinationPath(to));
      };

      self.fs.copyTpl([
        `${self.templatePath()}/**`,
        '!**/cli.js'
      ], self.destinationPath(), tpl);

      if (props.cli) {
        self.fs.copyTpl(self.templatePath('cli.js'), self.destinationPath('cli.js'), tpl);
      }

      mv('editorconfig', '.editorconfig');
      mv('gitattributes', '.gitattributes');
      mv('gitignore', '.gitignore');
      mv('travis.yml', '.travis.yml');
      mv('_package.json', 'package.json');

      cb();
    });
  },
  git() {
    this.spawnCommandSync('git', ['init']);
  },
  install() {
    this.installDependencies({bower: false});
  }
});
