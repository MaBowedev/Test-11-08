import express, { json } from "express";
import router  from "./router/router.js";

const port = 8080

//server express create
const app = express()


//middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static('public'));
app.set('view engine','ejs')


//call router
app.use('/', router)


app.listen(port)