import React from "react";


const SearchBox=({onSearchChange})=>{



    return(
        <div className="pa2 ">
          <input onChange={onSearchChange} type="search" placeholder="Enter your robot" className="pa3 ba b--green bg-lightest-blue" />
        </div>
    )
}

export default SearchBox;