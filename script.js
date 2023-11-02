function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile-img")
  const insta = document.querySelector("#profile-insta")
  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, add a imagem light
    insta.textContent = "@nathalianunesbeauty"
    img.setAttribute("src", "./assets/nathalia.jpeg")
  } else {
    //se tiver sem light mode, manter a imagem normal
    insta.textContent = "@geovanaraujo_sb"
    img.setAttribute("src", "./assets/geo.jpeg")
  }
}
