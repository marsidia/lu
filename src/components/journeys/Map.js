import { useState } from "react";
import { useRef, useEffect } from "react";

function Map({geos, currentSection}) {
    const ref = useRef();
    const [mmap, setMmap] = useState()
    useEffect(() => {
        const map = new window.google.maps.Map(ref.current, {
            center: { lat: 48.81028 , lng:  2.362272},
            zoom: 12,
            styles: [
                { elementType: "geometry", stylers: [{ color: "#ece9e9" }] },
                { elementType: "labels.text.stroke", stylers: [{ color: "#e2e2e2" }] },
                { elementType: "labels.text.fill", stylers: [{ color: "#757474" }] },
                {
                  featureType: "administrative.locality", //town names
                  elementType: "labels.text.fill",
                  stylers: [{ color: "#3d4e64" }],
                },
                {
                  featureType: "poi", //stores
                  elementType: "labels.text.fill",
                  stylers: [{ color: "#535251" }],
                },
                {
                  featureType: "poi.park",
                  elementType: "geometry",
                  stylers: [{ color: "#bcd6c2" }],
                },
                {
                  featureType: "poi.park",
                  elementType: "labels.text.fill",
                  stylers: [{ color: "#6b9a76" }],
                },
                {
                  featureType: "road",
                  elementType: "geometry",
                  stylers: [{ color: "#cec0ae" }],
                },
                {
                  featureType: "road",
                  elementType: "geometry.stroke",
                  stylers: [{ color: "#bba696" }],
                },
                {
                  featureType: "road",
                  elementType: "labels.text.fill",
                  stylers: [{ color: "#817769" }],
                },
                {
                  featureType: "road.highway",
                  elementType: "geometry",
                  stylers: [{ color: "#eec077" }],
                },
                {
                  featureType: "road.highway",
                  elementType: "geometry.stroke",
                  stylers: [{ color: "#d1b17d" }],
                },
                {
                  featureType: "road.highway",
                  elementType: "labels.text.fill",
                  stylers: [{ color: "#9c8257" }],
                },
                {
                  featureType: "transit",
                  elementType: "geometry",
                  stylers: [{ color: "#b9b9b9" }],
                },
                {
                  featureType: "transit.station",
                  elementType: "labels.text.fill",
                  stylers: [{ color: "#d59563" }],
                },
                {
                  featureType: "water",
                  elementType: "geometry",
                  stylers: [{ color: "#7799c5" }],
                },
                {
                  featureType: "water",
                  elementType: "labels.text.fill",
                  stylers: [{ color: "#515c6d" }],
                },
                {
                  featureType: "water",
                  elementType: "labels.text.stroke",
                  stylers: [{ color: "#17263c" }],
                },
            ],
            
          })
          function processPoints(geometry, callback, thisArg) {
            if (geometry instanceof window.google.maps.LatLng) {
              callback.call(thisArg, geometry);
            } else if (geometry instanceof window.google.maps.Data.Point) {
              callback.call(thisArg, geometry.get());
            } else {
              geometry.getArray().forEach(function(g) {
                processPoints(g, callback, thisArg);
              });
            }
        }
        
          // zoom to show all the features
        var bounds = new window.google.maps.LatLngBounds();
        map.data.addListener('addfeature', function(e) {
            processPoints(e.feature.getGeometry(), bounds.extend, bounds);
            map.fitBounds(bounds);
        });
    
      // zoom to the clicked feature
      map.data.addListener('click', function(e) {
        var bounds = new window.google.maps.LatLngBounds();
        processPoints(e.feature.getGeometry(), bounds.extend, bounds);
        map.fitBounds(bounds);
      });

      setMmap(map)
    }, [])
  
    useEffect(() => {
     
      

    
    //   map.data.add(new window.google.maps.Data.Feature(geo) );
    try{
        mmap.data.forEach(function(feature) {
            // If you want, check here for some constraints.
            mmap.data.remove(feature);
        });
    mmap.data.addGeoJson(geos)
    mmap.data.setStyle(function(feature) {
        const color = feature.getProperty('color');
        
        return {
          strokeColor: color,
          strokeWeight: 7
        };
    });
    }catch(error){
        console.log(error)
    }
    

    }, [geos]);

    useEffect(() => {
      function processPoints(geometry, callback, thisArg) {
        if (geometry instanceof window.google.maps.LatLng) {
          callback.call(thisArg, geometry);
        } else if (geometry instanceof window.google.maps.Data.Point) {
          callback.call(thisArg, geometry.get());
        } else {
          geometry.getArray().forEach(function(g) {
            processPoints(g, callback, thisArg);
          });
        }
      }
      try{
      mmap.data.forEach(function(feature) {
        console.log(feature.getProperty('id'));
        console.log(currentSection);
        if(feature.getProperty('id') === currentSection){
          var bounds = new window.google.maps.LatLngBounds();
          processPoints(feature.getGeometry(), bounds.extend, bounds);
          mmap.fitBounds(bounds);
        }
      })
      }catch(err) {
        console.log(err);
      }
    }, [currentSection])
  
    return <div  className="routes__map" ref={ref} id="map" />;
  }

  export default Map