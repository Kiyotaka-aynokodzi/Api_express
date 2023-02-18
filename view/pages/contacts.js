const header = require('../components/header')
const footer = require('../components/footer');
const head = require('../components/head')

const contacts = `
${head('Контакты')}
<body>
    ${header}
    <h1>Контакты</h1>
    <ul>
        <li>Владислав +79123131317</li>
        <li>Андрей +7923929422</li>
        <li>Мага +79131233117</li>
    </ul>
    ${footer}
</body>
</html>
`
module.exports = сontacts;