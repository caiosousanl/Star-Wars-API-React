import React, { useState } from "react";

export default function Input({value, onChange}){
    
    function handleChange(event){
        onChange(event.target.value);
    }

    return(
        <input className="focus:border-indigo-500   pl-7 pr-12 sm:text-sm  rounded-md rounded-full outline-none"  value={value} onChange={handleChange}/>
    )
}