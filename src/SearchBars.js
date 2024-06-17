import React from "react";
import './SearchBar.css';


function SearchBar(){
    return (
    <form>
        <div className="searchBar">
            <input placeholder="Search Restaurant" type="text"></input>
            <input placeholder="Where?" type="text"></input>
        </div>
        <input className="button" type="submit" value="Submit"></input>

    </form>
    );
};

export default SearchBar;