import React, { useCallback, useState } from 'react';
import {useJsApiLoader} from '@react-google-maps/api'

import { Autocomplete } from './components/Autocomplete';
import {Map} from './components/Map'

import s from './App.module.css';


const API_KEY = process.env.REACT_APP_API_KEY

const defaultCenter = {
  lat: 48.35958, 
  lng: 33.52341,
};

const libraries = ['places']

const App = () => {
  const [center, setCenter] = useState(defaultCenter)

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY,
    libraries,
  })

  const onPlaceSelect = useCallback((coordinates) => {
    setCenter(coordinates)
  }, [])

  return (
    <div>
      <div className={s.addressSearchContainer}>
        <Autocomplete isLoaded={isLoaded} onSelect={onPlaceSelect}/>
        <button className={s.modeToggle}>set markers</button>
      </div>
      {isLoaded ? <Map center={center} /> : <h3>loading</h3>}
    </div>
  );
}

export default App;
