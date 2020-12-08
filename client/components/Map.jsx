import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const newIcon = new L.Icon({
  iconUrl: 'http://localhost:3000/images/marker.png',
  iconRetinaUrl: 'http://localhost:3000/images/marker.png',
  iconSize: [30, 30]
})

function Map (props) {
    return (
        <MapContainer
          center={[-36.8666700, 174.7666700]}
          zoom={12}
          scrollWheelZoom={true}>
          <TileLayer
            url='https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWljaGFlbC1yIiwiYSI6ImNrZXM1Zm9iaDJiNmYycW1za2dobDZ4d3gifQ.a5mK2DxNqWhlzvoa8Zxb2Q'/>
          
          {props.pinsCoordinates?.map((location) => {
            console.log(location.spotify_link)
            return <Marker icon={newIcon} key={props.pinsCoordinates.indexOf(location)}
            position={[location.lat, location.lng]}>
            <Popup key={props.pinsCoordinates.indexOf(location)}>
            <iframe src={location.spotify_link} width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media">
            </iframe>
            </Popup>
          </Marker>
          })}
        </MapContainer>
    )
}


export default Map
