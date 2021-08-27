const axios = require('axios');
const Guide = require('./Guide');
const NotFoundError = require('./NotFoundError')

/**
 *
 */
class Client {
    constructor(language = 'en', format = 'markdown') {
        this._baseUrl = 'https://www.koality.io'

        this._language = language
        this._axios = axios
        this._format = format
    }

    /**
     *
     * @param identifier
     * @returns {Promise<Guide>}
     */
    async getGuide(identifier) {
        const text = await this._getGuideText(identifier)
        return new Guide(identifier, this._language, text)
    }

    async _getGuideText(identifier) {
        const url = this._baseUrl + '/' + this._language + '/' + identifier + '?format=' + this._format
        const parameters = {method: 'GET', url}

        let response = {}
        try {
            response = await this._axios(parameters)
        } catch (error) {
            if (error.response) {
                const errorResponse = error.response

                if (errorResponse.status === 404) {
                    throw new NotFoundError('No guide for identifier "' + identifier + '" with language "' + this._language + '" found.')
                }
            } else {
                throw error
            }
        }

        return response.data
    }
}

module.exports = Client
