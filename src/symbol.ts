/**
 * A class representation of the BSON Symbol type.
 */
export class BSONSymbol {
  readonly _bsonvalue: 'Symbol';
  public value: string;
  /**
   * Create a Symbol type
   *
   * @param {string} value the string representing the symbol.
   */
  constructor(value: string) {
    this.value = value;
  }

  /**
   * Access the wrapped string value.
   *
   * @method
   * @return {String} returns the wrapped string.
   */
  valueOf() {
    return this.value;
  }

  /**
   * @ignore
   */
  toString() {
    return this.value;
  }

  /**
   * @ignore
   */
  inspect() {
    return this.value;
  }

  /**
   * @ignore
   */
  toJSON() {
    return this.value;
  }

  /**
   * @ignore
   */
  toExtendedJSON() {
    return { $symbol: this.value };
  }

  /**
   * @ignore
   */
  static fromExtendedJSON(doc: any) {
    return new BSONSymbol(doc.$symbol);
  }
}

Object.defineProperty(BSONSymbol.prototype, '_bsontype', { value: 'Symbol' });