var geodataToMarkers = function(geodata) { /*Used geodataToMarkers() function to format the Wikipedia API's output so that we can use it in the map. */
  var places = geodata.query.geosearch;
  var markers = [];
  for(var i=0; i<places.length; i++) {
    place = {
      lat: places[i].lat,
      lng: places[i].lon,
      message: getMessage(places[i].title)
    };
    markers.push(place);
  }

  return markers;
};

var getMessage = function(title) {
  var url = "http://en.wikipedia.org/wiki/" + title;
  return "<a target='_blank' href='" + url + "'>" + title + "</a>";
};