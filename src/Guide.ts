/**
 * This class represents a single guide that was fetched via the client.
 *
 * @author Nils Langner <nils.langner@webpros.com>
 * @created 2021-08-28
 */

interface IButtons {
  text: string
  url?: string
  target?: string
}

export default class Guide {
  private _identifier: string
  private _language: string
  private _text: string
  private _format: string
  private _buttons: IButtons

  /**
   * The constructor.
   *
   * @param {string} identifier
   * @param {string} language
   * @param {string} text
   * @param {string} format
   * @param {IButtons} buttons
   */
  constructor(identifier: string, language: string, text: string, format = 'md', buttons?: IButtons) {
    this._identifier = identifier
    this._language = language
    this._text = text
    this._format = format
    this._buttons = buttons || { text: '', url: '', target: '_blank' }
  }

  /**
   * Get the guides text.
   *
   * @returns {string}
   */
  getText(): string {
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

  getButtons(): IButtons {
    return this._buttons
  }
}
