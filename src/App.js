import React from 'react';
import {useJsApiLoader} from '@react-google-maps/api'

import {Map} from './components/Map'

import './App.css';

const API_KEY = process.env.REACT_APP_API_KEY
console.log(API_KEY)
const defaultCenter = {
  lat: 48.35958, 
  lng: 33.52341,
};

const libraries = ['places']

const App = () => {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY,
    libraries,
  })


  return (
    <div className="App">
      {isLoaded ? <Map center={defaultCenter} /> : <h3>loading</h3>}
    </div>
  );
}

export default App;
