import PropTypes from "prop-types"
import React from "react"

export default class Display extends React.Component {    
  render() {
    return(
      <>
      <div className='display-backdrop' style={{
        visibility: `${this.props.show}`,
      }}></div>
      <div
      style={{
        position: 'absolute',
        zIndex: '-10',
        top: '20px',
        right: '20px',
        bottom: '20px',
        left: '20px',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: 'silver',
        opacity: '0.5',
        visibility: `${this.props.show}`,
        animation: `${this.props.selector}`,
      }}
      >        
      </div>
      </>
    )
  }
}

Display.propTypes = {
  selector: PropTypes.string
}

Display.defaultProps = {  
  selector: ''
}
