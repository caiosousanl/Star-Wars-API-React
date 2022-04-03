import React, { useState } from 'react';
import './styles.css';
export default function TableGame({ data, listPeople }) {

    const dataApi = data;

    const liStyle = {
            backgroundColor:"rgba(52, 255, 1, 0.281)",
            color: "white",
            textIndent: "0"
    }
    
    return (
        <div>
            <ul>
                
                {dataApi.map((item, index) => {
                    if(listPeople.includes(index)){
                        return <li className='list-none' key={index} style={liStyle} >{item.name}</li>
                    }
                    return <li>{item.name}</li>
                })}
            </ul>
        </div>
        

    )

}
