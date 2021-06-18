// const bandsContainer = document.querySelector("#bandsContainer")
// const form = document.querySelector("form")

// const baseURL = `http://localhost:4004/api/bands`

// // const bandsCallBack = ({ data: bands}) => displayBands(bands)
// // const getAllBands = () => axios.get(baseURL).then(bandsCallBack)
// const addBand = body => axios.post(baseURL, body)
// const deleteBand = id => axios.delete(`${baseURL}/${id}`)

// function submitHandler(element) {
//   element.preventDefault()

//   let name = document.querySelector("#name")
//   let album = document.querySelector("#album")
//   let releaseDate = document.querySelector("#releaseDate")
//   let imgURL = document.querySelector("#imgURL")

//   let bandObj = {
//     name,
//     album,
//     releaseDate,
//     imgURL
//   }

// addBand(bandObj)
//   name.value = ''
//   album.value =''
//   releaseDate.value = ''
//   imgURL.value = ''
// }

// function createBandCard(band) {
//   const bandCard = document.createElement("div")
//   bandCard.classList.add("bandCard")

//   bandCard.innerHTML = `<img alt ='band album cover' src=${band.imgURL} class="bandAlbumCover"/>
//   <p class="release date">${release.date}</p>
//   <div class="btns-container">
//   <button onClick="updateBands(${band.id}">Add</button>
//   <button onClick="updateBands(${band.id}">Remove</button>`

//   bandsContainer.appendChild(bandCard)

//   function displayBands(arr) {
//     bandsContainer.innerHTML = ``
//     for (let i = 0; i < arr.length; i++) {
//       createBandCard(arr[i])
//     }
//   }

// }

// form.addEventListener('submit', submitHandler)


