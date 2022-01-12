import { TextField } from "@mui/material";
import React from "react";

function SearchField(props) {
  return (
    <form align='right' >
    <TextField
      type="search"
      
      onChange={(e) => props.onSearch(e.target.value)}
      value={props.value}
      id="outlined-search" label="Search..." 
    />
    </form>
  );
}

export default SearchField;