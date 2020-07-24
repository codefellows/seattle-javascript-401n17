# Install Node and Supporting Packages

## Install NVM & Node

[Node Version Manager](https://github.com/nvm-sh/nvm)

1. Follow the installation instructions in the repo README, under the "Git Install" section.
   - This will create the directory `~/.nvm` and install nvm into it.
   - run `ls -a ~/` and look for the **.nvm** directory
1. Follow the instructions under the "Usage" section to install Node, and ensure setup is correct.
   - Run `nvm install node` to install the latest version of Node.
   - You can run `nvm ls` to see all the versions of Node you have installed. The one that is currently "active" (i.e. the one that will run when you type a command beginning with `node` on your command line) will have an arrow `->` in front of it. Make sure the arrow points to the latest version of Node by typing `nvm use node`.

## Install global node modules

- **nodemon** `npm i -g nodemon`
- **json-server** `npm i -g json-server`
- **live-server** `npm i -g live-server`

### Uninstall other globally installed packages

- **jest** `npm un -g jest`
- **eslint** `npm un -g eslint`

## Submitting This Assignment

Submit a screen shot showing the output of the following commands, run from your terminal

```bash
nvm --version
which node; node --version
which nodemon; nodemon --version
which json-server; json-server --version
which live-server; live-server --version
which jest;
which eslint;
```
