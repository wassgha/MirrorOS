![MirrorOS Logo](https://i.imgur.com/l4mJMa4.jpg)

<p align="center">
<a href="https://github.com/wassgha/MirrorOS/releases/latest"><img src="https://img.shields.io/github/tag/wassgha/MirrorOS.svg" alt="Github Releases" /></a>
<a href="https://travis-ci.org/wassgha/MirrorOS"><img src="https://travis-ci.org/wassgha/MirrorOS.svg?branch=master" alt="Build Status" /></a>
<a href="https://snyk.io/test/github/wassgha/MirrorOS"><img src="https://snyk.io/test/github/wassgha/MirrorOS/badge.svg" alt="Snyk Vulnerabilities Check" /></a>
<br><br>
</p>

## MirrorOS

**MirrorOS** is a lightweight user interface designed specifically for Magic Mirrors and transparent glass touch screens. The UI is built on NodeJS, React and Electron.

![App Launcher](http://i.imgur.com/tPPSvuS.jpg "Mirror OS App Tray")


## Video Demo
[![ezgif](https://user-images.githubusercontent.com/591655/28448184-b7124a1a-6d8a-11e7-93f0-cf18a663dd2c.gif)
](https://www.youtube.com/watch?v=1FI0-PuNp8E)

## Automatic installer
Coming Soon.

## Manual Installation
Please be aware that MirrorOS is currently at the "proof of concept" stage. Almost all features are broken/in an early stage. If you still wan to try the software, please follow this tutorial [How to Install on a Raspberry Pi](https://github.com/wassgha/MirrorOS/wiki/Install-MirrorOS-on-a-Raspberry-Pi)

* **Note: requires a node version >= 7 and an npm version >= 4.**
* **If you have installation or compilation issues with this project, please see [our debugging guide](https://github.com/chentsulin/electron-react-boilerplate/issues/400)**

First, clone the repo via git:

```bash
$ git clone --depth=1 https://github.com/wassgha/MirrorOS.git MirrorOS
```

And then install dependencies with yarn.

```bash
$ cd MirrorOS
$ yarn
```
**Note**: If you can't use [yarn](https://github.com/yarnpkg/yarn) for some reason, try `npm install`.

## Run
To deploy the app and run it in production mode, simply use:
```bash
$ npm start
```

## Features

Current features
  - Face Recognition and Smile detection for logging-in to the Mirror
  - Constant monitoring of user presence through face detection
  - Home UI almost done, with clock, date and weather
  - Draggable placeholder widgets
  - Almost ready app launcher
  - Leap Motion Support to substitute touch screens (using [Leap Motion Touch Screen](https://github.com/wassgha/LeapMotionTouchScreen))

To implement
  - Support for apps, widgets and extentions
  - Providing an API for developers to extend the UI
  - Communication with nearby devices (getting notification from phone, connecting to bluetooth speakers)
  - Support for Air Play and other video streaming platforms to display content on the Magic Mirror/Display
  - Alexa integration
  - User accounts and face training
  - Live selfie filters app (filter overlay on mirror)
  - Uber/Lyft integration
  - News app
  - Live TV widget
  - Smart home widget (Nest & co integration)
  - OTA updates

## Development

Start the app in the `dev` environment. This starts the renderer process in **hot-module-replacement** mode and starts a server that sends hot updates to the renderer process:

```bash
$ npm run dev
```

## Editor Configuration
**Atom**
```bash
apm install editorconfig es6-javascript atom-ternjs javascript-snippets linter linter-eslint language-babel autocomplete-modules file-icons
```

**VSCode**
* [Editorconfig](https://github.com/editorconfig/editorconfig-vscode)
* [ESLint](https://github.com/Microsoft/vscode-eslint)
* [Flow](https://github.com/flowtype/flow-for-vscode)
* [Babel](https://github.com/dzannotti/vscode-babel)
* [Jest](https://github.com/orta/vscode-jest)
* [ES6 Snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets)
* [React Snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.ReactSnippets)
:bulb: *If you are using the `flow-for-vscode` plugin, make sure to disable the `flowtype-errors/show-errors` eslint rule in the `.eslintrc` by setting it to `0`*

**Sublime**
* [Editorconfig Integration](https://github.com/sindresorhus/editorconfig-sublime#readme)
* [Linting](https://github.com/SublimeLinter/SublimeLinter3)
* [ESLint Integration](https://github.com/roadhump/SublimeLinter-eslint)
* [Syntax Highlighting](https://github.com/babel/babel-sublime)
* [Autocompletion](https://github.com/ternjs/tern_for_sublime)
* [Node Snippets](https://packagecontrol.io/packages/JavaScript%20%26%20NodeJS%20Snippets)
* [ES6 Snippets](https://packagecontrol.io/packages/ES6-Toolkit)

**Others**
* [Editorconfig](http://editorconfig.org/#download)
* [ESLint](http://eslint.org/docs/user-guide/integrations#editors)
* Babel Syntax Plugin

## DevTools

- OS X: <kbd>Cmd</kbd> <kbd>Alt</kbd> <kbd>I</kbd> or <kbd>F12</kbd>
- Linux: <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>I</kbd> or <kbd>F12</kbd>
- Windows: <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>I</kbd> or <kbd>F12</kbd>

*See [electron-debug](https://github.com/sindresorhus/electron-debug) for more information.*


## How to write your own MirrorOS widget

Will be updated soon with a complete guide.
**Note:** Class names and IDs starting with `os` and `os-` are reserved for the
internal use of the MirrorOS runtime.

## Maintainers

- [Wassim Gharbi](https://github.com/wassgha)
- [Zura Mestiashvili](https://github.com/prosperi)

## License
Non-commercial, private and educational use only except by written authorization.
