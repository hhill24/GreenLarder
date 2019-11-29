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

//create a new map showing only donation sites
var donationMap = new mapboxgl.Map({
  container: 'donationMap', // container id
  style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
  center: [-2.970721, 56.462018], // starting position [lng, lat]
  zoom: 13 // starting zoom
});

//disables the ability to zoom in and out the map while scrolling
donationMap.scrollZoom.disable();
//adds the zoom in and out controls
donationMap.addControl(new mapboxgl.NavigationControl());

//adds the ability for the user to see their location
donationMap.addControl(new mapboxgl.GeolocateControl({
positionOptions: {
enableHighAccuracy: true
},
trackUserLocation: true
}));

//allows the user to put the map into fullscreen mode
donationMap.addControl(new mapboxgl.FullscreenControl());
donationMap.on('load', function () {
donationMap.addLayer({
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
          "coordinates":  [-2.985125, 56.462691]
        },
        "properties": {
        "title": "Tayside Reusers",
        "icon": "marker"
        }
      },
      {
      // feature for Mapbox SF
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-2.99225, 56.455878]
        },
      "properties": {
        "title": "Shelter",
        "icon": "marker"
      }
      },
      {
      // feature for Mapbox SF
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates":  [-2.97124,56.461677]
        },
      "properties": {
        "title": "Oxfam Books & Music",
        "icon": "marker"
      }
    },
                   {
      // feature for Mapbox SF
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates":  [-2.970844,56.4608]
        },
      "properties": {
        "title": "Chest Heart & Stroke Scotland",
        "icon": "marker"
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
        "icon": "marker"
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


let deferredPrompt;
    window.addEventListener('beforeinstallprompt', event => {

      // Prevent Chrome 67 and earlier from automatically showing the prompt
      event.preventDefault();

      // Stash the event so it can be triggered later.
      deferredPrompt = event;

      // Attach the install prompt to a user gesture
      document.querySelector('#installBtn').addEventListener('click', event => {

        // Show the prompt
        deferredPrompt.prompt();

        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice
          .then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
              console.log('User accepted the A2HS prompt');
            } else {
              console.log('User dismissed the A2HS prompt');
            }
            deferredPrompt = null;
          });
      });

      // Update UI notify the user they can add to home screen
      document.querySelector('#installBanner').style.display = 'flex';
    });
