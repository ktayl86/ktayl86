let stateMap = L.map('map3').setView([32.18, -99.14], 4)
let basemapUrl = 'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png'
L.tileLayer(basemapUrl).addTo(stateMap)
let stateDemographicsUrl = 'https://geog4046.github.io/portfolio/data/us_state_demographics_ESRI_2010A.geojson'
jQuery.getJSON(stateDemographicsUrl, function (data) {
  let statestyle = { color: 'green' }
  let geojsonOptions = { style: statestyle }
  L.geoJSON(data, geojsonOptions).addTo(stateMap)
})
