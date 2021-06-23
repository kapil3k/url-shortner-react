import React from 'react'
import '../style/lastpage.css'


const LastPage = () => {
    return (
        <div className="end-section">
            <div className="boost-link">
                <h3>Boost your links today</h3> <br />
                <button className="start-butt">Get Started</button>
            </div>
            <div className="last-section">
                <div className="bottom-logo">Shortly</div>
                <div className="colmn-1">
                    <span className="top-line">Features</span> <br /> <br />
                    <span>Branded Links</span> <br />
                    <span>Analytics</span> <br />
                </div>
                <div className="colmn-2">
                    <span className="top-line">Resources</span> <br /> <br />
                    <span>Blog</span> <br />
                    <span>Developers</span> <br />
                    <span>Support</span> <br />
                </div>
                <div className="colmn-3">
                    <span className="top-line">Company</span> <br /> <br /> 
                    <span>About</span> <br />
                    <span>Our Team</span> <br />
                    <span>Carrers</span> <br />
                    <span>Contact</span> <br />
                </div>
                <div className="colmn-4">
                    <i className="fa fa-facebook icons"></i>
                    <i className="fa fa-twitter"></i>
                    <i className="fa fa-pinterest"></i>
                    <i className="fa fa-instagram"></i>
                </div>
            </div>
        </div>
    )
}

export default LastPage
