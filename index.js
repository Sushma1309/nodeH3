const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const middleware = (req,res,next) => {
    console.log("I am first middleware")
    next()
}

const middleware2 = (req,res,next) => {
    console.log("I am second middleware")
    next()
}

app.get("/",middleware,((req,res) => {
   console.log("First one got executed")
   res.send("middleware1")
}))

app.get("/second",middleware2,((req,res) => {
   console.log("Second one got executed")
   res.send("middleware2")
}))


app.listen(3000,() => {
    console.log("server started")
})

app.use("/api",cors(),((req,res) => {
    res.json({
        "student":[
            { name: "Sushma"

            }
        ]
    })
}))