import React, { useState } from 'react';
import './styles.css';
import { Table } from "react-bootstrap";
export default function TableGame({ data, trStyle }) {

    const dataApi = data;
    const arr = [0,1,2,3,4,5,6,7,8]


    const listaTds = dataApi.map(
        (v, index) => {

            return <td style={trStyle} key={index}>v:{v.name} indeax:{index}</td>

        }

    )


    const listaTrs = arr.map(
        (v, i) => {
            return (
                <tr id={i}>{listaTds}</tr>
            )
        }
    
    ) 

    return (

        <Table bordered id="gameTable" style={{ marginLeft: "auto", marginRight: "auto" }}  >
            <tbody>
                {listaTrs}



                {/* <td valign="top">
                        <Table bordered hover>
                            <tbody>
                                <tr style={trStyle}><td>{dataApi[3].name}</td></tr>
                                <tr style={trStyle}><td>{dataApi[4].name}</td></tr>
                                <tr style={trStyle}><td>{dataApi[5].name}</td></tr>
                            </tbody>
                        </Table>
                    </td>
                    <td valign="top">
                        <Table bordered hover>
                            <tbody>
                                <tr style={trStyle}><td>{dataApi[7].name}</td></tr>
                                <tr style={trStyle}><td>{dataApi[8].name}</td></tr>
                                <tr style={trStyle}><td>{dataApi[9].name}</td></tr>
                            </tbody>
                        </Table> */}
                {/* </td> */}
                {/* </tr> */}
            </tbody>
        </Table>

    )

}
