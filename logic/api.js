
// Weather

function getWeather() {
  lat = getLatitude();
  long = getLongitude();

  units = getTempUnits();

  const xhttpr = new XMLHttpRequest();
  url = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=cloud_cover,visibility&current=temperature_2m,precipitation,wind_speed_10m&forecast_days=1"

}




// Location



// Celestial Bodies
