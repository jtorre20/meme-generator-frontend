import React from 'react'

const Search = (props) => {
    return <div>
        Search
        <input type="text" onChange={e => props.updateTermSearch(e.target.value)} />
      </div>;
    
}

export default Search 