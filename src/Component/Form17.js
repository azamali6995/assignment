import React from 'react'

export default function Form17() {
  return (
    <div>
      <div className="form-holder">
                  <form>
                    <div className="row">
                      <div className="col-md-6 col-sm-12 ">
                        <div className="form-group nogroup">
                          <input
                            type="text" name="name" required />
                          <div className="floating_label isFixed_false">
                            Your Name
                          </div>
                        </div>
                        <div className="form-group nogroup">
                          <input type="email" name="email" required />
                          <div className="floating_label isFixed_false">
                            Email
                          </div>
                        </div>
                        <div className="form-group nogroup">
                          <input type="text" min= '1' required step="any" />
                          <div className="floating_label isFixed_false">
                            Cell
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <div className="form-group nogroup">
                          <textarea placeholder required defaultValue= "" />
                          <div className="floating_label isFixed_false">
                            Write your message... 
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="lazyload-wrapper" style={{}}>
                      <div className="captcha_box">
                        <div>
                          <div
                            style={{ width: 304, height: 78,}}>
                            <div>
                              <iframe src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6Lc46PQUAAAAAMEJkx-a4pfm2t5DMXhlV0Xaaix2&co=aHR0cHM6Ly9tcGFydGlhbC5pbzo0NDM.&hl=en&type=image&v=bfvuz6tShG5aoZp4K4zPVf5t&theme=light&size=normal&badge=bottomright&cb=35v9l9v4up8b"
                                width= '304' height= '78' role="presentation" frameBorder='0' scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox" />
                            </div>
                            <textarea id="g-recaptcha-response" name="g-recaptcha-response" className="g-recaptcha-response"
                              style={{ width: 250, height: 40, border: "1px solid rgb(193, 193, 193)", margin: "10px 25px",  padding: 0, resize: "none", display: "none", }} defaultValue="" />
                          </div>
                          <iframe
                            style={{ display: "none",}} />
                        </div>
                      </div>{" "}
                    </div>
                    <p />
                    <button type="submit" className="btn btn-green" value="Submit" id="formButton" disabled >
                      <span>
                        Submit
                      </span>
                      <div className="loader show_false" />
                    </button>
                  </form>
                </div>
    </div>
  )
}
