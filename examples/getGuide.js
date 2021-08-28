const Client = require('../src/Client')

const koalityGuideClient = new Client('md');

(async () => {
    const guide = await koalityGuideClient.getGuide('html.deadlink.404', 'de')
    console.log('Identifier: ', guide.getIdentifier())
    console.log(guide.getText())
})()
