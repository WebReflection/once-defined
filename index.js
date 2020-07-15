self.onceDefined = (function (exports) {
  'use strict';

  /**
   * @param {string|string[]} names one or more `customElements` names
   * @return {HTMLElement|HTMLElement[]} one or more classes defined through
   * the `customElements` registry
   */
  var index = (function (names) {
    var all = [].concat(names);
    return Promise.all(all.map(function (name) {
      return customElements.whenDefined(name).then(function () {
        return customElements.get(name);
      });
    })).then(function (result) {
      return all.length < 2 ? result[0] : result;
    });
  });

  exports.default = index;

  return exports;

}({}).default);
