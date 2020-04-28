import React from "react"
import BackgroundVideo from "../assets/Distant_Lights_4K_Motion_Background_Loop.mp4"

export default () => {
  return (
    <video autoPlay loop className="video-background">
      <source src={BackgroundVideo} type="video/mp4" />
    </video>
  )
}