import React from "react";
import {useGlobalContext} from './context'


const SearchForm = ()=>{
    const {query,handleSearch} = useGlobalContext();
    return <form onSubmit={(e)=> e.preventDefault()}>
        <h2 className="title">Hacker news</h2>
        <input placeholder="Type your query" className ="input" onChange={(e)=> handleSearch(e.target.value)} type="text" value={query}></input>

    </form>
}

export default SearchForm