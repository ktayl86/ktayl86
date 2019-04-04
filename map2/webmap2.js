let myMap = L.map('map2').setView([32.18, -99.14], 4)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(myMap)
let point = L.marker([30, -90]).addTo(myMap)
let area = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
]).addTo(myMap)
area.bindPopup('A polygon')
point.bindPopup('A marker')
