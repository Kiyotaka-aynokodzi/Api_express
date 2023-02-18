const header = require('../components/header')
const footer = require('../components/footer');
const head = require('../components/head')

const about_me = `
${head('Обо мне')}
<body>
    ${header}
    <h1>Обо мне</h1>
    <p></p>
    ${footer}
</body>
</html>
`
module.exports = about_me;