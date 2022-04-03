import './App.css';
import React, { useEffect, useState } from 'react';
import Input from './components/Input';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableGame from './components/Table';
import { Container, Row, Col } from 'react-bootstrap';


function App() {
  const [textInput, setTextInput] = useState("")
  const [dataApi, setDataApi] = useState([]);
  const [liStyle, setLiStyle] = useState({ display: 'none' })
  const [listPeople, setListPeople] = useState([])


  const apiGet = async () => {
    const response1 = await fetch('https://swapi.dev/api/people?page=1', { headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } })
    const response2 = await fetch('https://swapi.dev/api/people?page=2', { headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } })
    const response3 = await fetch('https://swapi.dev/api/people?page=3', { headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } })

    const response1json = await response1.json();
    const response2json = await response2.json();
    const response3json = await response3.json();

    const result1 = response1json.results;
    const result2 = response2json.results;
    const result3 = response3json.results;
    const result = result1.concat(result2, result3);

    setDataApi(result);
  }

  function showLiPerson(person) {

  }

  useEffect(() => {
    apiGet();

  }, [])

  useEffect(() => {

    if (typeof textInput !== null) {

      dataApi.map((pessoa, index) => {
        if (pessoa.name.toUpperCase() == textInput.toUpperCase()) {
          setListPeople([...listPeople, index])
          setTextInput('')
        }

      })

    }
  }, [textInput])

  return (
    <div className="App justify-content-md-center container-fluid m-16 " >
      <Container className="bg-dark">
        <Row className="text-center">
          <h1 className='titlesw' style={{ color: '#FFE81F' }}>Star Wars Guesser</h1>
        </Row>
        <Row className="text-center justify-content-md-center">
          <Col >
            <Input style={{ width: 1000 }} value={textInput} onChange={setTextInput} ></Input>
            <TableGame listPeople={listPeople} data={dataApi}>

            </TableGame>
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default App;

