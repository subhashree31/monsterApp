import React from 'react';
import './search-box.styles.css'
const SearchBox = (props) => (
    <input className="search-box" name="searchField" onChange={props.onSearchChange} type="search" placeholder="search monster" />       
)

export default SearchBox;