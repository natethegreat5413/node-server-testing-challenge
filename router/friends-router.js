const router = require('express').Router()
const Friends = require('../router/friends-model')

router.get('/', (req, res) => {
    Friends.find()
        .then(friend => {
            res.status(200).json(friend)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

router.post('/', (req, res) => {
    if(req.body.name){
    Friends.add(req.body)
        .then(friend => {
            res.status(201).json(friend)
        })
        .catch(error => {
            res.status(500).json({error: error.message})
        })
    }else{
        res.status(400).json({ message: 'please provide correct info.'})
    }
})

router.delete('/:id', (req, res) => {
    if(req.params.id){
    Friends.remove(req.params.id)
        .then(del => {
            res.status(204).json({ removed: del})
        })
        .catch(error => {
            res.status(500).json({ error: error.message })
        })
    }else{
        res.status(404).json({ message: 'id not found'})
    }
})



module.exports = router;