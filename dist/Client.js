"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = (0, tslib_1.__importDefault)(require("axios"));
const Guide_1 = (0, tslib_1.__importDefault)(require("./Guide"));
const NotFoundError_1 = (0, tslib_1.__importDefault)(require("./NotFoundError"));
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
     * @param {string}  format
     * @param {string} fallbackLanguage
     */
    constructor(format = 'md', fallbackLanguage = 'en') {
        this._baseUrl = 'https://api.koalityguide.com';
        this._axios = axios_1.default;
        Client._assertFormatAllowed(format);
        this._format = format;
        this._fallbackLanguage = fallbackLanguage;
    }
    /**
     * Assert that the given format is valid and known.
     *
     * It will throw an error if the format is not valid.
     *
     * @param {string} format
     * @private
     */
    static _assertFormatAllowed(format) {
        if (format !== 'md') {
            throw new Error(`The given format "${format}" is not allowed. Please use "md".`);
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
        const { text, fetchedLanguage } = await this._getGuideText(identifier, language);
        return new Guide_1.default(identifier, fetchedLanguage, text, this._format);
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
    async _getGuideText(identifier, language, primaryLanguage = 'en') {
        // https://api.koalityguide.com/KoalityContent/html/deadlink/404.de.md
        const url = `${this._baseUrl}/${identifier.replaceAll('.', '/')}.${language}.${this._format}`;
        let response = {};
        try {
            response = await this._axios({ method: 'GET', url });
        }
        catch (error) {
            if (error.response) {
                const errorResponse = error.response;
                if (errorResponse.status === 404) {
                    if (language === this._fallbackLanguage) {
                        throw new NotFoundError_1.default(`No guide for identifier "${identifier}" with language "${primaryLanguage}" or fallback language "${language}" found.`);
                    }
                    return await this._getGuideText(identifier, this._fallbackLanguage, language);
                }
            }
            else {
                throw error;
            }
        }
        return { text: response.data, fetchedLanguage: language };
    }
}
exports.default = Client;
