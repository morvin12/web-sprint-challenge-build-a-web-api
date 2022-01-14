const express = require('express');
const Project = require('./projects-model');
const { validateProject, validateProjectID } = require('./projects-middleware')

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

router.get('/:id', validateProjectID, (req, res) => {
    res.status(200).json(req.project)
})

router.post('/', validateProject,  (req, res) => {
    Project.insert(req.body)
    .then(response => {
            res.status(201).json(response);
        })
        .catch(err => {
            res.status(500).json({ error: err.message});
        })
})

router.put('/:id', validateProject, validateProjectID, (req, res) => {
    Project.update(req.params.id, req.body)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(500).json({error: err.message})
        })
})

router.delete('/:id', validateProjectID, (req, res) => {
    Project.remove(req.params.id)
        .then(response => {
            res.status(204).json();
        })
        .catch(err => {
            res.status(500).json({ error: err.message});
        })
})

router.get('/:id/actions', validateProjectID, (req, res) => {
    Project.getProjectActions(req.params.id)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(500).json({ error: err.message })
        })
})



module.exports = router
