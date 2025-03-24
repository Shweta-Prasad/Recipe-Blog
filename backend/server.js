const express = require("express")
const app = express()
const dotenv = require("dotenv").config()
const connectDb = require("./config/connectionDb")
const cors = require("cors")

app.use(cors({
  origin: "https://recipe-blog-frontend.onrender.com", // Update with your frontend URL
  credentials: true
}));


const PORT = process.env.PORT || 3000
connectDb()

app.use(express.json())
app.use(cors())
app.use(express.static("public"))

app.use("/",require("./routes/user"))
app.use("/recipe",require("./routes/recipe"))

app.listen(PORT,(err) => {
    console.log(`app is listening on port ${PORT}`)
})