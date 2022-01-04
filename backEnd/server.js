const express = require('express')
const cors = require('cors')

const ctrl = require('./controller')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/api/dogs', ctrl.getDogsBackEnd)

app.delete('/api/dogs/:id', ctrl.deleteDogBack)

app.put('/api/dogs/:id', ctrl.birthdayBack)


app.listen(4000, () => console.log('server running on 4000'))