import PropTypes from "prop-types"
import React from "react"

const Button = ({ timerRunning, handleClick, label, show }) => (
  <button onClick={handleClick} className={show ? 'hidden button' : 'button'} >
    {timerRunning ? label.active: label.notActive}
  </button>
)

Button.propTypes = {
  timerRunning: PropTypes.bool,
  handleClick: PropTypes.func,
}

Button.defaultProps = {
  timerRunning: false
}

export default Button