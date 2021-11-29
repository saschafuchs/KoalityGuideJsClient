import Guide from './Guide';
/**
 * This class is used to fetch all guides from the KoalityGuide engine.
 *
 * @author Nils Langner <nils.langner@webpros.com>
 * @created 2021-08-28
 */
export default class Client {
    private _format;
    private _baseUrl;
    private _axios;
    private _fallbackLanguage;
    /**
     * The constructor.
     *
     * @param {string}  format
     * @param {string} fallbackLanguage
     */
    constructor(format?: string, fallbackLanguage?: string);
    /**
     * Assert that the given format is valid and known.
     *
     * It will throw an error if the format is not valid.
     *
     * @param {string} format
     * @private
     */
    private static _assertFormatAllowed;
    /**
     * Return a Guide for the given identifier and language.
     *
     * @param {string} identifier
     * @param {string} language
     *
     * @returns {Promise<Guide>}
     */
    getGuide(identifier: string, language?: string): Promise<Guide>;
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
    private _getGuideText;
}
