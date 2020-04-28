import PropTypes from "prop-types"
import React from "react"

export default class InstructionsModal extends React.Component {
  getCompleteContent(mode) {
    const complete = {
      title: 'The Complete Breath',
      subtitle: 'The fundamental basic breathing pattern',
      copy: 'Inhale for 4 seconds, hold for 2, and exhale over 6 seconds'
    }
    const oneMin = {
      title: 'The One Minute Breath',
      subtitle: 'One breath per minute, 20 seconds per part',
      copy: 'Inhale for 20 seconds, hold for 20, exhale for 20'
    }

    return mode === 'complete' ? complete : mode === 'oneMin' ? oneMin : complete
  };

  render() {
    return(
      <div className={'instructions-modal ' + (this.props.show ? 'hidden' : '' )} >
        <div className="text__title">
          {this.getCompleteContent(this.props.mode).title}
          {this.props.timerRunning}
        </div>
        <div className="text__subtitle">
          {this.getCompleteContent(this.props.mode).subtitle}
        </div>
        <div className="text__copy">
          {this.getCompleteContent(this.props.mode).copy}
        </div>
      </div>
    )
  }
}

InstructionsModal.propTypes = {
  mode: PropTypes.string,
  show: PropTypes.bool
}

InstructionsModal.defaultProps = {
  mode: 'complete',
  show: false
}
