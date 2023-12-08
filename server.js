const path = require('path')
const express = require('express')
const app = express()
const fs = require('fs').promises

const herkut = require('./herkut.json')

app.get('/api/herkut', (req, res) => {
    res.json(herkut)
})

//Pinkoodin lukeminen txt tiedostosta palvelimelta ja lähettäminen selaimelle
app.get('/api/getpin', async (req, res) => {
    try {
        const savedPin = await fs.readFile('./pin.txt', 'utf-8')

        res.send(savedPin)
    } catch (error) {
        console.error('Error reading file:', error)
        res.status(500).send('Internal Server Error')
    }
})
//Loppuuu

const polku = path.join(__dirname, './public')

app.use(express.static(polku))

app.listen(3000, () => {
    console.log('Server is up')
})
