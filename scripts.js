$(document).ready(function () {

  $('.first-button').on('click', function () {

    $('.animated-icon').toggleClass('open');
  });
});

mapboxgl.accessToken = 'pk.eyJ1IjoiZHJkaXl1IiwiYSI6ImNrMzh5ZnQyODBkaG8zZW92MjVmeXYyejEifQ.fA6c4Or3muRUluPhg-OxJA';
var map = new mapboxgl.Map({
container: 'map', // container id
style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
center: [-2.970721, 56.462018], // starting position [lng, lat]
zoom: 12 // starting zoom
});
