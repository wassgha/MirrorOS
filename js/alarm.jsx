const Alarm = React.createClass({

	componentDidMount: () => {
		$("#alarm").draggable()
		$("#am-pm").on('click', (event) => {
			const that = event.target
			if(that.innerHTML == "AM") that.innerHTML = "PM"
			else that.innerHTML = "AM"
		})
	},

	render(){
		return (
			<div className="alarm window" id="alarm">
				<center>
					<input className="input-number" defaultValue="0" type="number" min="0" max="12"/>
					<input className="input-number" defaultValue="0" type="number" min="0" max="12"/>
					<p id="am-pm">AM</p>
				</center>
			</div>
		)
	}
})

export default Alarm
