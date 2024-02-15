const target = {};
const proxy = new Proxy(target, {
  get(target, prop) {
    return proxy;
  },
  set(target, prop, val) {
    return true;
  },
  deleteProperty(target, prop) {
    return true;
  },
  ownKeys(target) {
    // to intercept property list
    return Object.keys(target);
  },
});

export default proxy;
