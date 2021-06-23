import React, { useState } from 'react'
import '../style/navigation.css'

const Navi = () => {

    const [click,setClick] = useState(true)

    return (
        <div>
            <div className="nav-bar">
                <div className="left-part">
                    <div className="logo">Shortly</div>
                    <div className="menu">
                        <span className="menu-items">Features</span>
                        <span className="menu-items">Pricing</span>
                        <span className="menu-items">Resources</span>
                    </div>
                </div>
                <div className="right-part">
                    <button className="login">Login</button>
                    <button className="sign-up">Sign Up</button>
                </div>
            </div>
            <button className="corner-button">{ click ? <i className="fa fa-bars"></i> : <i className="fa fa-times"></i>}</button>
        </div>
    )
}

export default Navi

