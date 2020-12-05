import L from 'leaflet'

export function getMap() {
  const myMap = L.map('mapid', {
    center: [36.8483, 174.7625],
     zoom: 13
   })
   
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', { 
   attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
   maxZoom: 18, 
   id: 'mapbox/streets-v11', 
   tileSize: 512,
   zoomOffset: -1,
   accessToken: 'pk.eyJ1IjoiY2F6MTk4NCIsImEiOiJja2lheGF6ZjEwNDlmMnFsYTQ3cXAwbXFpIn0.VtOkznqKXM_fbyFGhwdtDw' }).addTo(myMap);

}
