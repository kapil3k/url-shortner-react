import React, { useState } from 'react'
import '../style/search.css'

const SearchArea = () => {
    const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  const onInputChange = (ev) => {
    setInput(ev.target.value);
  };

  const onSearch = () => {
    fetch(`https://api.shrtco.de/v2/shorten?url=${input}`)
      .then((r) => {
        return r.json();
      })
      .then((result) => {
        console.log(result.result.full_short_link);
        setResults([...results, result.result.full_short_link]);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const onKeyDown = (ev) => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };

  const renderResult = () => {
    if (results && results.ok === false) {
      return <div>No link to convert.</div>;
    }

    if (results && results.length > 0) {
      return (
        <div>
          {results.map((item) => (
            <div className="search-result">{item}</div>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          onKeyDown={onKeyDown}
          onChange={onInputChange}
          value={input}
          className="searching"
          placeholder="Shorten a link here..."
        ></input>
        <button className="short-butt" onClick={onSearch}>
          Shorten It!
        </button>
      </div>
      <div>{renderResult()}</div>
    </div>
  );
}

export default SearchArea
