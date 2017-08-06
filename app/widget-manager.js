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

import Widget from './widget-interface';

class WidgetManager {
  constructor() {
    /** @private */
    this.widgets_ = [];
  }

  register(name, widgetDef) {
    if (this.widgets_[name]) {
      throw new Error(
        `Widget with name ${name} already registered with the manager`
      );
    }
    const NewWidget = Widget.extend(name, widgetDef);
    this.widgets_[name] = new NewWidget(name, Object.keys(this.widgets_).length);
  }

  setFocus(toChange) {
    const zIndexToChange = this.widgets_[toChange].zIndex_;
    for (name in this.widgets_) {
      if (this.widgets_[name].zIndex_ > zIndexToChange) {
        this.widgets_[name].zIndex_ -= 1;
      } else if (name == toChange) {
        this.widgets_[name].zIndex_ = Object.keys(this.widgets_).length - 1;
      }
      this.widgets_[name].element_.style.zIndex = this.widgets_[name].zIndex_;
    }
  }

}

module.exports = new WidgetManager();
