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

import React from 'react';

const widgetManager = require('../../widget-manager');

widgetManager.register('VideoPlayer', {

  init(id, zIndex) {
    this._super(id, zIndex);
    this.title_ = 'Video Player';
    this.version_ = '0.1';
  },

  buildCallback() {

  },

  layoutCallback() {
  },

  getScripts() {
    return [];
  },

  getStyles() {
    return [
      'style.css',
    ];
  },

  getHTML() {
    return (
      <div ref={(element) => { this.element_ = element; }}
           key={this.id_}
           className='widget video'
           id={this.id_}>
        <video autoPlay src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" />
      </div>
    );
  }
});
