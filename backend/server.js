const express = require("express")
const app = express()
const dotenv = require("dotenv").config()
const connectDb = require("./config/connectionDb")
const cors = require("cors")

const PORT = process.env.PORT || 3000
connectDb()

app.use(express.json())
app.use(
    cors({
        origin: "https://recipe-blog-soc4.onrender.com", // Your frontend URL
        methods: "GET,POST,PUT,DELETE",
        allowedHeaders: "Content-Type,authorization",
        credentials: true, // If you're handling authentication
    })
);

// app.use(express.json())
// app.use(cors())
app.use(express.static("public"))

app.use("/",require("./routes/user"))
app.use("/recipe",require("./routes/recipe"))

app.listen(PORT,(err) => {
    console.log(`app is listening on port ${PORT}`)
})