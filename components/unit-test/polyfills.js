/* eslint-disable */

(function() {
  var MutationObserver;

  if (window.MutationObserver != null) {
    return;
  }

  MutationObserver = (function() {
    function MutationObserver(callBack) {
      this.callBack = callBack;
    }

    MutationObserver.prototype.observe = function(element, options) {
      this.element = element;
      return this.interval = setInterval((function(_this) {
        return function() {
          var html;
          html = _this.element.innerHTML;
          if (html !== _this.oldHtml) {
            _this.oldHtml = html;
            return _this.callBack.apply(null);
          }
        };
      })(this), 200);
    };

    MutationObserver.prototype.disconnect = function() {
      return window.clearInterval(this.interval);
    };

    return MutationObserver;

  })();

  window.MutationObserver = MutationObserver;

}).call(this);

(function() {
  if (window.matchMedia) {
    return;
  }

  window.matchMedia = (mediaQueryString) => {
    const mql = {
      matches: false,
      media: mediaQueryString,
      addListener: (f) => {},
      removeListener: (f) => {},
    }
    return mql
  }


}).call(this);

(function() {
  if (window.requestAnimationFrame) {
    return;
  }

  window.requestAnimationFrame = () => {}

}).call(this);

(function() {
  if (window.cancelAnimationFrame) {
    return;
  }

  window.cancelAnimationFrame = () => {}

}).call(this);


(function() {
  // global HTMLInputElement
  HTMLInputElement.prototype.validity = {
    badInput: false,
    valid: true,
  }
}).call(this);
