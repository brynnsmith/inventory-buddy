const mongoose = require('mongoose')

const invItemSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  SKU: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  }
})

module.exports = mongoose.model('invItem', invItemSchema)

//new Date(year, month, date, hours, minutes, seconds, ms)
