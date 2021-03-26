const express = require("express");
const router = express.Router();
const mongoose = require('mongoose')


const roomSchema = new mongoose.Schema({
  room: {
      type: String,
      required: true
  },
  name: {
    type: String,
    required: true
  },
  issue: {
    type: String,
    required: true
  }
})

const Room = mongoose.model('Room', roomSchema);


router.get("/", (req, res) => {
  res.send({ response: "Server is up and running." }).status(200);
});

router.post("/chat", (req, res) => {
  const room = new Room({
      room: req.body.room,
      issue: req.body.issue,
      name: req.body.name
  })

  room.save().then(() => console.log(room))
});


router.get('/chats', async (req, res) => {
  console.log('i go here')
  const rooms = await Room.find()
  res.json(rooms).status(200)
});


module.exports = router;