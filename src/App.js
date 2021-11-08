import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}
function Countries(){
  const [countries, setCountries] = useState([]);
  useEffect(()=>{
    fetch("https://restcountries.com/v2/all")
    .then(res => res.json())
    .then(data => setCountries(data));
  },[])
  return (
    <div> 
      <h2>Traveling to around the world</h2>
      <h3>Available Country:  {countries.length} </h3>
      {
        countries.map(country =><Country name={country.name} capital={country.capital}></Country>)
      }

    </div>
  )
}

function Country(props){
  return (
    <di>
      <h2>Name: {props.name}</h2>
      <p>Capital: {props.capital}</p>
    </di>
  )
}

export default App;
