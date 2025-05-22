
// Weather

function getWeather() {
  lat = getLatitude();
  long = getLongitude();
  console.log("Latitude: " + lat);
  console.log("Longitude: " + long);

  units = getTempUnits();
  console.log("Units: " + units);
  if (units == "C") {
    units = "celsius";
  } else {
    units = "fahrenheit";
  }

  const url = "https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + long + "&hourly=cloud_cover,visibility&current=temperature_2m,precipitation,wind_speed_10m&forecast_days=1&temperature_unit=" + units;
  console.log("URL: " + url);

  $.get(url, function (data) {
    console.log(data);
    const temperature = data.current.temperature_2m;
    const precipitation = data.current.precipitation;
    const wind_speed = data.current.wind_speed_10m;
    const cloud_cover = data.hourly.cloud_cover[0];
    const visibility = data.hourly.visibility[0];

    console.log("Temperature: " + temperature);
    console.log("Precipitation: " + precipitation);
    console.log("Wind Speed: " + wind_speed);
    console.log("Cloud Cover: " + cloud_cover);
    console.log("Visibility: " + visibility);

    return {
      temperature: temperature,
      precipitation: precipitation,
      wind_speed: wind_speed,
      cloud_cover: cloud_cover,
      visibility: visibility
    }
  })
}

// Location

// This function gets a list of matching locations from the Open-Meteo API
function getLocationSuggestions(location) {
  let locations = [["Cambridge", "Cambridgeshire"], ["Girton", "Cambridgeshire"],
  ["London", "Greater London"], ["Manchester", "Greater Manchester"], ["Plymouth", "Devon"],
  ["Rochester", "Kent"], ["Peterborough", "Cambridgeshire"]];

  const suggestions = locations.filter(loc => loc[0].toLowerCase().includes(location.toLowerCase()));
  // return the index of the suggestions
  let suggestionsIndex = [];
  for (let i = 0; i < suggestions.length; i++) {
    suggestionsIndex.push(locations.indexOf(suggestions[i]));
  }
  return suggestionsIndex;

}
