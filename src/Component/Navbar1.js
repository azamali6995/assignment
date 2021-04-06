import React from 'react'

export default function Navbar1() {
  return (
    <div>
    
      <header className="main_header  ">
            <nav className="navbar navbar-expand-md">
              <div className="container">
                <a href="/" className="mpartial_logo navbar-brand"> 
                <img src='assets/image/logo.png' alt="logo" />
                </a>
                <button aria-label="Toggle navigation" type="button" className="mr-2 navbar-toggler" >
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse">
                  <ul className="ml-auto main_navbar navbar-nav">
                    <li className="nav-item">
                       <a aria-current="page" className="nav-link active" href="/#Ground-Truth-Data" >
                        Ground-Truth Data
                      </a>
                    </li>
                    <li className="nav-item">
                      <a aria-current="page" className="nav-link active" href="/#How-It-Works" >
                        How it Works   
                      </a>
                    </li>
                    <li className="nav-item">
                    <a aria-current="page" className="nav-link active" href="/#Fee-Structure" >
                        Fee Structure
                      </a>
                    </li>
                    <li className="nav-item">
                      <a aria-current="page" className="nav-link active" href="/#Example-Deliverables" >
                        Example Deliverables
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/order" >
                        Submission portal
                      </a>
                    </li>
                    <li className="nav-item">
                      <a aria-current="page" className="nav-link active" href="/#Contact-US" >
                        Contact Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/login">
                        <button className="btn btn-primary login_btn">
                          Sign In
                        </button>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>
      
    </div>
  )
}
