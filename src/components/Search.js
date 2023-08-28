import React from "react"

function Search({query, onUpdateQuery}) {
    return(
        <div className="search-container">
            <input type="text" placeholder="Search names..." value={query} onChange={onUpdateQuery} />
        </div>
    );
}

export default Search;