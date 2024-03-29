// Photo gallery JS
baguetteBox.run('.cards-gallery', {
  animation: 'slideIn'
});

// UFO Search Function
function callArchiSearch() {

  // countryLat = document.getElementById('lat').value;
  // countryLong = document.getElementById('long').value;

  let searchLocation = document.getElementById('location_search_input').value;
  let pwd = document.getElementById('pwd').value;
  let urlCoordinates = searchLocation;

  // let urlCoordinates = countryLat + '%2C' + countryLong;

  // search_location
  let urlParameters = "&search_range=10000&pwd=" + pwd + "&SearchType=freesearch" + "&keywords=magnet";
  // let urlParameters = "&search_range=10000&pwd=" + pwd + "&SearchType=freesearch" + "&keywords=magnet-fishing-places";

  // let urlCoordinates = 53.528680 + '%2C' + -2.123737;

  console.log(urlCoordinates);

  // window.open("http://localhost:8080/login?cid="+ myu +"&pwd="+ myp ,"MyTargetWindowName");
  window.open(
    "https://www.archiuk.com/cgi-bin/archi_new_search_engine.pl?search_location=" + urlCoordinates + urlParameters

    // "https://www.archiuk.com/cgi-bin/web-archi.pl?ARCHIFormFreeSearch=${urlCoordinates}&SearchType=freesearch&distance=10000"


    // "https://www.archiuk.com/placenames"
  );
}

// Scroll to top of page button in footer
toTheTopButton = document.getElementById("to_the_top_button");

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Get users current location
function getCurrentLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var positionInfo = `${position.coords.latitude}, ${position.coords.longitude}`;
      document.getElementById("location_search_input").value = positionInfo;
    });
  } else {
    alert("Sorry, your browser does not support HTML5 geolocation.");
  }
}

// Load monthly subscription page
function chooseMonthlyPlan() {
  window.open("subscribe_m.html", "_self");
}

// Load annual subscription page
function chooseYearlyPlan() {
  window.open("subscribe_y.html", "_self");
}