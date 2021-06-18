const motivations = require('./db.json')
let globalId=5
 module.exports = {
 getMotivation:(req,res)=>res.status(200).send(motivated),
  createMotivation: (req, res) => {
        let { id, title,  imageURL } = req.body
        let newMotivation = {
            id,
            title, 
            imageURL
        }
        motivation.push(newMotivation)
        res.status(200).send(motivation)
        globalId++
    },
    updateMotivation: (req, res) => {
        let { type } = req.params
        let { id } = req.body
        let index = motivation.findIndex(elem => +elem.id === +id)
        res.status(200).send(motivation)
       
    },
     deleteMotivation: (req, res) => {
        let index = motivation.findIndex(elem => elem.id === +req.params.id)
        motivation.splice(index, 1)
        res.status(200).send(motivation)
    }
}