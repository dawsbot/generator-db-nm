'use strict';
const humanizeUrl = require('humanize-url');
const yeoman = require('yeoman-generator');
const _s = require('underscore.string');
const fs = require('fs');

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
      name: 'description',
      message: 'What description do you want to use for your module?',
      default: 'descrr'
    }, {
      name: 'argLength',
      message: 'How many args do you want your main function to have?',
      default: 1
    }, {
      name: 'cli',
      message: 'Do you need a CLI?',
      type: 'confirm',
      default: false
    }, {
      name: 'appveyor',
      message: 'Test with appveyor?',
      type: 'confirm',
      default: true
    }, {
      name: 'bundle',
      message: 'Create a web bundle?',
      type: 'confirm',
      default: true
    }], props => {
      const tpl = {
        moduleName: props.moduleName,
        camelModuleName: _s.camelize(props.moduleName),
        githubUsername: githubUsername,
        name: self.user.git.name(),
        description: props.description,
        email: self.user.git.email(),
        website: website,
        humanizedWebsite: humanizeUrl(website),
        cli: props.cli,
        appveyor: props.appveyor,
        bundle: props.bundle,
        argLength: props.argLength
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
        //link cli
        this.spawnCommandSync('npm link');
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
    fs.renameSync('github', '.github');
  }
});
