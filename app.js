const express = require("express");
const {request, response} = require("express");

const shop = require("./view/pages/shop");
const about_me = require("./view/pages/about_me");
const contacts = require("./view/pages/contact");
const main = require("./view/pages/main");


const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/public'));


app.get('/', (request, response) => {
    response.send(main)
})

app.get('/shop', (request, response) => {
    response.send(shop)
})

app.get('/contact', (request, response) => {
    response.send(contacts)
})

app.get('/aboutme', (request, response) => {
    response.send(about_me)
})

app.listen(8000, () => {
    console.log("Сервер запущен на порту 8000")
})