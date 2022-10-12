import React, { useState, useEffect } from 'react';
import {Container, Dimmer, Loader} from 'semantic-ui-react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css';
import Navbar from './components/Navbar';
import People from './components/People';
import Home from './components/Home';

function App() {
  const [people, setPeople] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPeople = async() => {
      let res = await fetch('https://swapi.dev/api/people/');
      let data = await res.json();
      setPeople(data.results)
      setLoading(false)
    }
    fetchPeople();
    

  }, [])

  console.log('People ', people);
  //2console.log('Details ', details);
  
  return (
      <Router>
      <Navbar/>
      <Container>
      {loading ? (
        <Dimmer active inverted>
        <Loader inverted>Loading</Loader>
        </Dimmer>
      ): (
        <Routes>
      <Route path='/' element= {<Home/>}> </Route>
      <Route path='/people' element={<People data={people}/>}> </Route>
      </Routes>
      )}
      </Container>
      
      </Router>
  );
}

export default App;
