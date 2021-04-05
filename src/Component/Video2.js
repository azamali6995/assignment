import React from 'react'

export default function Video() {
  return (
    
    <div>
      <div>
            <div className="home_video_background">
              <div className="lazyload-wrapper">
                <div className="BackgroundVideo background_video css-1y0iy9d-Slider" tabIndex="0"
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", visibility: "visible", overflow: "hidden", }}>
                  <video src="https://mpartial-data.s3.us-east-2.amazonaws.com/homepage.mp4" autoPlay loop muted={true}
                    style={{ position: "absolute", width: "560", height: "315", top: "0px", left: "-156.611px" }}>
                  </video>
                </div>
              </div>
              <div className="main_banner_text">
                "Impartial, Remote, 3rd-Party,"
                <br />
                "Estimating Engine"
              </div>
              <div className="slider_down_btn" />
            </div>
          </div>
    </div>
  )
}
