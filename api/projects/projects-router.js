const express = require('express');
const Project = require('./projects-model');

const router = express.Router();

router.get('/', (req, res) => {
    Project.get()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json({ error: err.message });
    })
})

router.get('/:id', (req, res) => {
    res.status(200).json(req.project)
})

router.post('/', (req, res) => {
    Project.insert(req.body)
    .then(response => {
            res.status(201).json(response);
        })
        .catch(err => {
            res.status(500).json({ error: err.message});
        })
})

router.put('/:id', (req, res) => {
    Project.update(req.params.id, req.body)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(500).json({error: err.message})
        })
})

router.delete('/:id', (req, res) => {
    Project.remove(req.params.id)
        .then(response => {
            res.status(204).json();
        })
        .catch(err => {
            res.status(500).json({ error: err.message});
        })
})

router.get('/:id/actions', (req, res) => {
    Project.getProjectActions(req.params.id)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(500).json({ error: err.message })
        })
})



module.exports = router
