// I got this tileLayer is from © MapTiler © https://cloud.maptiler.com/maps/
var map = L.map('map',{
  MaxBounds:[[31.414624, 4.700147],[-34.279556, 95.543893]],
  minZoom:4
}).setView([12.256594, 34.171884], 4);
var Esri_WorldStreetMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
   attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
       }).addTo(map);
       //water color
       var Watercolor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      subdomains: 'abcd',
      minZoom: 1,
      maxZoom: 18,
      ext: 'jpg'

     });


     //darkmap
     var Dark = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 18
     });


     //google hybrid

     var googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
         maxZoom: 18,
         subdomains:['mt0','mt1','mt2','mt3']
     });
     //googleHybrid

     //google sat
     var GoogleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
         maxZoom: 18,
         subdomains:['mt0','mt1','mt2','mt3']
     });
     //googleSat

     // marker
     // var myIcon = L.icon({
     //   iconUrl: '299087_marker_map_icon.png',
     //   iconSize: [38, 95],
     //   iconAnchor: [40, 40],

     // });
     //var singleMarker = L.marker([8.9806, 38.7578],{icon : myIcon});
    // var popup = singleMarker.bindPopup('This where I am ' + singleMarker.getLatLng()).openPopup()
    // popup.addTo(map);





     //layercontroller
     var baseMaps = {
         "satellite map": GoogleSat,
         "Water color": Watercolor,
         "Dark": Dark,


     };

    // var overlayMaps = {
    //     "marker": singleMarker
    // };
     L.control.layers(baseMaps, null, {collapsed : false}).addTo(map);


   var Legend =  new L.Control.Legend({
position: 'bottomright',
});

map.addControl(Legend);
$(".legend-container").append( $("#legend") );



L.geoJSON(lineJson).addTo(map);
L.geoJSON(PolygonJson, {
onEachFeature:function(feature, layer){
layer.bindPopup(feature.properties.name)
}
}).addTo(map);


//////////////////////////////


var wormapmap = L.map('wormapmap',{
  MaxBounds:[[37.605870, -34.885786],[-34.279556, 95.543893]],
  minZoom:2,
}).setView([12.256594, 34.171884], 3);
var Esri_WorldStreetMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
   attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
       });
       //water color
       var Watercolor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      subdomains: 'abcd',
      maxZoom: 14,
      ext: 'jpg'
     });

     //Watercolor
     //darkmap
     var Dark = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 18
    }).addTo(wormapmap);


     //google hybrid

     var GoogleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
         maxZoom: 18,
         subdomains:['mt0','mt1','mt2','mt3']
     });
     //googleHybrid

     //google sat
     var GoogleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
         maxZoom: 18,
         subdomains:['mt0','mt1','mt2','mt3']
     });
     //googleSat

     // marker
     // var myIcon = L.icon({
     //   iconUrl: '299087_marker_map_icon.png',
     //   iconSize: [38, 95],
     //   iconAnchor: [40, 40],
     //
     // });
     //var singleMarker = L.marker([8.9806, 38.7578],{icon : myIcon});
    // var popup = singleMarker.bindPopup('This where I am ' + singleMarker.getLatLng()).openPopup()
    // popup.addTo(map);





     //layercontroller
     var baseMaps = {
         "satellite map": GoogleSat,
         "Water color": Watercolor,
         "Dark": Dark,


     };

    // var overlayMaps = {
    //     "marker": singleMarker
    // };
     L.control.layers(baseMaps, null, {collapsed : false}).addTo(wormapmap);






      L.geoJSON(lineJson).addTo(wormapmap);
      L.geoJSON(WormapmapJson, {
      onEachFeature:function(feature, layer){
      layer.bindPopup(feature.properties.name)
      }
      }).addTo(wormapmap);



////////



  let data = [
	{
		'title': '<span>&#8470;</span>1 Grand Renaissance Dam in Ethiopia',
		'lat': 11.21638,
		'lon': 35.093026,
		'description': 'The Grand Renaissance Dam in Ethiopia is currently the biggest dam in Africa and It will be the largest hydropower project in Africa.',
		'image': "image/GERD-PMO-.png"
	},
	{
		'title': '<span>&#8470;</span>2 The Aswan High Dam, Egypt',
		'lat': 23.9709,
		'lon': 32.8773,
		'description': "With a reservoir capacity of 132km³, the Aswan High Dam provides water for around 33,600km² of irrigation land. It serves the irrigation needs of Egypt, controls flooding, generates power, and helps in improving navigation across the Nile.",
		'image': 'image/aswan-high.png'
	},
	{
		'title': '<span>&#8470;</span>3 The Sennar Dam Sudan',
		'lat': 13.547844,
		'lon': 33.636788,
		'description': "The Sennar Dam is an irrigation dam on the Blue Nile near the town of Sennar in the Al Jazirah region of Sudan. The dam is 3,025 metres (9,925 ft) long and has a maximum height of 40 metres (130 ft). ",
		'image' : 'image/sanner-dam.jpeg'
	},
	{
		'title': '<span>&#8470;</span>4 Merowe High Dam',
		'lat': 18.668889,
		'lon': 32.050278,
		'description':'is a large dam near Merowe Town in northern Sudan, about 350 kilometres (220 mi) north of the capital Khartoum. Its dimensions make it the largest contemporary hydropower project in Africa.',
		'image': 'image/MeroweDam01.jpeg'
	},
	{
		'title': '<span>&#8470;</span>5 Aswan Low Dam',
		'lat': 24.033889,
		'lon': 32.865833,
		'description': 'The Aswan Low Dam or Old Aswan Dam is a gravity masonry buttress dam on the Nile River in Aswan, Egypt. The dam was built at the former first cataract of the Nile, and is located about 1000 km up-river and 690 km (direct distance) south-southeast of Cairo.',
		'image' : 'https://www.researchgate.net/profile/Nadhir-Al-Ansari-2/publication/344426649/figure/fig5/AS:941353722736648@1601447625139/Downstream-view-of-the-old-low-Aswan-Dam-13.png'
	},

]
var mymap = L.map('mymap').setView([5.258548, 15.350107], 17);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoib2xpeWFkIiwiYSI6ImNrdjdsa24wYzI5dW8ycG1zdGY3Nmdlc2kifQ.8CO7mcebHy1ivmhe25EQDg'}).addTo(mymap);

