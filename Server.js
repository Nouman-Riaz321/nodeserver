const express = require("express")
const cors = require("cors")
const app = express()
const dbconnect = require("./Connectbd/DBconnect")
const schema = require("./Schema/Schemas")

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send({ key: "value" })
})
dbconnect()

app.post("/addtocard", async (req, res) => {

    try {
        const userproduct = new schema(req.body)
        userproduct.save().then((resp) => {
            res.json(resp)
        })
    } catch (error) {
        console.log(error, 'error');
    }

})

app.listen(8000, () => {
    console.log("app is listening on post 8000");
})












// create server

// a)teminal commands

// 1 server folder cmd
// 2 npm init -y
// 3 npm i express
// 4 code .

// b) vs code

// 5 create file of server.js
// 6 const express = require("express")
// 7 const cors = require("cors")

// 8 const app = express()

// 9 app.use(cors())

// 10 app.get("/post" , (request , resposne)=>{
// res.send({key:"value"})
// })


// 11 app.listen(2000 , ()=>{
// console.log("app is listening on the port 2000")
// })


// 12 open terminal
// 13 npm i cors
// 14 node server.js(run file)








// front-end data post server

// 1 install nodemon (npm i nodemon)
// 2 open packags.json(script{"start":"nodemon servername.js"})
// 3 open server.js     app.use(express.json())
// 4 app.post("/userpost", (req, res) => {res.send(req.body)})
// 5 get-backend-server-data(let { data }) = await axios.post("http://localhost:5000/userpost", arr)
