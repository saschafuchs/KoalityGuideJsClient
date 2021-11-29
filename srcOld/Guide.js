/**
 * This class represents a single guide that was fetched via the client.
 *
 * @author Nils Langner <nils.langner@webpros.com>
 * @created 2021-08-28
 */
class Guide {
    /**
     * The constructor.
     *
     * @param {string} identifier
     * @param {string} language
     * @param {string} text
     * @param {string} format
     */
    constructor(identifier, language, text, format = 'md') {
        this._identifier = identifier
        this._language = language
        this._text = text
        this._format = format
    }

    /**
     * Get the guides text.
     *
     * @returns {string}
     */
    getText() {
        return this._text
    }

    /**
     * Get the guides identifier.
     *
     * @returns {string}
     */
    getIdentifier() {
        return this._identifier
    }

    /**
     * Get the guides language.
     *
     * @returns {string}
     */
    getLanguage() {
        return this._language
    }

    /**
     * Get the guides format.
     *
     * @returns {string}
     */
    getFormat() {
        return this._format
    }
}

module.exports = Guide
