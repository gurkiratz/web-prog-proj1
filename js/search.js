// // const searchBtn = $("#search-btn")
// searchBtn.on("click", () => {
//   const searchInput = $("#search-input").val()
//   console.log(searchInput)
//   if (searchInput === "html") {
//     parent.location = "/html-doc.html"
//   } else if (searchInput === "javascript") {
//     parent.location = "/js-doc.html"
//   } else if (searchInput === "css") {
//     parent.location = "/css-doc.html"
//   } else if (searchInput === "python") {
//     parent.location = "/python-doc.html"
//   } else if (searchInput === "java") {
//     parent.location = "/java-doc.html"
//   } else {
//     alert("Your search was not found! Try again")
//   }
// })

const searchBtn = document.getElementById("search-btn")

searchBtn.addEventListener("click", () => {
  const searchInput = document.getElementById("search-input").value
  console.log(searchInput)
  if (searchInput === "html") {
    parent.location = "/html-doc.html"
  } else if (searchInput === "javascript") {
    parent.location = "/js-doc.html"
  } else if (searchInput === "css") {
    parent.location = "/css-doc.html"
  } else if (searchInput === "python") {
    parent.location = "/python-doc.html"
  } else if (searchInput === "java") {
    parent.location = "/java-doc.html"
  } else {
    alert("Your search was not found! Try again")
  }
})
