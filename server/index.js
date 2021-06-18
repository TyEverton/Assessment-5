const express = require("express");
const cors = require("cors");
const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ]

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length)
  let randomCompliment = compliments[randomIndex]

  res.status(200).send(randomCompliment)
  
}),

app.get("/api/fortune", (req, res) => {
  const fortunes = ["A beautiful, smart, and loving person will be coming into your life.",
"A lifetime of happiness lies ahead of you.",
"All will go well with your new project.",
"Distance yourself from the vain.",
"Don’t just think, act!"]

let randomIndex = Math.floor(Math.random() * fortunes.length)
let randomFortune = fortunes[randomIndex]

res.status(200).send(randomFortune)
}),

// app.get("/api/bands", (req, res) => {
//   const bands = ["https://townsquare.media/site/366/files/2020/08/lateralrsus-51b0c267a40ba-e1544218652314-900x625.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89"]

//   let randomIndex = Math.floor(Math.random() * bands.length)
//   let randomBand = bands[randomIndex]

//   res.status(200).send(randomBand)
// })


app.get("/api/struggle", (req, res) => {
  const struggles = ["I could have been the ring leader of the group 'Struggle-Ville Click!'",
"While back-end does some cool things... it is not my forté",
"I may have to take a back-end beginner course.",
"Yes, clearly I did </3",
]

let randomIndex = Math.floor(Math.random() * struggles.length)
let randomStruggle = struggles[randomIndex]

res.status(200).send(randomStruggle)
})



app.listen(4000, () => console.log("Server running on 4000"));
