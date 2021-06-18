const bands = require('./db.json')

let id = 4

module.exports = {
  getAllBands: function(req, res) {
    res.status(200).send(bands)
  },

  addBand: function(req, res) {
    let { name, album, releaseDate, imageURL } = req.body
    let newBand = {
      id,
      name,
      album,
      releaseDate,
      imageURL
    }

    bands.push(newBand)
    res.status(200).send(bands)
    id++
  },

  removeBand: function(req, res) {
    let index = bands.findIndex(element => element.id === +req.params.id)
    bands.splice(index, 1)
    res.status(200).send(bands)
  }
}

getAllBands()