import React from 'react'

export default function Frame19() {
  return (
    <div>

<iframe owner="archetype" title="archetype" style={{ display: "none", visibility: "hidden", }} />
        
        <div style={{ backgroundColor: "rgb(255, 255, 255)", border: "1px solid rgb(204, 204, 204)", boxShadow: "rgba(0, 0, 0, 0.2) 2px 2px 3px",
            position: "absolute", transition: "visibility 0s linear 0.3s, opacity 0.3s linear 0s",
            opacity: 0, visibility: "hidden", zIndex: 2000000000, left: 0, top: "-10000px", }} >
        
        <div style={{ width: "100%", height: "100%", position: "fixed", top: 0, left: 0, zIndex: 2000000000, backgroundColor: "rgb(255, 255, 255) ",
              opacity: "0.05", }} />
          
          <div className="g-recaptcha-bubble-arrow" style={{ border: "11px solid transparent", width: 0, height: 0, position: "absolute",
              pointerEvents: "none",  marginTop: "-11px", zIndex: 2000000000, }} />
          
          <div className="g-recaptcha-bubble-arrow"
            style={{border:"10px solid transparent", width: 0, height: 0, position: "absolute", pointerEvents: "none", marginTop: "-10px",
              zIndex: 2000000000, }}/>
          
          <div style={{zIndex: 2000000000, position:"relative", }}>
            
            <iframe title="recaptcha challenge"
              src="https://www.google.com/recaptcha/api2/bframe?hl=en&v=bfvuz6tShG5aoZp4K4zPVf5t&k=6Lc46PQUAAAAAMEJkx-a4pfm2t5DMXhlV0Xaaix2&cb=tcf95eqfjjhh"
              frameBorder= '0' scrolling="no"
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
              style={{width: "100%", height: "100%", }}/>
          </div>
        </div>

    </div>
  )
}
