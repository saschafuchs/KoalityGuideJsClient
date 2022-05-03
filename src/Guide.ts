/**
 * This class represents a single guide that was fetched via the client.
 *
 * @author Nils Langner <nils.langner@webpros.com>
 * @created 2021-08-28
 */
interface IButtons {
  test: any
}

interface IText {
  content: string
  meta?: {
    language?: string
    format?: string
    buttons: IButtons[]
  }
}

export default class Guide {
  private _identifier: string
  private _language: string
  private _text: IText
  private _format: string

  /**
   * The constructor.
   *
   * @param {string} identifier
   * @param {string} language
   * @param {string} text
   * @param {string} format
   */
  constructor(identifier: string, language: string, text: IText, format = 'md') {
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
  getText(): IText {
    return this._text
  }

  /**
   * Get the guides identifier.
   *
   * @returns {string}
   */
  getIdentifier(): string {
    return this._identifier
  }

  /**
   * Get the guides language.
   *
   * @returns {string}
   */
  getLanguage(): string {
    return this._language
  }

  /**
   * Get the guides format.
   *
   * @returns {string}
   */
  getFormat(): string {
    return this._format
  }
}
