const axios = require('axios');
const Guide = require('./Guide');
const NotFoundError = require('./NotFoundError')

/**
 * This class is used to fetch all guides from the KoalityGuide engine.
 *
 * @author Nils Langner <nils.langner@webpros.com>
 * @created 2021-08-28
 */
class Client {
    /**
     * The constructor.
     *
     * @param {string} format
     * @param {string} fallbackLanguage
     */
    constructor(format = 'md', fallbackLanguage = 'en') {
        this._baseUrl = 'https://api.koalityguide.com/KoalityContent'
        this._axios = axios
        this._assertFormatAllowed(format)
        this._format = format
        this._fallbackLanguaga = fallbackLanguage
    }

    /**
     * Assert that the given format is valid and known.
     *
     * It will throw an error if the format is not valid.
     *
     * @param {string} format
     * @private
     */
    _assertFormatAllowed(format) {
        if (format !== "md") {
            throw new Error('The given format "' + format + '" is not allowed. Please use "md".')
        }
    }

    /**
     * Return a Guide for the given identifier and language.
     *
     * @param {string} identifier
     * @param {string} language
     *
     * @returns {Promise<Guide>}
     */
    async getGuide(identifier, language = 'en') {
        const {text, fetchedLanguage} = await this._getGuideText(identifier, language)
        return new Guide(identifier, fetchedLanguage, text, this._format)
    }

    /**
     * Fetch the guide text from the content server.
     *
     * @param {string} identifier
     * @param {string} language
     * @param {string} primaryLanguage
     *
     * @returns {Promise<object>}
     *
     * @private
     */
    async _getGuideText(identifier, language, primaryLanguage) {

        // https://api.koalityguide.com/KoalityContent/html/deadlink/404.de.md
        const url = this._baseUrl + '/' + identifier.replaceAll('.', '/') + '.' + language + '.' + this._format

        const parameters = {method: 'GET', url}

        let response = {}
        try {
            response = await this._axios(parameters)
        } catch (error) {
            if (error.response) {
                const errorResponse = error.response

                if (errorResponse.status === 404) {
                    if (language === this._fallbackLanguaga) {
                        throw new NotFoundError('No guide for identifier "' + identifier + '" with language "' + primaryLanguage + '" or fallback language "' + language + '" found.')
                    } else {
                        return await this._getGuideText(identifier, this._fallbackLanguaga, language)
                    }
                }
            } else {
                throw error
            }
        }

        return {text: response.data, fetchedLanguage: language}
    }
}

module.exports = Client
