const header = require('../components/header')
const footer = require('../components/footer');
const head = require('../components/head')
const card = require('../components/card')
const products = require('../../moks/product')

let productsHTML = '';

for (let i = 0; i < products.length; i++) {
    productsHTML = productsHTML + card(products[i].photoSrc, products[i].tittle, products[i].desc, products[i].price)
}

const shop = `
${head('Магазин')}
<body>
    ${header}
    <div class = 'products'>
    ${productsHTML}
    </div>
    ${footer}
</body>
</html>
`
module.exports = shop;