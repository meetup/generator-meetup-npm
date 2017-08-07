'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');


const Rx = require('rxjs');
const { exec } = require('child_process');
const exec$ = Rx.Observable.bindNodeCallback(exec);

module.exports = class extends Generator {
  initializing(){
    const done = this.async();
    //todo verify pbcopy
    /*
    exec('which travis',(err,out) => {
      console.log('verifying travis CLI...')
      console.log('>which travis')
      console.log(out);
      if(out.includes('not found')){
        console.log('please gem install travis')
        process.exit();
      } else {
        console.log('travis CLI verified')
        console.log('verifying travis login...')
        console.log('>travis whoami')
      */
        exec$('which travis')
          .do(() => console.log('travis CLI verified'), () => console.log('pleae gem install travis'))
          .flatMap(()=> exec$('travis whoami'))
          .do(() => console.log('ALL SET'),() => console.log('please `travis login`'))
          .subscribe(null, null, done);
  }
  //todo `travis enable`y
  //ssh-keygen -t rsa -b 4096 -C "<your_email>" -f github_deploy_key -N ''
  //add deploy key to github - script
  //delete the public key
  //travis encrypt-file github_deploy_key
  //get xxxxxxxxxxxx
  //rm github_deploy_key and gitignore
  //generate .travis.yml
  //travis encrypt -r "<username>/<repository>" \
  //  GH_USER_EMAIL="<your_email>" \
  //  GH_USER_NAME="<your_name>"
  //add travis secure key
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the mind-blowing ' + chalk.red('generator-meetup-npm') + ' generator!'
    ));

    const prompts = [{
      type: 'confirm',
      name: 'someAnswer',
      message: 'Would you like to enable this option?',
      default: true
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath('Makefile'),
      this.destinationPath('Makefile')
    );
  }

  install() {
    this.installDependencies();
  }
};
