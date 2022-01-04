let dogData = require('../db.json')

module.exports = {
    getDogsBackEnd: (req, res) => {
        // console.log('hi doggo')
        res.status(200).send(dogData)
    },
    deleteDogBack: (req, res) => {
        const targetId = req.params.id;
        // console.log(targetId)
        const foundIndex = dogData.findIndex(dogObj => {
            // console.log(dogObj.id)
            return dogObj.id === +targetId
        });
        // console.log(foundIndex)
        dogData.splice(foundIndex, 1)

        res.status(200).send(dogData);
    },
    birthdayBack: (req, res) => {
        const targetId = req.params.id;
        
        const foundIndex = dogData.findIndex(dogObj => {
            // console.log(dogObj.id)
            return dogObj.id === +targetId
        });
        
        dogData[foundIndex].age ++

        res.status(200).send(dogData);
    },
}