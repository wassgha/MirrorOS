import React, { Component } from 'react';
import { join } from 'path'
const asyncRequire = require('../utils/asyncrequire');
const fs = require('mz/fs');

async function rreaddir(dir) {
  const allFiles = [];
  const files = (await fs.readdir(dir));
  allFiles.push(...files);
  return allFiles;
}

async function isDirectory(item) {
  const stat = await fs.statSync(item); // do something
  return stat.isDirectory();
}

export function loadWidgets() {
  return (dispatch, getState) => {
    const widgetsDir = './app/widgets';
    let loaders = [];

    rreaddir(widgetsDir).then((files) => {
      Promise.all(files.map((item) => {
        isDirectory(join(widgetsDir, item)).then((isDir) => {
          if (isDir) {
            loaders.push(new Promise((resolve, reject) => {
                Promise.all([
                  require('../widgets/' + item)
                ]).then(() => {
                  resolve();
                });
            }));
          }
        })
      })).then(() => {
        Promise.all(loaders).then(() => {
          return dispatch({
            type: 'WIDGETS_LOADED',
            payload: '',
          });
        });
      });
    });
  };
}

export function getWidgetStyles() {
  let css = [];
  const widgetManager = require('../widget-manager');
  for (name in widgetManager.widgets_) {
    widgetManager.widgets_[name].getStyles().forEach(style => {
      css.push(
        <link
          rel="stylesheet" type="text/css"
          key={name} href={`widgets/${name}/${style}`}/>
      );
    })
  }
  return css;
}

export function getWidgetHTML() {
  let html = [];
  const widgetManager = require('../widget-manager');
  for (name in widgetManager.widgets_) {
    html.push(widgetManager.widgets_[name].getHTML());
  }
  return html;
}
