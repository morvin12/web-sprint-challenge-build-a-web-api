const express = require('express');
const Action = require('./actions-model')

const router = express.Router();

router.get('/', (req, res) => {
    Action.get()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json({ err: err.message })
    })
})

router.get('/:id', (req, res) => {
    res.status(200).json(req.action)
})

router.post('/', (req, res) => {
    Action.insert(req.body)
    .then(response => {
        res.status(201).json(response)
    })
    .catch(err => {
        res.status(500).json({ err: err.message })
    })
})
router.put('/:id', (req, res) => {
    Action.update(req.params.id, req.body)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json({ err: err.message })
    })
})
router.delete('/:id', (req, res) => {
    Action.remove(req.params.id)
    .then(response => {
        res.status(204).json(response)
    })
    .catch(err => {
        res.status(500).json({ err: err.message })
    })
})

module.exports = router
