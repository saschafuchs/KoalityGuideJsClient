# JavaScript Client for the Koality Guide.

This client is used to connect to the KoalityClient database and fetch guides for given identifiers.

**Important**: When fetching data from the KoalityGuide only use this client. The API of the server will change in future, but we try to keep this client compatible as long a possible.

## Example

```javascript
const Client = require('../src/Client')

const koalityGuideClient = new Client('md');

(async () => {
    const guide = await koalityGuideClient.getGuide('html.deadlink.404', 'de')
    console.log('Language: ', guide.getLanguage())
    console.log('Text: ', guide.getText())
})()
```

For more examples see the `/examples` directory.

## Features
- **Fallback language**: when creating a new client a fallback language can be added. If no guide for the actual language was found the client will return the fallback language guide if exists.
- **Multi format**: in future it will be possible to fetch the guide in multiple formats. We will start with markdown (md) and html.
