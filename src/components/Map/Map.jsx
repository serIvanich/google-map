import React from 'react'
import {GoogleMap} from '@react-google-maps/api'
import s from './Map.module.css'

const containerStyle = {
  width: '100%',
  height: '100%'
};

const Map = ({center}) => {

  const mapRef = React.useRef(undefined)

  const onLoad = React.useCallback(function callback(map) {

    mapRef.current = map
    // const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);
    // setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    mapRef.current = map
  }, [])

  return (
    <div className={s.container}>

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </div>
  )
}

export {Map}