// create a feature group
let myMarkers = L.featureGroup();

// loop through data
data.forEach(function(item, index){
	let marker = L.marker([item.lat,item.lon])
	.bindPopup("<center><h3>" + item.title + "</h3></center>" +
		"<h4>" + "<center> <img src= ' " + item.image + "'width = 100%'/></center>" +
		 "<p>" + item.description + "</p>")

	myMarkers.addLayer(marker)

	$('.sidebar').append(`<div class = "sidebar-item" onclick = "flyToIndex(${index})">${item.title} </div>`)
});

myMarkers.addTo(mymap)

//define layers =
let layers = {
	"My Markers": myMarkers
}

// add layer control box
L.control.layers(null, layers).addTo(mymap) // nulls reserved for base maps

// auto zoom to all markers for user to see all at once.
mymap.fitBounds(myMarkers.getBounds())

function flyToIndex(index){
	mymap.flyTo([data[index].lat, data[index].lon], 10)
	myMarkers.getLayers()[index].openPopup() // for having popup open up automatically when flying
}


//////////////////////////////////////

      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Blue Nile',     85],
          ['Wite Nile',      15],

        ]);

        var options = {
          title: 'Nile is composed of two tributaries'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }


      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawVisualization);

      function drawVisualization() {
        // Some raw data (not necessarily accurate)
        var data = google.visualization.arrayToDataTable([
          ['year', 'Ethiopia', 'Sudan', 'Egypt', ],
          ['2010',  33.36,      38.36,         99.44,],
          ['2011',  23,      39.86,        99.48,],
          ['2012',  35.20,      41.60,        99.7,],
          ['2013',  36.16,      43.32,        99.82,],
          ['2014',  27.2,      44.9,         99.8,],
          ['2015',  29,      46.925,         99.3,],
          ['2016',  42.9,      48.83,        100,],
          ['2018',  44.3,      50.65,        100,],
          ['2019',  45.053,      52.29,        100,],
          ['2020',  48.27,      53.82,         100,],
        ]);

        var options = {
          title : 'Access to electric (%population)-Egypt, Sudan, and Ethiopia ',
          vAxis: {title: '%population'},
          hAxis: {title: 'year'},
          seriesType: 'bars',
          series: {5: {type: 'line'}}
        };

        var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
//////////////
google.charts.load('current', {'packages':['corechart', 'bar']});
google.charts.setOnLoadCallback(drawStuff);

function drawStuff() {

  var button = document.getElementById('change-chart');
  var chartDiv = document.getElementById('chartw_div');

  var data = google.visualization.arrayToDataTable([
    ['Five dam along Nile dame ', 'reservoir capacity in kilometer cube', 'Power Generation Capacity in GW '],
    ['GERD', 74, 6.5],
    ['Aswan high dam', 132, 2.1],
    ['Sennar dam', 5.3, .59],
    ['Marowe dam', 12.5, .17],
    ['Aswan low dam', 3.7, .15]
  ]);

  var materialOptions = {
    width: 720,
    chart: {
      title: '',
      subtitle: 'storage capacity in kilometer cube and Power Generation Capacity in GW'
    },
    series: {
      0: { axis: 'distance' }, // Bind series 0 to an axis named 'distance'.
      1: { axis: 'brightness' } // Bind series 1 to an axis named 'brightness'.
    },
    axes: {
      y: {
        distance: {label: 'kilometer cube'}, // Left y-axis.
        brightness: {side: 'right', label: 'Gigawatt'} // Right y-axis.
      }
    }
  };

  var classicOptions = {
    width: 750,
    series: {
      0: {targetAxisIndex: 0},
      1: {targetAxisIndex: 1}
    },
    title: 'storage capacity on the left, power generation on the right',
    vAxes: {
      // Adds titles to each axis.
      0: {title: 'parsecs'},
      1: {title: 'apparent magnitude'}
    }
  };

  function drawMaterialChart() {
    var materialChart = new google.charts.Bar(chartDiv);
    materialChart.draw(data, google.charts.Bar.convertOptions(materialOptions));
    button.innerText = 'Change to Classic';
    button.onclick = drawClassicChart;
  }

  function drawClassicChart() {
    var classicChart = new google.visualization.ColumnChart(chartDiv);
    classicChart.draw(data, classicOptions);
    button.innerText = 'Change to Material';
    button.onclick = drawMaterialChart;
  }

  drawMaterialChart();
};
