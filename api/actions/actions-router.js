const express = require('express');
const Action = require('./actions-model');
const { validateActionId, validateActionBody, validateActionProjectId } = require('./actions-middlware');

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

router.get('/:id', validateActionId, (req, res) => {
    res.status(200).json(req.action)
})

router.post('/', validateActionBody, validateActionProjectId, (req, res) => {
    Action.insert(req.body)
    .then(response => {
        res.status(201).json(response)
    })
    .catch(err => {
        res.status(500).json({ err: err.message })
    })
})

router.put('/:id', validateActionId, validateActionBody, validateActionProjectId, (req, res) => {
    Action.update(req.params.id, req.body)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json({ err: err.message })
    })
})

router.delete('/:id', validateActionId, (req, res) => {
    Action.remove(req.params.id)
    .then(response => {
        res.status(204).json()
    })
    .catch(err => {
        res.status(500).json({ err: err.message })
    })
})

module.exports = router;
