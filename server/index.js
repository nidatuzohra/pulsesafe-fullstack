import express from 'express'
const app = express()
const port = 3001
app.use(express.json())
var hrmData = 'empty'

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get("/api", (req, res) => {
    res.json({ message: `Alert received! HR = ${hrmData}` });
});

app.post('/heart-rate', (req, res) => {
    // console.log(req.body)
    const currentHRM = req.body
    var startIndex = currentHRM["heartrate"].indexOf(":")+1
    var endIndex = currentHRM["heartrate"].indexOf("}")``
    hrmData = currentHRM["heartrate"].substring(startIndex, endIndex)
    console.log(hrmData)
    // console.log(typeof(hrmData))
    // console.log(currentHRM)
    res.json({ requestBody: req.body })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})