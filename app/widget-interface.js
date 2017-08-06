/**
* Copyright 2017 The MirrorOS Authors. All Rights Reserved.
*
* You may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      https://github.com/wassgha/MirrorOS/blob/master/LICENSE
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS-IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

const Class = require('class.extend');

const Widget = Class.extend('Widget', {

  init(id, zIndex) {
    this.title_ = 'New Widget';
    this.version_ = '0.1';
    this.zIndex_ = zIndex;
    this.id_ = id;
    this.element_ = null;
  },

  buildCallback() {

  },

  layoutCallback() {
  },

  getScripts() {
    return [];
  },

  getStyles() {
    return [];
  },

  getHTML() {
    return '';
  }
});

module.exports = Widget;
