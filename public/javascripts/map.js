
const map = new google.maps.Map(
  document.getElementById('mainMap'), {
    zoom: 14,
    center: {
      lat: 40.4169473,
      lng: -3.7035285
    },
    disableDefaultUI: true,
    styles: style15_4
  }
);

const markers = [];
const loadData = (map) => {
  phenomena.forEach(p => {
    let markerPhenom = addMarker(
      p.name,
      p.description,
      {
        lat: p.location.coordinates[0],
        lng: p.location.coordinates[1]
      },
      map,
      p.type
    );
    markers.push(markerPhenom);
  })
};


loadData(map);
