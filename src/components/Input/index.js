import React, { useState } from "react";

export default function Input({value, onChange}){
    
    function handleChange(event){
        onChange(event.target.value);
    }

    return(
        <input type="search" value={value} onChange={handleChange}/>
    )
}