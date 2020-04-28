import PropTypes from "prop-types"
import React from "react"

export default class TotalTimer extends React.Component {    
	componentDidMount() {
    this.timerID = setInterval(() => this.props.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID)
  }
  
	render() {
    return (
      <div className='total-timer'>
        {this.props.time.hours}:
        {this.props.time.minutes<10 ? '0' + this.props.time.minutes : this.props.time.minutes }:
        {this.props.time.seconds<10 ? '0' + this.props.time.seconds : this.props.time.seconds }
		  </div>
	  );
	}
}

TotalTimer.propTypes = {
  timerRunning: PropTypes.bool,
  time: PropTypes.object,
  tick: PropTypes.func,
}

TotalTimer.defaultProps = {
  timerRunning: false,
}
