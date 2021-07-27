const express = require('express');
const uniqid = require('uniqid');
const router = express.Router()

let booksArr = []

/* Gel all books */
router.get('/', (req, res) => {
  res.send(booksArr)
})

router.post('/', (req, res) => {
  console.log("Helo")
  const id = uniqid()
  const newItem = {id: id, ...req.body}
  booksArr.push(newItem)
  res.send(booksArr)
})

router.put('/:id', (req, res) => {
  const check = booksArr.find((book) => {
    if (book.id === req.params.id) {
      book.total_pages = 160
      return true
    }
  })
  if (check) {
    res.send(check)
  } else {
    res.send("Error: Couldn't find this book.")
  }
})

router.delete('/:id', (req, res) => {
  booksArr = booksArr.filter((book) => {
    if (book.id !== req.params.id) {
      return true
    }
  })
  res.send(booksArr)
})


module.exports =router;
