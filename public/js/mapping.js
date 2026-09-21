
const map = new mapboxgl.Map({


    accessToken: maptoken,
    container: 'map', // container ID
    center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 9 // starting zoom
});

const marker = new mapboxgl.Marker({ color: "red" })
    .setLngLat(listing.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({ offset: 25,anchor:"bottom"})
        .setHTML(`<h4>${listing.title}</h4> 
            <p> Exact loction will be provided after booking!</p>`)
        .addTo(map))
    .addTo(map);
