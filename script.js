function toggleMode() {
  const html = document.documentElement

  /*if (html.classList.contains("light")) {
    html.classList.remove("light")
    img.setAttribute("src", "./assests/avatar.png")
  } else {
    html.classList.add("light")
    img.setAttribute("src", "./assets/Ellipse.png")
  } 
  */

  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/Avatar.png")
  }
}
