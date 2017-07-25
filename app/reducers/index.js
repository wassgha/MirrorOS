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
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import location from './location_reducer';

const rootReducer = combineReducers({
  location,
});

export default rootReducer;
