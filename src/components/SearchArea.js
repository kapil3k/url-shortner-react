import React from 'react'
import '../style/search.css'

const SearchArea = () => {
    return (
        <div className="search-bar">
            <input type="text" className="searching" placeholder="Shorten a link here..."></input>
            <button className="short-butt">Shorten It!</button>
        </div>
    )
}

export default SearchArea
