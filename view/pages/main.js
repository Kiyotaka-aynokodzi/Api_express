const header = require('../components/header')
const footer = require('../components/footer');
const head = require('../components/head')

const main = `
${head('Главная страница')}
<body>
    ${header}
    <main>
        <div>
            <h1></h1>
            <p></p>
        </div>
    </main>
    ${footer}
</body>
</html>
`
module.exports = main