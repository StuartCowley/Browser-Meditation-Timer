import React from "react"

import VideoBackground from "../components/VideoBackground.js"
import Button from "../components/Button.js"
import Display from "../components/Display.js"
import TotalTimer from "../components/TotalTimer.js"
import ModeSelector from "../components/ModeSelector.js"
import InstructionsModal from "../components/InstructionsModal.js"
import SEO from "../components/Seo.js"

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
	  this.state = {
      currentMode: '',
      timerRunning: false,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
    this.tick = this.tick.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }
  
  toggleTimer = () => {
    let current = this.state.timerRunning;
    this.setState({timerRunning: !current});
  }

  tick() {
    if (this.state.timerRunning) {
      this.state.seconds < 59 ? this.setState({seconds: this.state.seconds +1}) : 
      this.state.minutes < 59 ? this.setState({minutes: this.state.minutes +1, seconds: 0}) : 
      this.setState({hours: this.state.hours +1, minutes: 0, seconds: 0})
    }
  }

  resetTimer() { this.setState({hours: 0, minutes: 0, seconds: 0}) }

  chooseMode = (data) => { this.setState({currentMode: data}) }
  
  selector = () => {
    let current = this.state.currentMode
    if (current === 'complete' && this.state.timerRunning) {
      return `${current} 12s ease-in-out infinite`
    } else if (current === 'oneMin' && this.state.timerRunning) {
      return `${current} 60s linear infinite`
    } else if (current === 'oneMinInc' && this.state.timerRunning) {
      return `${current} 60s linear infinite`
    } else return ''
  }
  
  render() {
    return (
      <> 
      <VideoBackground />
      <div className="content-wrap" ref="inner">
        <SEO title="Home" />
        <TotalTimer timerRunning={this.state.timerRunning} time={{hours:this.state.hours, minutes:this.state.minutes, seconds:this.state.seconds}} tick={this.tick} />
        <InstructionsModal show={this.state.timerRunning} mode={this.state.currentMode} />
        <div className="button-wrap">
          <Button handleClick={this.toggleTimer} timerRunning={this.state.timerRunning} label={{active: 'Stop', notActive: 'Start'}} />
          <Button handleClick={this.resetTimer} show={this.state.timerRunning} timerRunning={this.state.timerRunning} label={{active: 'Reset timer', notActive: 'Reset timer'}}/>
        </div>
        <ModeSelector show={this.state.timerRunning} chooseMode={this.chooseMode} />
        <Display show={this.state.timerRunning ? 'visible' : 'hidden'} selector={this.selector()} />
      </div>
      <footer >
        © {new Date().getFullYear()}, Built with {" "} <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
      </>
    )
  }
}