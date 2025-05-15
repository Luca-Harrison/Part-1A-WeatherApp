function firstTime() {
  if (getCookie("firstTime") == "") {
    setCookie("firstTime", "False", 10)
    return True;
  } else {
    return False;
  }
}
