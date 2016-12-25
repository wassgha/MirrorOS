const Alarm = React.createClass({

	componentDidMount: () => {
		$("#alarm").draggable()
	},

	render(){
		return (
			<div className="alarm window" id="alarm">

			</div>
		)
	}
})

export default Alarm
