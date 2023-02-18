const express = require("express");
const {request, response} = require("express");

const shop = require("./view/pages/shop");
const about_me = require("./view/pages/about_me");
const contact = require("./view/pages/contact");
const main = require("./view/pages/main");


const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/public'));

const db = require('./moks/product');
const products = require("./moks/product");


app.get('/', (request, response) => {
    response.send(main)
})

app.get('/shop', (request, response) => {
    response.send(shop)
})

app.get('/shop/:id', (request, response => {
    const id = request.params.id
    const finded = false
    let index = 0 
    let product
    while(!finded || db.length >=  index - 1) {
        if(db[index].id === id) {
            finded = true;
        }
        index += 1
    }
    response.send(`<h1>${request.params.id}</h1>`)
    response.json(product)
}))

app.get('/contact', (request, response) => {
    response.send(contact)
})

app.get('/aboutme', (request, response) => {
    response.send(about_me)
})

app.listen(8000, () => {
    console.log("Сервер запущен на порту 8000")
})