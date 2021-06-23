import React from 'react'
import '../style/cards-style.css'

const CardsSection = () => {
    return (
        <div className="second-section">
            <p>
                <div className="top-head"><h1>Advance Statistics</h1> <br /></div>
                Tracks how your links are perfroming across the web with <br /> our advance statics dashboard.
            </p>
            <div className="Cards-area">
                <div className="card1">
                    <div className="top-image"><div></div></div> <br />
                    <h2>Brand Recognition</h2> <br />
                    Boost your brand recognition with each click.Generic click doesn't mean a thing. Branded links help instil confidence in your content.
                </div>
                <div className="card2">
                    <div className="top-image"><div></div></div>  <br />
                    <h2>Detailed Records</h2>           <br />
                    Gain Insights on how is clicking your links.Knowing when and where people engage with your contents helps inform better decisions.       
                </div>
                <div className="card3">
                    <div className="top-image"><div></div></div>
                    <h2>Fully Customizable</h2> <br />
                    Improve brand awarness and content discoverability through customizable links, supercharging audience engagement.
                </div>
            </div>
        </div>
    )
}

export default CardsSection
