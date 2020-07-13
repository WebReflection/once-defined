self.onceDefined = (function (exports) {
  'use strict';

  var index = (function () {
    for (var _len = arguments.length, $ = new Array(_len), _key = 0; _key < _len; _key++) {
      $[_key] = arguments[_key];
    }

    return Promise.all($.map(function (_) {
      return customElements.whenDefined(_).then(function () {
        return customElements.get(_);
      });
    })).then(function ($) {
      return $.length === 1 ? $[0] : $;
    });
  });

  exports.default = index;

  return exports;

}({}).default);
