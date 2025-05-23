// Since we are using js to emualate a phone, we are using cookies to store the data
let cookies = {"tempUnits": "C", "timeFormat": "24", "notifications": "enabled"}

function setCookie(cname, cvalue, exdays = 10) {
  cookies[cname] = cvalue;
}

function getCookie(cname) {
  return cookies[cname]
}

function firstTime() {
  if (getCookie("firstTime") == "") {
    setCookie("firstTime", "False")
    return true;
  } else {
    return false;
  }
}

function changeTempUnits(unit) {
  if (unit == "C") {
    setCookie("tempUnits", "C");
  } else if (unit == "F") {
    setCookie("tempUnits", "F");
  } else if (unit == "K") {
    setCookie("tempUnits", "K");
  } else {
    console.log("Invalid unit type");
  }
}

function getTempUnits() {
  let unit = getCookie("tempUnits");
  if (unit == "") {
    return "C";
  } else {
    return unit;
  }
}

function changeTimeFormat(format) {
  if (format == "12") {
    setCookie("timeFormat", "12");
  } else if (format == "24") {
    setCookie("timeFormat", "24");
  } else {
    console.log("Invalid format type");
  }
}

function getTimeFormat() {
  let format = getCookie("timeFormat");
  if (format == "") {
    return "12";
  } else {
    return format;
  }
}

function changeNotifications(enabled) {
  setCookie("notifications", enabled);
}

function getNotifications() {
  return getCookie("notifications");
}

function changeLocation(location) {
  setCookie("location", location);
  let lat = "13";
  let lon = "52";
  changeLatitude(lat);
  changeLongitude(lon);

}

function changeLatitude(lat) {
  setCookie("latitude", lat);
}

function changeLongitude(lon) {
  setCookie("longitude", lon);
}

function getLocation() {
  let location = getCookie("location");
  if (location == "") {
    return "Cambridge";
  } else {
    return location;
  }
}

function getLatitude() {
  let lat = getCookie("latitude");
  if (lat == "") {
    return "52.52";
  } else {
    return lat;
  }
}

function getLongitude() {
  let lon = getCookie("longitude");
  if (lon == "") {
    return "13.41";
  } else {
    return lon;
  }
}

