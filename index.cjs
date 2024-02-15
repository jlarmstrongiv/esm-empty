// references
// - https://javascript.info/proxy
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/apply
// - https://gist.github.com/arccoza/50fe61c8430fc97a463bf6b8960776ce

class Callable extends Function {
  constructor() {
    super();
    this._instance = null;
    return new Proxy(this, this);
  }

  // singleton https://stackoverflow.com/a/4842961
  getInstance() {
    if (this._instance === null) {
      this._instance = new Callable();
    }
    return this._instance;
  }

  get() {
    return this.getInstance();
  }
  set() {
    return true;
  }
  deleteProperty() {
    return true;
  }
  ownKeys() {
    return [];
  }
  apply() {
    return this.getInstance();
  }
  construct() {
    return this.getInstance();
  }
}

module.exports = new Callable();
