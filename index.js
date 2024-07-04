import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("index.ejs")
})

app.listen(port, () => {
    console.log(`server is running on ${port}`);
  });