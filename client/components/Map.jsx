import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function Map (props) {
    return (
        <MapContainer
          center={[-36.8666700, 174.7666700]}
          zoom={16}
          scrollWheelZoom={true}>
          <TileLayer
            url='https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWljaGFlbC1yIiwiYSI6ImNrZXM1Zm9iaDJiNmYycW1za2dobDZ4d3gifQ.a5mK2DxNqWhlzvoa8Zxb2Q'/>
          
          {props.pinCoordinates?.map(location => {
            return <Marker key={props.pinCoordinates.indexOf(location)}
            position={[location.lat, location.lng]}>
            <Popup>
            <iframe src="https://open.spotify.com/embed/track/6UkMcAA19lTdjs22jtB7o2" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>    
            </Popup>
          </Marker>
          })}
        </MapContainer>
    )
  }

export default Map