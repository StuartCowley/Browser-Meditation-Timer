import PropTypes from "prop-types"
import React from "react"

export default class ModeSelector extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.props.chooseMode(event.target.value)
  }
  componentDidMount() {
    this.props.chooseMode('complete')
  }
  render() {
    return (
      <div className={'mode-selector ' + (this.props.show ? 'hidden' : '' )}>
        <form>
          <label htmlFor="breath-select">Pattern:</label>
        <select  name="breath" id="breath-select" onChange={this.handleChange}>
          <option value="complete">Complete Breath</option>
          <option value="oneMin">1 Minute Breath</option>
        </select>
        </form>
      </div>
    )
  }
}

ModeSelector.propTypes = {
  mode: PropTypes.string,
  show: PropTypes.bool
}

ModeSelector.defaultProps = {
  mode: 'complete',
  show: false
}
