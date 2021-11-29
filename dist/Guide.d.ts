/**
 * This class represents a single guide that was fetched via the client.
 *
 * @author Nils Langner <nils.langner@webpros.com>
 * @created 2021-08-28
 */
export default class Guide {
    private _identifier;
    private _language;
    private _text;
    private _format;
    /**
     * The constructor.
     *
     * @param {string} identifier
     * @param {string} language
     * @param {string} text
     * @param {string} format
     */
    constructor(identifier: string, language: string, text: string, format?: string);
    /**
     * Get the guides text.
     *
     * @returns {string}
     */
    getText(): string;
    /**
     * Get the guides identifier.
     *
     * @returns {string}
     */
    getIdentifier(): string;
    /**
     * Get the guides language.
     *
     * @returns {string}
     */
    getLanguage(): string;
    /**
     * Get the guides format.
     *
     * @returns {string}
     */
    getFormat(): string;
}
