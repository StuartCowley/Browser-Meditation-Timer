import React from "react"
import BackgroundVideo from "../assets/Particle_background1.mp4"

export default () => {
  return (
    <video autoPlay loop className="video-background">
      <source src={BackgroundVideo} type="video/mp4" />
    </video>
  )
}
