class Guide {
    constructor(identifier, language, text, format = 'markdown') {
        this._identifier = identifier
        this._language = language
        this._text = text
        this._format = format
    }

    getText() {
        return this._text
    }

    getIdentifier() {
        return this._identifier
    }
}

module.exports = Guide
