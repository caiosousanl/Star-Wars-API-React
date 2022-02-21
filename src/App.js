import './App.css';
import React, { useEffect, useState } from 'react';
import Input from './components/Input';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableGame from './components/Table';
import { Container, Row, Col } from 'react-bootstrap';


function App() {
  const [textInput, setTextInput] = useState("")
  const [dataApi, setDataApi] = useState([]);

  const apiGet = async () => {
    const response = await fetch('https://swapi.py4e.com/api/people/?format=json', { headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } })
    const jsonData = await response.json();
    if (dataApi.lenght !== 0) {
      console.log(jsonData.results);
      setDataApi(jsonData.results);
    }
  }

  useEffect(() => {
    apiGet();
    console.log(dataApi)
  }, [])

  useEffect(() => {
    
    if (typeof textInput !== null) {
      console.log("textinputmudou: " + textInput)

      dataApi.map((pessoa)=>{
        if(pessoa.name.toUpperCase() == textInput.toUpperCase()){
          console.log("achou")
          //mostra_td_pessoa(x)


        }

        // if( pessoa.name.includes(String(textInput))){
        //   let pos = pessoa.name.includes(String(textInput))
        //   console.log("Achou!: "+pos);
        // }
      })
      
    }
  }, [textInput])

  return (

    <div className="App " style={{ backgroundColor: '#999999', width:"100%", height: "100%", flex:1, paddingTop:100, height:"auto" }}>
      <Container  className="justify-content-md-center"  bg="red" >
        <Row className="text-center">
          <h1 style={{ color: '#FFE81F' }}>Star Wars Guesser</h1>
        </Row>

        <Row className="text-center justify-content-md-center">
          <Col >
          
            <Input style={{width:1000}} value={textInput} onChange={setTextInput} ></Input>
            <TableGame data={dataApi}>

            </TableGame>

          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default App;

