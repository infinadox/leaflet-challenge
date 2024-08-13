const url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

d3.json(url).then(function(data) {
  // Call function to create map
  createMap(data.features);
});

function createMap(earthquakeData) {
  // Create map
  const map = L.map('map').setView([37.7749, -122.4194], 5);

  // Add tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

  // Add markers
  earthquakeData.forEach(feature => {
    const [long, lat, depth] = feature.geometry.coordinates;
    const magnitude = feature.properties.mag;

    // Create circle marker
    L.circle([lat, long], {
      color: getColor(depth),
      fillColor: getColor(depth),
      fillOpacity: 0.75,
      radius: magnitude * 10000
    }).bindPopup(`<h3>${feature.properties.place}</h3><hr><p>Magnitude: ${magnitude}</p><p>Depth: ${depth}</p>`).addTo(map);
  });

  // Add legend
  const legend = L.control({ position: "bottomright" });
  legend.onAdd = function () {
    const div = L.DomUtil.create("div", "info legend");
    // Add legend details
    return div;
  };
  legend.addTo(map);
}

function getColor(depth) {
  return depth > 90 ? "#FF0000" :
         depth > 70 ? "#FF4500" :
         depth > 50 ? "#FF8C00" :
         depth > 30 ? "#FFD700" :
         "#ADFF2F";
}
