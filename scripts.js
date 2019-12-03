$(document).ready(function () {

  $('.first-button').on('click', function () {

    $('.animated-icon').toggleClass('open');
  });
});

// displays the map at certain location at 12 zoom
mapboxgl.accessToken = 'pk.eyJ1IjoiZHJkaXl1IiwiYSI6ImNrMzh5ZnQyODBkaG8zZW92MjVmeXYyejEifQ.fA6c4Or3muRUluPhg-OxJA';
var map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
  center: [-2.970721, 56.462018], // starting position [lng, lat]
  zoom: 13 // starting zoom
});

//disables the ability to zoom in and out the map while scrolling
map.scrollZoom.disable();
//adds the zoom in and out controls
map.addControl(new mapboxgl.NavigationControl());

//adds the ability for the user to see their location
map.addControl(new mapboxgl.GeolocateControl({
positionOptions: {
enableHighAccuracy: true
},
trackUserLocation: true
}));

//allows the user to put the map into fullscreen mode
map.addControl(new mapboxgl.FullscreenControl());

//loads this on the map
map.on('load', function () {
map.addLayer({
  "id": "points",
  "type": "symbol",
  "source": {
    "type": "geojson",
    "data": {
      "type": "FeatureCollection",
      "features": [{
        // feature for Mapbox DC
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates":  [-2.992215, 56.455924]
        },
        "properties": {
        "title": "Little Green Larder",
        "icon": "convenience"
        }
      },
      {
      // feature for Mapbox SF
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-2.967291, 56.461085]
        },
      "properties": {
        "title": "Birchwood Food Emporium",
        "icon": "cafe"
      }
      },
      {
      // feature for Mapbox SF
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates":  [-2.968890, 56.462627]
        },
      "properties": {
        "title": "British Heart Foundation",
        "icon": "convenience"
      }
    },
    {
      // feature for Mapbox SF
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-2.971008,56.459653]
        },
      "properties": {
        "title": "Cex",
        "icon": "convenience"
      }
    },
    {
      // feature for Mapbox SF
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-2.984325,56.462316]
        },
      "properties": {
        "title": "SCRAPantics",
        "icon": "convenience"
      }
    },
    {
      // feature for Mapbox SF
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-2.970830,56.463168]
        },
      "properties": {
        "title": "BrewDog Dundee",
        "icon": "cafe"
      }
      },
      {
        // feature for Mapbox SF
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [-2.980284, 56.474693]
          },
        "properties": {
          "title": "Sense Scotland",
          "icon": "convenience"
        }
        },
        {
          // feature for Mapbox SF
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [-2.970903,56.464804]
            },
          "properties": {
            "title": "Transform Furniture Store",
            "icon": "convenience"
          }
          },
          {
            // feature for Mapbox SF
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [-2.985597, 56.462523]
              },
            "properties": {
              "title": "Tayside Re-User",
              "icon": "convenience"
            }
            }]
    }
  },
  "layout": {
    // get the icon name from the source's "icon" property
    // concatenate the name to get an icon from the style's sprite sheet
    "icon-image": ["concat", ["get", "icon"], "-15"],
    // get the title name from the source's "title" property
    "text-field": ["get", "title"],
    "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
    "text-offset": [0, 0.6],
    "text-anchor": "top"
  }
});
});


// This changes the quote and the person who wrote that quote every ten seconds
// The different qutoes and people names are stored in two different arrays
var text = ["I only feel angry when I see waste. When I see people throwing away things we could use.",
            "Unless someone like you cares a whole awful lot, Nothing is going to get better. It’s not.",
            "The Earth is what we all have in common.",
            "Small acts, when multiplied by millions of people, can transform the world."];

var text2 = ["— Mother Teresa",
            "— Dr. Seuss, The Lorax",
            "— Wendell Berry",
            "— Unknown"];

var counter = 0;
var elem = document.getElementById("changeText");
var elem2 = document.getElementById("changePerson");
var inst = setInterval(change, 10000);

function change() {
  elem.innerHTML = text[counter];
  elem2.innerHTML = text2[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
  }
}
