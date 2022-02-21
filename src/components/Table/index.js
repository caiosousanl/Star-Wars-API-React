import React from "react";
import './styles.css';
import { Table } from "react-bootstrap";
export default function TableGame({ data }) {

    const dataApi = data;

    const trStyle = {
        visibility: 'hidden'

    };

    if (!dataApi.lenght) {
        // console.log(dataApi)



        return (
            <table id="gameTable" style={{marginLeft: "auto", marginRight: "auto"}}  >
                <tbody>
                    <tr>
                        <td valign="top">
                            <Table bordered hover>
                                <tbody>
                                    <tr id="0" style={trStyle}><td>{dataApi[0].name}</td></tr>
                                    <tr id="1" style={trStyle}><td>{dataApi[1].name}</td></tr>
                                    <tr id="2" style={trStyle}><td>{dataApi[2].name}</td></tr>
                                </tbody>
                            </Table>
                        </td>
                        <td valign="top">
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
                            </Table>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}
