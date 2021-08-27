const Client = require('../src/Client')

const client = new Client();

(async () => {
    // const guide = await client.getGuide('html_deadlink_403')
    const guide = await client.getGuide('de')
    console.log(guide.getIdentifier())
    console.log(guide.getText())
})()


