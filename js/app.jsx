
import 'jquery-ui/ui/core'
import 'jquery-ui/ui/widgets/draggable'

import Alarm from './alarm.jsx'

const App = () => (
	<div className="app-container">
		<Alarm />
  </div>
)

ReactDOM.render(<App />, document.getElementById("app"))
