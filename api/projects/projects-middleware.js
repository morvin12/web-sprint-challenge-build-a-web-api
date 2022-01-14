const Project = require('./projects-model')

function validateProject (req, res, next) {
    if (!req.body.name || !req.body.description || req.body.completed === undefined  ){
        res.status(400).json({ error: `Name and description are required` })
    } else {
        next();
    }
}

function validateProjectID (req, res, next) {
    Project.get(req.params.id)
        .then( response => {
        if (response) {
            req.project = response
        next();
        } else {
            res.status(404).json({ error: `Project ID ${req.params.id} not found` });
        }
    })
    .catch( err => {
    res.status(500).json({ error: err.message })
    })
}

module.exports = { validateProjectID, validateProject }
