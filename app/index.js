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
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './components/Root';
import { configureStore, history } from './store/configureStore';
import './app.global.scss';

const store = configureStore();

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('os-root')
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NextRoot = require('./components/Root'); // eslint-disable-line global-require
    render(
      <AppContainer>
        <NextRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('os-root')
    );
  });
}
