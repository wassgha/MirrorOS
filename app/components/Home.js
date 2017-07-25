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

// @flow
import React, { Component } from 'react';
import styles from '../styles/Home.scss';

import DateTimeWeather from '../components/DateTimeWeather';

@CSSModules(styles)

export default class Home extends Component {
  componentDidMount () {
    console.log('mounted');
    // Animate Corners
    $('#os-border-top').animate({'width': '100%'}, 1000, () => {
      $('#os-border-left').animate({'height': '100%'}, 1000, () => {
        $('#os-border-bottom').animate({'width': '100%'}, 1000, () => {
          $('#os-border-right').animate({'height': '100%'}, 1000, () => {
            // Show Corner Regions
            $('#os-top-left-corner').slideDown(1200)
            $('#os-top-right-corner').slideDown(1200)
            $('#os-bottom-left-corner').slideDown(1200)
            $('#os-bottom-right-corner').slideDown(1200)
            // Show App Launcher Button
            $('#os-app-launcher').slideDown(1200, () => {
              // Show all startup widgets
              $('.widget').fadeIn(1200)
            })
          })
        })
      })
    })
  }


  render() {
    return (
      <div>
        {/* Borders */}
        <div id="os-border-top" className={styles.borderTop}></div>
        <div id="os-border-left" className={styles.borderLeft}></div>
        <div id="os-border-bottom" className={styles.borderBottom}></div>
        <div id="os-border-right" className={styles.borderRight}></div>

        {/* App Launcher */}
        <button id="os-app-launcher" className={styles.appLauncherButton}>
          <i className='material-icons' onClick={this.displayAppLauncher}>
            apps
          </i>
        </button>

        {/* Inline Widget Regions */}
        <div id="os-top-left-corner" className={styles.topLeftCorner}>
          {/* Displays the logged in user */}
        </div>
        <div id="os-top-right-corner" className={styles.topRightCorner}>
          {/* Displays the date, time and current weather */}
          <DateTimeWeather/>
        </div>
        <div id="os-bottom-left-corner" className={styles.bottomLeftCorner}>
          {/* Empty for now */}
        </div>
        <div id="os-bottom-right-corner" className={styles.bottomRightCorner}>
          {/* Empty for now */}
        </div>

        {/* Floating Widgets */}
      </div>
    );
  }
}
