import React from 'react'
import './style2.scss';

export default function Internships() {
  return (
    <div className="interns">
    <div className="container">
        
        <h3>Work Experience</h3>
            <div className="first-internship">
                <button className="btn btn-dark btn-lg" disabled>
                    07/22
                </button>_________________________
                <button className="btn btn-dark btn-lg" id='second-btn-intern' disabled>
                    08/22
                </button>

                <h5>Mobile Application Intern at LetsGrowMore</h5>
                <p>Work Done: Have developed mobile applications</p>
                <a href="https://github.com/Aaditya8C/LGMVIP-Android">
                <button className='gitButton'>Github Link</button>
                </a>
                <p>Mode: Online/Remote</p>

            </div>

            <div className="second-internship">
            <button className="btn btn-dark btn-lg" disabled>
                    08/22
                </button>_________________________
                <button className="btn btn-dark btn-lg" id='second-btn-intern' disabled>
                    09/22
                </button>

                <h5>Web Developer Intern at LetsGrowMore</h5>
                <p>Work Done: Have developed functional websites.</p>
                <a href="https://github.com/Aaditya8C/LGMVIP-Android">
                <button className='gitButton'>Github Link</button>
                </a>
                <p>Mode: Online/Remote</p>
            </div>
        </div>
    </div>
  )
}
