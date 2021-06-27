import React, {useState} from 'react'
import '../style/search.css'

const SearchArea = () => {
    const [input,setInput] = useState("")
    // const [results,setResults] = useState(null)
    
const onInputChange = (ev) => {
    setInput(ev.target.value)
}

const onSearch = () => {

    // fetch(`https://api.shrtco.de/v2/shorten?url=${input}`)
    // .then(r=>r.json())
    // .then(result=>{ 
    //     setResults(result) ;
    //     console.log(result.result.full_short_link)})

}


const onKeyDown= (ev) =>{
    if(ev.keyCode === 13){
        onSearch();
    }

}
 

// const renderResult = () => {
    
//     if(results && results.ok === 0){
//         return <div>No link to convert.</div>
//     }


//     if(results && results.length > 0){
//         return <div>{results.map((item)=><div>{item.results.result.full_short_link}</div>)}</div>
//     }


//     return null
// }



    return (
        <div>
            <div className="search-bar">
                <input type="text" onKeyDown={onKeyDown}  onChange={onInputChange} value={input} className="searching" placeholder="Shorten a link here..."></input>
                <button className="short-butt" onClick={onSearch}>Shorten It!</button>
                {/* <div>{renderResult()}</div> */}
            </div>
            
        </div>
    )
}

export default SearchArea
