import React from "react";

const SearchBox = ( {SearchChange}) =>{
    return (
        <>

        <div className="p-3" >
            <input className="p-3 b-blue-200 border-4 border-green-500 w-64 " type="text" placeholder="search robots"  onChange={SearchChange}/> 
        </div>
        </>
    )
}

export default SearchBox