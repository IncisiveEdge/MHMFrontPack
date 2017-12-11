/**
 * Created by amarsoft on 2017/11/25.
 */
/**
 * @license
 * Video.js 6.4.0 <http://videojs.com/>
 * Copyright Brightcove, Inc. <https://www.brightcove.com/>
 * Available under Apache License Version 2.0
 * <https://github.com/videojs/video.js/blob/master/LICENSE>
 *
 * Includes vtt.js <https://github.com/mozilla/vtt.js>
 * Available under Apache License Version 2.0
 * <https://github.com/mozilla/vtt.js/blob/master/LICENSE>
 */

/* eslint-disable */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
      (global.videojs = factory());
}(this, (function () {

  var version = "6.4.0";

  var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





  function createCommonjsModule(fn, module) {
    return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var win;

  if (typeof window !== "undefined") {
    win = window;
  } else if (typeof commonjsGlobal !== "undefined") {
    win = commonjsGlobal;
  } else if (typeof self !== "undefined"){
    win = self;
  } else {
    win = {};
  }

  var window_1 = win;

  var empty = {};


  var empty$1 = (Object.freeze || Object)({
    'default': empty
  });

  var minDoc = ( empty$1 && empty ) || empty$1;

  var topLevel = typeof commonjsGlobal !== 'undefined' ? commonjsGlobal :
    typeof window !== 'undefined' ? window : {};


  var doccy;

  if (typeof document !== 'undefined') {
    doccy = document;
  } else {
    doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];

    if (!doccy) {
      doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
    }
  }

  var document_1 = doccy;

  /**
   * @file browser.js
   * @module browser
   */
  var USER_AGENT = window_1.navigator && window_1.navigator.userAgent || '';
  var webkitVersionMap = /AppleWebKit\/([\d.]+)/i.exec(USER_AGENT);
  var appleWebkitVersion = webkitVersionMap ? parseFloat(webkitVersionMap.pop()) : null;

  /*
   * Device is an iPhone
   *
   * @type {Boolean}
   * @constant
   * @private
   */
  var IS_IPAD = /iPad/i.test(USER_AGENT);

// The Facebook app's UIWebView identifies as both an iPhone and iPad, so
// to identify iPhones, we need to exclude iPads.
// http://artsy.github.io/blog/2012/10/18/the-perils-of-ios-user-agent-sniffing/
  var IS_IPHONE = /iPhone/i.test(USER_AGENT) && !IS_IPAD;
  var IS_IPOD = /iPod/i.test(USER_AGENT);
  var IS_IOS = IS_IPHONE || IS_IPAD || IS_IPOD;

  var IOS_VERSION = function () {
    var match = USER_AGENT.match(/OS (\d+)_/i);

    if (match && match[1]) {
      return match[1];
    }
    return null;
  }();

  var IS_ANDROID = /Android/i.test(USER_AGENT);
  var ANDROID_VERSION = function () {
    // This matches Android Major.Minor.Patch versions
    // ANDROID_VERSION is Major.Minor as a Number, if Minor isn't available, then only Major is returned
    var match = USER_AGENT.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);

    if (!match) {
      return null;
    }

    var major = match[1] && parseFloat(match[1]);
    var minor = match[2] && parseFloat(match[2]);

    if (major && minor) {
      return parseFloat(match[1] + '.' + match[2]);
    } else if (major) {
      return major;
    }
    return null;
  }();

// Old Android is defined as Version older than 2.3, and requiring a webkit version of the android browser
  var IS_OLD_ANDROID = IS_ANDROID && /webkit/i.test(USER_AGENT) && ANDROID_VERSION < 2.3;
  var IS_NATIVE_ANDROID = IS_ANDROID && ANDROID_VERSION < 5 && appleWebkitVersion < 537;

  var IS_FIREFOX = /Firefox/i.test(USER_AGENT);
  var IS_EDGE = /Edge/i.test(USER_AGENT);
  var IS_CHROME = !IS_EDGE && /Chrome/i.test(USER_AGENT);
  var CHROME_VERSION = function () {
    var match = USER_AGENT.match(/Chrome\/(\d+)/);

    if (match && match[1]) {
      return parseFloat(match[1]);
    }
    return null;
  }();
  var IS_IE8 = /MSIE\s8\.0/.test(USER_AGENT);
  var IE_VERSION = function () {
    var result = /MSIE\s(\d+)\.\d/.exec(USER_AGENT);
    var version = result && parseFloat(result[1]);

    if (!version && /Trident\/7.0/i.test(USER_AGENT) && /rv:11.0/.test(USER_AGENT)) {
      // IE 11 has a different user agent string than other IE versions
      version = 11.0;
    }

    return version;
  }();

  var IS_SAFARI = /Safari/i.test(USER_AGENT) && !IS_CHROME && !IS_ANDROID && !IS_EDGE;
  var IS_ANY_SAFARI = IS_SAFARI || IS_IOS;

  var TOUCH_ENABLED = isReal() && ('ontouchstart' in window_1 || window_1.DocumentTouch && window_1.document instanceof window_1.DocumentTouch);

  var BACKGROUND_SIZE_SUPPORTED = isReal() && 'backgroundSize' in window_1.document.createElement('video').style;

  var browser = (Object.freeze || Object)({
    IS_IPAD: IS_IPAD,
    IS_IPHONE: IS_IPHONE,
    IS_IPOD: IS_IPOD,
    IS_IOS: IS_IOS,
    IOS_VERSION: IOS_VERSION,
    IS_ANDROID: IS_ANDROID,
    ANDROID_VERSION: ANDROID_VERSION,
    IS_OLD_ANDROID: IS_OLD_ANDROID,
    IS_NATIVE_ANDROID: IS_NATIVE_ANDROID,
    IS_FIREFOX: IS_FIREFOX,
    IS_EDGE: IS_EDGE,
    IS_CHROME: IS_CHROME,
    CHROME_VERSION: CHROME_VERSION,
    IS_IE8: IS_IE8,
    IE_VERSION: IE_VERSION,
    IS_SAFARI: IS_SAFARI,
    IS_ANY_SAFARI: IS_ANY_SAFARI,
    TOUCH_ENABLED: TOUCH_ENABLED,
    BACKGROUND_SIZE_SUPPORTED: BACKGROUND_SIZE_SUPPORTED
  });

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };











  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };











  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };











  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };











  var taggedTemplateLiteralLoose = function (strings, raw) {
    strings.raw = raw;
    return strings;
  };

  /**
   * @file obj.js
   * @module obj
   */

  /**
   * @callback obj:EachCallback
   *
   * @param {Mixed} value
   *        The current key for the object that is being iterated over.
   *
   * @param {string} key
   *        The current key-value for object that is being iterated over
   */

  /**
   * @callback obj:ReduceCallback
   *
   * @param {Mixed} accum
   *        The value that is accumulating over the reduce loop.
   *
   * @param {Mixed} value
   *        The current key for the object that is being iterated over.
   *
   * @param {string} key
   *        The current key-value for object that is being iterated over
   *
   * @return {Mixed}
   *         The new accumulated value.
   */
  var toString = Object.prototype.toString;

  /**
   * Get the keys of an Object
   *
   * @param {Object}
   *        The Object to get the keys from
   *
   * @return {string[]}
   *         An array of the keys from the object. Returns an empty array if the
   *         object passed in was invalid or had no keys.
   *
   * @private
   */
  var keys = function keys(object) {
    return isObject(object) ? Object.keys(object) : [];
  };

  /**
   * Array-like iteration for objects.
   *
   * @param {Object} object
   *        The object to iterate over
   *
   * @param {obj:EachCallback} fn
   *        The callback function which is called for each key in the object.
   */
  function each(object, fn) {
    keys(object).forEach(function (key) {
      return fn(object[key], key);
    });
  }

  /**
   * Array-like reduce for objects.
   *
   * @param {Object} object
   *        The Object that you want to reduce.
   *
   * @param {Function} fn
   *         A callback function which is called for each key in the object. It
   *         receives the accumulated value and the per-iteration value and key
   *         as arguments.
   *
   * @param {Mixed} [initial = 0]
   *        Starting value
   *
   * @return {Mixed}
   *         The final accumulated value.
   */
  function reduce(object, fn) {
    var initial = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    return keys(object).reduce(function (accum, key) {
      return fn(accum, object[key], key);
    }, initial);
  }

  /**
   * Object.assign-style object shallow merge/extend.
   *
   * @param  {Object} target
   * @param  {Object} ...sources
   * @return {Object}
   */
  function assign(target) {
    for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      sources[_key - 1] = arguments[_key];
    }

    if (Object.assign) {
      return Object.assign.apply(Object, [target].concat(sources));
    }

    sources.forEach(function (source) {
      if (!source) {
        return;
      }

      each(source, function (value, key) {
        target[key] = value;
      });
    });

    return target;
  }

  /**
   * Returns whether a value is an object of any kind - including DOM nodes,
   * arrays, regular expressions, etc. Not functions, though.
   *
   * This avoids the gotcha where using `typeof` on a `null` value
   * results in `'object'`.
   *
   * @param  {Object} value
   * @return {Boolean}
   */
  function isObject(value) {
    return !!value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object';
  }

  /**
   * Returns whether an object appears to be a "plain" object - that is, a
   * direct instance of `Object`.
   *
   * @param  {Object} value
   * @return {Boolean}
   */
  function isPlain(value) {
    return isObject(value) && toString.call(value) === '[object Object]' && value.constructor === Object;
  }

  /**
   * @file log.js
   * @module log
   */
  var log = void 0;

// This is the private tracking variable for logging level.
  var level = 'all';

// This is the private tracking variable for the logging history.
  var history = [];

  /**
   * Log messages to the console and history based on the type of message
   *
   * @private
   * @param  {string} type
   *         The name of the console method to use.
   *
   * @param  {Array} args
   *         The arguments to be passed to the matching console method.
   *
   * @param  {boolean} [stringify]
   *         By default, only old IEs should get console argument stringification,
   *         but this is exposed as a parameter to facilitate testing.
   */
  var logByType = function logByType(type, args) {
    var stringify = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !!IE_VERSION && IE_VERSION < 11;

    var lvl = log.levels[level];
    var lvlRegExp = new RegExp('^(' + lvl + ')$');

    if (type !== 'log') {

      // Add the type to the front of the message when it's not "log".
      args.unshift(type.toUpperCase() + ':');
    }

    // Add a clone of the args at this point to history.
    if (history) {
      history.push([].concat(args));
    }

    // Add console prefix after adding to history.
    args.unshift('VIDEOJS:');

    // If there's no console then don't try to output messages, but they will
    // still be stored in history.
    //
    // Was setting these once outside of this function, but containing them
    // in the function makes it easier to test cases where console doesn't exist
    // when the module is executed.
    var fn = window_1.console && window_1.console[type];

    // Bail out if there's no console or if this type is not allowed by the
    // current logging level.
    if (!fn || !lvl || !lvlRegExp.test(type)) {
      return;
    }

    // IEs previous to 11 log objects uselessly as "[object Object]"; so, JSONify
    // objects and arrays for those less-capable browsers.
    if (stringify) {
      args = args.map(function (a) {
        if (isObject(a) || Array.isArray(a)) {
          try {
            return JSON.stringify(a);
          } catch (x) {
            return String(a);
          }
        }

        // Cast to string before joining, so we get null and undefined explicitly
        // included in output (as we would in a modern console).
        return String(a);
      }).join(' ');
    }

    // Old IE versions do not allow .apply() for console methods (they are
    // reported as objects rather than functions).
    if (!fn.apply) {
      fn(args);
    } else {
      fn[Array.isArray(args) ? 'apply' : 'call'](window_1.console, args);
    }
  };

  /**
   * Logs plain debug messages. Similar to `console.log`.
   *
   * @class
   * @param    {Mixed[]} args
   *           One or more messages or objects that should be logged.
   */
  log = function log() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    logByType('log', args);
  };

  /**
   * Enumeration of available logging levels, where the keys are the level names
   * and the values are `|`-separated strings containing logging methods allowed
   * in that logging level. These strings are used to create a regular expression
   * matching the function name being called.
   *
   * Levels provided by video.js are:
   *
   * - `off`: Matches no calls. Any value that can be cast to `false` will have
   *   this effect. The most restrictive.
   * - `all` (default): Matches only Video.js-provided functions (`log`,
   *   `log.warn`, and `log.error`).
   * - `warn`: Matches `log.warn` and `log.error` calls.
   * - `error`: Matches only `log.error` calls.
   *
   * @type {Object}
   */
  log.levels = {
    all: 'log|warn|error',
    error: 'error',
    off: '',
    warn: 'warn|error',
    DEFAULT: level
  };

  /**
   * Get or set the current logging level. If a string matching a key from
   * {@link log.levels} is provided, acts as a setter. Regardless of argument,
   * returns the current logging level.
   *
   * @param  {string} [lvl]
   *         Pass to set a new logging level.
   *
   * @return {string}
   *         The current logging level.
   */
  log.level = function (lvl) {
    if (typeof lvl === 'string') {
      if (!log.levels.hasOwnProperty(lvl)) {
        throw new Error('"' + lvl + '" in not a valid log level');
      }
      level = lvl;
    }
    return level;
  };

  /**
   * Returns an array containing everything that has been logged to the history.
   *
   * This array is a shallow clone of the internal history record. However, its
   * contents are _not_ cloned; so, mutating objects inside this array will
   * mutate them in history.
   *
   * @return {Array}
   */
  log.history = function () {
    return history ? [].concat(history) : [];
  };

  /**
   * Clears the internal history tracking, but does not prevent further history
   * tracking.
   */
  log.history.clear = function () {
    if (history) {
      history.length = 0;
    }
  };

  /**
   * Disable history tracking if it is currently enabled.
   */
  log.history.disable = function () {
    if (history !== null) {
      history.length = 0;
      history = null;
    }
  };

  /**
   * Enable history tracking if it is currently disabled.
   */
  log.history.enable = function () {
    if (history === null) {
      history = [];
    }
  };

  /**
   * Logs error messages. Similar to `console.error`.
   *
   * @param {Mixed[]} args
   *        One or more messages or objects that should be logged as an error
   */
  log.error = function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return logByType('error', args);
  };

  /**
   * Logs warning messages. Similar to `console.warn`.
   *
   * @param {Mixed[]} args
   *        One or more messages or objects that should be logged as a warning.
   */
  log.warn = function () {
    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return logByType('warn', args);
  };

  var log$1 = log;

  function clean (s) {
    return s.replace(/\n\r?\s*/g, '')
  }


  var tsml = function tsml (sa) {
    var s = ''
      , i = 0;

    for (; i < arguments.length; i++)
      s += clean(sa[i]) + (arguments[i + 1] || '');

    return s
  };

  /**
   * @file computed-style.js
   * @module computed-style
   */
  /**
   * A safe getComputedStyle with an IE8 fallback.
   *
   * This is needed because in Firefox, if the player is loaded in an iframe with
   * `display:none`, then `getComputedStyle` returns `null`, so, we do a null-check to
   * make sure  that the player doesn't break in these cases.
   *
   * @param {Element} el
   *        The element you want the computed style of
   *
   * @param {string} prop
   *        The property name you want
   *
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=548397
   *
   * @static
   * @const
   */
  function computedStyle(el, prop) {
    if (!el || !prop) {
      return '';
    }

    if (typeof window_1.getComputedStyle === 'function') {
      var cs = window_1.getComputedStyle(el);

      return cs ? cs[prop] : '';
    }

    return el.currentStyle[prop] || '';
  }

  var _templateObject = taggedTemplateLiteralLoose(['Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ', ' to ', '.'], ['Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ', ' to ', '.']);

  /**
   * @file dom.js
   * @module dom
   */
  /**
   * Detect if a value is a string with any non-whitespace characters.
   *
   * @param {string} str
   *        The string to check
   *
   * @return {boolean}
   *         - True if the string is non-blank
   *         - False otherwise
   *
   */
  function isNonBlankString(str) {
    return typeof str === 'string' && /\S/.test(str);
  }

  /**
   * Throws an error if the passed string has whitespace. This is used by
   * class methods to be relatively consistent with the classList API.
   *
   * @param {string} str
   *         The string to check for whitespace.
   *
   * @throws {Error}
   *         Throws an error if there is whitespace in the string.
   *
   */
  function throwIfWhitespace(str) {
    if (/\s/.test(str)) {
      throw new Error('class has illegal whitespace characters');
    }
  }

  /**
   * Produce a regular expression for matching a className within an elements className.
   *
   * @param {string} className
   *         The className to generate the RegExp for.
   *
   * @return {RegExp}
   *         The RegExp that will check for a specific `className` in an elements
   *         className.
   */
  function classRegExp(className) {
    return new RegExp('(^|\\s)' + className + '($|\\s)');
  }

  /**
   * Whether the current DOM interface appears to be real.
   *
   * @return {Boolean}
   */
  function isReal() {
    return (

      // Both document and window will never be undefined thanks to `global`.
      document_1 === window_1.document &&

      // In IE < 9, DOM methods return "object" as their type, so all we can
      // confidently check is that it exists.
      typeof document_1.createElement !== 'undefined'
    );
  }

  /**
   * Determines, via duck typing, whether or not a value is a DOM element.
   *
   * @param {Mixed} value
   *        The thing to check
   *
   * @return {boolean}
   *         - True if it is a DOM element
   *         - False otherwise
   */
  function isEl(value) {
    return isObject(value) && value.nodeType === 1;
  }

  /**
   * Determines if the current DOM is embedded in an iframe.
   *
   * @return {boolean}
   *
   */
  function isInFrame() {

    // We need a try/catch here because Safari will throw errors when attempting
    // to get either `parent` or `self`
    try {
      return window_1.parent !== window_1.self;
    } catch (x) {
      return true;
    }
  }

  /**
   * Creates functions to query the DOM using a given method.
   *
   * @param {string} method
   *         The method to create the query with.
   *
   * @return {Function}
   *         The query method
   */
  function createQuerier(method) {
    return function (selector, context) {
      if (!isNonBlankString(selector)) {
        return document_1[method](null);
      }
      if (isNonBlankString(context)) {
        context = document_1.querySelector(context);
      }

      var ctx = isEl(context) ? context : document_1;

      return ctx[method] && ctx[method](selector);
    };
  }

  /**
   * Creates an element and applies properties.
   *
   * @param {string} [tagName='div']
   *         Name of tag to be created.
   *
   * @param {Object} [properties={}]
   *         Element properties to be applied.
   *
   * @param {Object} [attributes={}]
   *         Element attributes to be applied.
   *
   * @param {String|Element|TextNode|Array|Function} [content]
   *         Contents for the element (see: {@link dom:normalizeContent})
   *
   * @return {Element}
   *         The element that was created.
   */
  function createEl() {
    var tagName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';
    var properties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var content = arguments[3];

    var el = document_1.createElement(tagName);

    Object.getOwnPropertyNames(properties).forEach(function (propName) {
      var val = properties[propName];

      // See #2176
      // We originally were accepting both properties and attributes in the
      // same object, but that doesn't work so well.
      if (propName.indexOf('aria-') !== -1 || propName === 'role' || propName === 'type') {
        log$1.warn(tsml(_templateObject, propName, val));
        el.setAttribute(propName, val);

        // Handle textContent since it's not supported everywhere and we have a
        // method for it.
      } else if (propName === 'textContent') {
        textContent(el, val);
      } else {
        el[propName] = val;
      }
    });

    Object.getOwnPropertyNames(attributes).forEach(function (attrName) {
      el.setAttribute(attrName, attributes[attrName]);
    });

    if (content) {
      appendContent(el, content);
    }

    return el;
  }

  /**
   * Injects text into an element, replacing any existing contents entirely.
   *
   * @param {Element} el
   *        The element to add text content into
   *
   * @param {string} text
   *        The text content to add.
   *
   * @return {Element}
   *         The element with added text content.
   */
  function textContent(el, text) {
    if (typeof el.textContent === 'undefined') {
      el.innerText = text;
    } else {
      el.textContent = text;
    }
    return el;
  }

  /**
   * Insert an element as the first child node of another
   *
   * @param {Element} child
   *        Element to insert
   *
   * @param {Element} parent
   *        Element to insert child into
   */
  function prependTo(child, parent) {
    if (parent.firstChild) {
      parent.insertBefore(child, parent.firstChild);
    } else {
      parent.appendChild(child);
    }
  }

  /**
   * Check if an element has a CSS class
   *
   * @param {Element} element
   *        Element to check
   *
   * @param {string} classToCheck
   *        Class name to check for
   *
   * @return {boolean}
   *         - True if the element had the class
   *         - False otherwise.
   *
   * @throws {Error}
   *         Throws an error if `classToCheck` has white space.
   */
  function hasClass(element, classToCheck) {
    throwIfWhitespace(classToCheck);
    if (element.classList) {
      return element.classList.contains(classToCheck);
    }
    return classRegExp(classToCheck).test(element.className);
  }

  /**
   * Add a CSS class name to an element
   *
   * @param {Element} element
   *        Element to add class name to.
   *
   * @param {string} classToAdd
   *        Class name to add.
   *
   * @return {Element}
   *         The dom element with the added class name.
   */
  function addClass(element, classToAdd) {
    if (element.classList) {
      element.classList.add(classToAdd);

      // Don't need to `throwIfWhitespace` here because `hasElClass` will do it
      // in the case of classList not being supported.
    } else if (!hasClass(element, classToAdd)) {
      element.className = (element.className + ' ' + classToAdd).trim();
    }

    return element;
  }

  /**
   * Remove a CSS class name from an element
   *
   * @param {Element} element
   *        Element to remove a class name from.
   *
   * @param {string} classToRemove
   *        Class name to remove
   *
   * @return {Element}
   *         The dom element with class name removed.
   */
  function removeClass(element, classToRemove) {
    if (element.classList) {
      element.classList.remove(classToRemove);
    } else {
      throwIfWhitespace(classToRemove);
      element.className = element.className.split(/\s+/).filter(function (c) {
        return c !== classToRemove;
      }).join(' ');
    }

    return element;
  }

  /**
   * The callback definition for toggleElClass.
   *
   * @callback Dom~PredicateCallback
   * @param {Element} element
   *        The DOM element of the Component.
   *
   * @param {string} classToToggle
   *        The `className` that wants to be toggled
   *
   * @return {boolean|undefined}
   *         - If true the `classToToggle` will get added to `element`.
   *         - If false the `classToToggle` will get removed from `element`.
   *         - If undefined this callback will be ignored
   */

  /**
   * Adds or removes a CSS class name on an element depending on an optional
   * condition or the presence/absence of the class name.
   *
   * @param {Element} element
   *        The element to toggle a class name on.
   *
   * @param {string} classToToggle
   *        The class that should be toggled
   *
   * @param {boolean|PredicateCallback} [predicate]
   *        See the return value for {@link Dom~PredicateCallback}
   *
   * @return {Element}
   *         The element with a class that has been toggled.
   */
  function toggleClass(element, classToToggle, predicate) {

    // This CANNOT use `classList` internally because IE does not support the
    // second parameter to the `classList.toggle()` method! Which is fine because
    // `classList` will be used by the add/remove functions.
    var has = hasClass(element, classToToggle);

    if (typeof predicate === 'function') {
      predicate = predicate(element, classToToggle);
    }

    if (typeof predicate !== 'boolean') {
      predicate = !has;
    }

    // If the necessary class operation matches the current state of the
    // element, no action is required.
    if (predicate === has) {
      return;
    }

    if (predicate) {
      addClass(element, classToToggle);
    } else {
      removeClass(element, classToToggle);
    }

    return element;
  }

  /**
   * Apply attributes to an HTML element.
   *
   * @param {Element} el
   *        Element to add attributes to.
   *
   * @param {Object} [attributes]
   *        Attributes to be applied.
   */
  function setAttributes(el, attributes) {
    Object.getOwnPropertyNames(attributes).forEach(function (attrName) {
      var attrValue = attributes[attrName];

      if (attrValue === null || typeof attrValue === 'undefined' || attrValue === false) {
        el.removeAttribute(attrName);
      } else {
        el.setAttribute(attrName, attrValue === true ? '' : attrValue);
      }
    });
  }

  /**
   * Get an element's attribute values, as defined on the HTML tag
   * Attributes are not the same as properties. They're defined on the tag
   * or with setAttribute (which shouldn't be used with HTML)
   * This will return true or false for boolean attributes.
   *
   * @param {Element} tag
   *        Element from which to get tag attributes.
   *
   * @return {Object}
   *         All attributes of the element.
   */
  function getAttributes(tag) {
    var obj = {};

    // known boolean attributes
    // we can check for matching boolean properties, but older browsers
    // won't know about HTML5 boolean attributes that we still read from
    var knownBooleans = ',' + 'autoplay,controls,playsinline,loop,muted,default,defaultMuted' + ',';

    if (tag && tag.attributes && tag.attributes.length > 0) {
      var attrs = tag.attributes;

      for (var i = attrs.length - 1; i >= 0; i--) {
        var attrName = attrs[i].name;
        var attrVal = attrs[i].value;

        // check for known booleans
        // the matching element property will return a value for typeof
        if (typeof tag[attrName] === 'boolean' || knownBooleans.indexOf(',' + attrName + ',') !== -1) {
          // the value of an included boolean attribute is typically an empty
          // string ('') which would equal false if we just check for a false value.
          // we also don't want support bad code like autoplay='false'
          attrVal = attrVal !== null ? true : false;
        }

        obj[attrName] = attrVal;
      }
    }

    return obj;
  }

  /**
   * Get the value of an element's attribute
   *
   * @param {Element} el
   *        A DOM element
   *
   * @param {string} attribute
   *        Attribute to get the value of
   *
   * @return {string}
   *         value of the attribute
   */
  function getAttribute(el, attribute) {
    return el.getAttribute(attribute);
  }

  /**
   * Set the value of an element's attribute
   *
   * @param {Element} el
   *        A DOM element
   *
   * @param {string} attribute
   *        Attribute to set
   *
   * @param {string} value
   *        Value to set the attribute to
   */
  function setAttribute(el, attribute, value) {
    el.setAttribute(attribute, value);
  }

  /**
   * Remove an element's attribute
   *
   * @param {Element} el
   *        A DOM element
   *
   * @param {string} attribute
   *        Attribute to remove
   */
  function removeAttribute(el, attribute) {
    el.removeAttribute(attribute);
  }

  /**
   * Attempt to block the ability to select text while dragging controls
   */
  function blockTextSelection() {
    document_1.body.focus();
    document_1.onselectstart = function () {
      return false;
    };
  }

  /**
   * Turn off text selection blocking
   */
  function unblockTextSelection() {
    document_1.onselectstart = function () {
      return true;
    };
  }

  /**
   * Identical to the native `getBoundingClientRect` function, but ensures that
   * the method is supported at all (it is in all browsers we claim to support)
   * and that the element is in the DOM before continuing.
   *
   * This wrapper function also shims properties which are not provided by some
   * older browsers (namely, IE8).
   *
   * Additionally, some browsers do not support adding properties to a
   * `ClientRect`/`DOMRect` object; so, we shallow-copy it with the standard
   * properties (except `x` and `y` which are not widely supported). This helps
   * avoid implementations where keys are non-enumerable.
   *
   * @param  {Element} el
   *         Element whose `ClientRect` we want to calculate.
   *
   * @return {Object|undefined}
   *         Always returns a plain
   */
  function getBoundingClientRect(el) {
    if (el && el.getBoundingClientRect && el.parentNode) {
      var rect = el.getBoundingClientRect();
      var result = {};

      ['bottom', 'height', 'left', 'right', 'top', 'width'].forEach(function (k) {
        if (rect[k] !== undefined) {
          result[k] = rect[k];
        }
      });

      if (!result.height) {
        result.height = parseFloat(computedStyle(el, 'height'));
      }

      if (!result.width) {
        result.width = parseFloat(computedStyle(el, 'width'));
      }

      return result;
    }
  }

  /**
   * The postion of a DOM element on the page.
   *
   * @typedef {Object} module:dom~Position
   *
   * @property {number} left
   *           Pixels to the left
   *
   * @property {number} top
   *           Pixels on top
   */

  /**
   * Offset Left.
   * getBoundingClientRect technique from
   * John Resig
   *
   * @see http://ejohn.org/blog/getboundingclientrect-is-awesome/
   *
   * @param {Element} el
   *        Element from which to get offset
   *
   * @return {module:dom~Position}
   *         The position of the element that was passed in.
   */
  function findPosition(el) {
    var box = void 0;

    if (el.getBoundingClientRect && el.parentNode) {
      box = el.getBoundingClientRect();
    }

    if (!box) {
      return {
        left: 0,
        top: 0
      };
    }

    var docEl = document_1.documentElement;
    var body = document_1.body;

    var clientLeft = docEl.clientLeft || body.clientLeft || 0;
    var scrollLeft = window_1.pageXOffset || body.scrollLeft;
    var left = box.left + scrollLeft - clientLeft;

    var clientTop = docEl.clientTop || body.clientTop || 0;
    var scrollTop = window_1.pageYOffset || body.scrollTop;
    var top = box.top + scrollTop - clientTop;

    // Android sometimes returns slightly off decimal values, so need to round
    return {
      left: Math.round(left),
      top: Math.round(top)
    };
  }

  /**
   * x and y coordinates for a dom element or mouse pointer
   *
   * @typedef {Object} Dom~Coordinates
   *
   * @property {number} x
   *           x coordinate in pixels
   *
   * @property {number} y
   *           y coordinate in pixels
   */

  /**
   * Get pointer position in element
   * Returns an object with x and y coordinates.
   * The base on the coordinates are the bottom left of the element.
   *
   * @param {Element} el
   *        Element on which to get the pointer position on
   *
   * @param {EventTarget~Event} event
   *        Event object
   *
   * @return {Dom~Coordinates}
   *         A Coordinates object corresponding to the mouse position.
   *
   */
  function getPointerPosition(el, event) {
    var position = {};
    var box = findPosition(el);
    var boxW = el.offsetWidth;
    var boxH = el.offsetHeight;

    var boxY = box.top;
    var boxX = box.left;
    var pageY = event.pageY;
    var pageX = event.pageX;

    if (event.changedTouches) {
      pageX = event.changedTouches[0].pageX;
      pageY = event.changedTouches[0].pageY;
    }

    position.y = Math.max(0, Math.min(1, (boxY - pageY + boxH) / boxH));
    position.x = Math.max(0, Math.min(1, (pageX - boxX) / boxW));

    return position;
  }

  /**
   * Determines, via duck typing, whether or not a value is a text node.
   *
   * @param {Mixed} value
   *        Check if this value is a text node.
   *
   * @return {boolean}
   *         - True if it is a text node
   *         - False otherwise
   */
  function isTextNode(value) {
    return isObject(value) && value.nodeType === 3;
  }

  /**
   * Empties the contents of an element.
   *
   * @param {Element} el
   *        The element to empty children from
   *
   * @return {Element}
   *         The element with no children
   */
  function emptyEl(el) {
    while (el.firstChild) {
      el.removeChild(el.firstChild);
    }
    return el;
  }

  /**
   * Normalizes content for eventual insertion into the DOM.
   *
   * This allows a wide range of content definition methods, but protects
   * from falling into the trap of simply writing to `innerHTML`, which is
   * an XSS concern.
   *
   * The content for an element can be passed in multiple types and
   * combinations, whose behavior is as follows:
   *
   * @param {String|Element|TextNode|Array|Function} content
   *        - String: Normalized into a text node.
   *        - Element/TextNode: Passed through.
   *        - Array: A one-dimensional array of strings, elements, nodes, or functions
   *          (which return single strings, elements, or nodes).
   *        - Function: If the sole argument, is expected to produce a string, element,
   *          node, or array as defined above.
   *
   * @return {Array}
   *         All of the content that was passed in normalized.
   */
  function normalizeContent(content) {

    // First, invoke content if it is a function. If it produces an array,
    // that needs to happen before normalization.
    if (typeof content === 'function') {
      content = content();
    }

    // Next up, normalize to an array, so one or many items can be normalized,
    // filtered, and returned.
    return (Array.isArray(content) ? content : [content]).map(function (value) {

      // First, invoke value if it is a function to produce a new value,
      // which will be subsequently normalized to a Node of some kind.
      if (typeof value === 'function') {
        value = value();
      }

      if (isEl(value) || isTextNode(value)) {
        return value;
      }

      if (typeof value === 'string' && /\S/.test(value)) {
        return document_1.createTextNode(value);
      }
    }).filter(function (value) {
      return value;
    });
  }

  /**
   * Normalizes and appends content to an element.
   *
   * @param {Element} el
   *        Element to append normalized content to.
   *
   *
   * @param {String|Element|TextNode|Array|Function} content
   *        See the `content` argument of {@link dom:normalizeContent}
   *
   * @return {Element}
   *         The element with appended normalized content.
   */
  function appendContent(el, content) {
    normalizeContent(content).forEach(function (node) {
      return el.appendChild(node);
    });
    return el;
  }

  /**
   * Normalizes and inserts content into an element; this is identical to
   * `appendContent()`, except it empties the element first.
   *
   * @param {Element} el
   *        Element to insert normalized content into.
   *
   * @param {String|Element|TextNode|Array|Function} content
   *        See the `content` argument of {@link dom:normalizeContent}
   *
   * @return {Element}
   *         The element with inserted normalized content.
   *
   */
  function insertContent(el, content) {
    return appendContent(emptyEl(el), content);
  }

  /**
   * Finds a single DOM element matching `selector` within the optional
   * `context` of another DOM element (defaulting to `document`).
   *
   * @param {string} selector
   *        A valid CSS selector, which will be passed to `querySelector`.
   *
   * @param {Element|String} [context=document]
   *        A DOM element within which to query. Can also be a selector
   *        string in which case the first matching element will be used
   *        as context. If missing (or no element matches selector), falls
   *        back to `document`.
   *
   * @return {Element|null}
   *         The element that was found or null.
   */
  var $ = createQuerier('querySelector');

  /**
   * Finds a all DOM elements matching `selector` within the optional
   * `context` of another DOM element (defaulting to `document`).
   *
   * @param {string} selector
   *           A valid CSS selector, which will be passed to `querySelectorAll`.
   *
   * @param {Element|String} [context=document]
   *           A DOM element within which to query. Can also be a selector
   *           string in which case the first matching element will be used
   *           as context. If missing (or no element matches selector), falls
   *           back to `document`.
   *
   * @return {NodeList}
   *         A element list of elements that were found. Will be empty if none were found.
   *
   */
  var $$ = createQuerier('querySelectorAll');



  var Dom = (Object.freeze || Object)({
    isReal: isReal,
    isEl: isEl,
    isInFrame: isInFrame,
    createEl: createEl,
    textContent: textContent,
    prependTo: prependTo,
    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass,
    toggleClass: toggleClass,
    setAttributes: setAttributes,
    getAttributes: getAttributes,
    getAttribute: getAttribute,
    setAttribute: setAttribute,
    removeAttribute: removeAttribute,
    blockTextSelection: blockTextSelection,
    unblockTextSelection: unblockTextSelection,
    getBoundingClientRect: getBoundingClientRect,
    findPosition: findPosition,
    getPointerPosition: getPointerPosition,
    isTextNode: isTextNode,
    emptyEl: emptyEl,
    normalizeContent: normalizeContent,
    appendContent: appendContent,
    insertContent: insertContent,
    $: $,
    $$: $$
  });

  /**
   * @file guid.js
   * @module guid
   */

  /**
   * Unique ID for an element or function
   * @type {Number}
   */
  var _guid = 1;

  /**
   * Get a unique auto-incrementing ID by number that has not been returned before.
   *
   * @return {number}
   *         A new unique ID.
   */
  function newGUID() {
    return _guid++;
  }

  /**
   * @file dom-data.js
   * @module dom-data
   */
  /**
   * Element Data Store.
   *
   * Allows for binding data to an element without putting it directly on the
   * element. Ex. Event listeners are stored here.
   * (also from jsninja.com, slightly modified and updated for closure compiler)
   *
   * @type {Object}
   * @private
   */
  var elData = {};

  /*
   * Unique attribute name to store an element's guid in
   *
   * @type {String}
   * @constant
   * @private
   */
  var elIdAttr = 'vdata' + new Date().getTime();

  /**
   * Returns the cache object where data for an element is stored
   *
   * @param {Element} el
   *        Element to store data for.
   *
   * @return {Object}
   *         The cache object for that el that was passed in.
   */
  function getData(el) {
    var id = el[elIdAttr];

    if (!id) {
      id = el[elIdAttr] = newGUID();
    }

    if (!elData[id]) {
      elData[id] = {};
    }

    return elData[id];
  }

  /**
   * Returns whether or not an element has cached data
   *
   * @param {Element} el
   *        Check if this element has cached data.
   *
   * @return {boolean}
   *         - True if the DOM element has cached data.
   *         - False otherwise.
   */
  function hasData(el) {
    var id = el[elIdAttr];

    if (!id) {
      return false;
    }

    return !!Object.getOwnPropertyNames(elData[id]).length;
  }

  /**
   * Delete data for the element from the cache and the guid attr from getElementById
   *
   * @param {Element} el
   *        Remove cached data for this element.
   */
  function removeData(el) {
    var id = el[elIdAttr];

    if (!id) {
      return;
    }

    // Remove all stored data
    delete elData[id];

    // Remove the elIdAttr property from the DOM node
    try {
      delete el[elIdAttr];
    } catch (e) {
      if (el.removeAttribute) {
        el.removeAttribute(elIdAttr);
      } else {
        // IE doesn't appear to support removeAttribute on the document element
        el[elIdAttr] = null;
      }
    }
  }

  /**
   * @file events.js. An Event System (John Resig - Secrets of a JS Ninja http://jsninja.com/)
   * (Original book version wasn't completely usable, so fixed some things and made Closure Compiler compatible)
   * This should work very similarly to jQuery's events, however it's based off the book version which isn't as
   * robust as jquery's, so there's probably some differences.
   *
   * @module events
   */

  /**
   * Clean up the listener cache and dispatchers
   *
   * @param {Element|Object} elem
   *        Element to clean up
   *
   * @param {string} type
   *        Type of event to clean up
   */
  function _cleanUpEvents(elem, type) {
    var data = getData(elem);

    // Remove the events of a particular type if there are none left
    if (data.handlers[type].length === 0) {
      delete data.handlers[type];
      // data.handlers[type] = null;
      // Setting to null was causing an error with data.handlers

      // Remove the meta-handler from the element
      if (elem.removeEventListener) {
        elem.removeEventListener(type, data.dispatcher, false);
      } else if (elem.detachEvent) {
        elem.detachEvent('on' + type, data.dispatcher);
      }
    }

    // Remove the events object if there are no types left
    if (Object.getOwnPropertyNames(data.handlers).length <= 0) {
      delete data.handlers;
      delete data.dispatcher;
      delete data.disabled;
    }

    // Finally remove the element data if there is no data left
    if (Object.getOwnPropertyNames(data).length === 0) {
      removeData(elem);
    }
  }

  /**
   * Loops through an array of event types and calls the requested method for each type.
   *
   * @param {Function} fn
   *        The event method we want to use.
   *
   * @param {Element|Object} elem
   *        Element or object to bind listeners to
   *
   * @param {string} type
   *        Type of event to bind to.
   *
   * @param {EventTarget~EventListener} callback
   *        Event listener.
   */
  function _handleMultipleEvents(fn, elem, types, callback) {
    types.forEach(function (type) {
      // Call the event method for each one of the types
      fn(elem, type, callback);
    });
  }

  /**
   * Fix a native event to have standard property values
   *
   * @param {Object} event
   *        Event object to fix.
   *
   * @return {Object}
   *         Fixed event object.
   */
  function fixEvent(event) {

    function returnTrue() {
      return true;
    }

    function returnFalse() {
      return false;
    }

    // Test if fixing up is needed
    // Used to check if !event.stopPropagation instead of isPropagationStopped
    // But native events return true for stopPropagation, but don't have
    // other expected methods like isPropagationStopped. Seems to be a problem
    // with the Javascript Ninja code. So we're just overriding all events now.
    if (!event || !event.isPropagationStopped) {
      var old = event || window_1.event;

      event = {};
      // Clone the old object so that we can modify the values event = {};
      // IE8 Doesn't like when you mess with native event properties
      // Firefox returns false for event.hasOwnProperty('type') and other props
      //  which makes copying more difficult.
      // TODO: Probably best to create a whitelist of event props
      for (var key in old) {
        // Safari 6.0.3 warns you if you try to copy deprecated layerX/Y
        // Chrome warns you if you try to copy deprecated keyboardEvent.keyLocation
        // and webkitMovementX/Y
        if (key !== 'layerX' && key !== 'layerY' && key !== 'keyLocation' && key !== 'webkitMovementX' && key !== 'webkitMovementY') {
          // Chrome 32+ warns if you try to copy deprecated returnValue, but
          // we still want to if preventDefault isn't supported (IE8).
          if (!(key === 'returnValue' && old.preventDefault)) {
            event[key] = old[key];
          }
        }
      }

      // The event occurred on this element
      if (!event.target) {
        event.target = event.srcElement || document_1;
      }

      // Handle which other element the event is related to
      if (!event.relatedTarget) {
        event.relatedTarget = event.fromElement === event.target ? event.toElement : event.fromElement;
      }

      // Stop the default browser action
      event.preventDefault = function () {
        if (old.preventDefault) {
          old.preventDefault();
        }
        event.returnValue = false;
        old.returnValue = false;
        event.defaultPrevented = true;
      };

      event.defaultPrevented = false;

      // Stop the event from bubbling
      event.stopPropagation = function () {
        if (old.stopPropagation) {
          old.stopPropagation();
        }
        event.cancelBubble = true;
        old.cancelBubble = true;
        event.isPropagationStopped = returnTrue;
      };

      event.isPropagationStopped = returnFalse;

      // Stop the event from bubbling and executing other handlers
      event.stopImmediatePropagation = function () {
        if (old.stopImmediatePropagation) {
          old.stopImmediatePropagation();
        }
        event.isImmediatePropagationStopped = returnTrue;
        event.stopPropagation();
      };

      event.isImmediatePropagationStopped = returnFalse;

      // Handle mouse position
      if (event.clientX !== null && event.clientX !== undefined) {
        var doc = document_1.documentElement;
        var body = document_1.body;

        event.pageX = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
        event.pageY = event.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
      }

      // Handle key presses
      event.which = event.charCode || event.keyCode;

      // Fix button for mouse clicks:
      // 0 == left; 1 == middle; 2 == right
      if (event.button !== null && event.button !== undefined) {

        // The following is disabled because it does not pass videojs-standard
        // and... yikes.
        /* eslint-disable */
        event.button = event.button & 1 ? 0 : event.button & 4 ? 1 : event.button & 2 ? 2 : 0;
        /* eslint-enable */
      }
    }

    // Returns fixed-up instance
    return event;
  }

  /**
   * Whether passive event listeners are supported
   */
  var _supportsPassive = false;

  (function () {
    try {
      var opts = Object.defineProperty({}, 'passive', {
        get: function get() {
          _supportsPassive = true;
        }
      });

      window_1.addEventListener('test', null, opts);
    } catch (e) {
      // disregard
    }
  })();

  /**
   * Touch events Chrome expects to be passive
   */
  var passiveEvents = ['touchstart', 'touchmove'];

  /**
   * Add an event listener to element
   * It stores the handler function in a separate cache object
   * and adds a generic handler to the element's event,
   * along with a unique id (guid) to the element.
   *
   * @param {Element|Object} elem
   *        Element or object to bind listeners to
   *
   * @param {string|string[]} type
   *        Type of event to bind to.
   *
   * @param {EventTarget~EventListener} fn
   *        Event listener.
   */
  function on(elem, type, fn) {
    if (Array.isArray(type)) {
      return _handleMultipleEvents(on, elem, type, fn);
    }

    var data = getData(elem);

    // We need a place to store all our handler data
    if (!data.handlers) {
      data.handlers = {};
    }

    if (!data.handlers[type]) {
      data.handlers[type] = [];
    }

    if (!fn.guid) {
      fn.guid = newGUID();
    }

    data.handlers[type].push(fn);

    if (!data.dispatcher) {
      data.disabled = false;

      data.dispatcher = function (event, hash) {

        if (data.disabled) {
          return;
        }

        event = fixEvent(event);

        var handlers = data.handlers[event.type];

        if (handlers) {
          // Copy handlers so if handlers are added/removed during the process it doesn't throw everything off.
          var handlersCopy = handlers.slice(0);

          for (var m = 0, n = handlersCopy.length; m < n; m++) {
            if (event.isImmediatePropagationStopped()) {
              break;
            } else {
              try {
                handlersCopy[m].call(elem, event, hash);
              } catch (e) {
                log$1.error(e);
              }
            }
          }
        }
      };
    }

    if (data.handlers[type].length === 1) {
      if (elem.addEventListener) {
        var options = false;

        if (_supportsPassive && passiveEvents.indexOf(type) > -1) {
          options = { passive: true };
        }
        elem.addEventListener(type, data.dispatcher, options);
      } else if (elem.attachEvent) {
        elem.attachEvent('on' + type, data.dispatcher);
      }
    }
  }

  /**
   * Removes event listeners from an element
   *
   * @param {Element|Object} elem
   *        Object to remove listeners from.
   *
   * @param {string|string[]} [type]
   *        Type of listener to remove. Don't include to remove all events from element.
   *
   * @param {EventTarget~EventListener} [fn]
   *        Specific listener to remove. Don't include to remove listeners for an event
   *        type.
   */
  function off(elem, type, fn) {
    // Don't want to add a cache object through getElData if not needed
    if (!hasData(elem)) {
      return;
    }

    var data = getData(elem);

    // If no events exist, nothing to unbind
    if (!data.handlers) {
      return;
    }

    if (Array.isArray(type)) {
      return _handleMultipleEvents(off, elem, type, fn);
    }

    // Utility function
    var removeType = function removeType(t) {
      data.handlers[t] = [];
      _cleanUpEvents(elem, t);
    };

    // Are we removing all bound events?
    if (type === undefined) {
      for (var t in data.handlers) {
        if (Object.prototype.hasOwnProperty.call(data.handlers || {}, t)) {
          removeType(t);
        }
      }
      return;
    }

    var handlers = data.handlers[type];

    // If no handlers exist, nothing to unbind
    if (!handlers) {
      return;
    }

    // If no listener was provided, remove all listeners for type
    if (!fn) {
      removeType(type);
      return;
    }

    // We're only removing a single handler
    if (fn.guid) {
      for (var n = 0; n < handlers.length; n++) {
        if (handlers[n].guid === fn.guid) {
          handlers.splice(n--, 1);
        }
      }
    }

    _cleanUpEvents(elem, type);
  }

  /**
   * Trigger an event for an element
   *
   * @param {Element|Object} elem
   *        Element to trigger an event on
   *
   * @param {EventTarget~Event|string} event
   *        A string (the type) or an event object with a type attribute
   *
   * @param {Object} [hash]
   *        data hash to pass along with the event
   *
   * @return {boolean|undefined}
   *         - Returns the opposite of `defaultPrevented` if default was prevented
   *         - Otherwise returns undefined
   */
  function trigger(elem, event, hash) {
    // Fetches element data and a reference to the parent (for bubbling).
    // Don't want to add a data object to cache for every parent,
    // so checking hasElData first.
    var elemData = hasData(elem) ? getData(elem) : {};
    var parent = elem.parentNode || elem.ownerDocument;
    // type = event.type || event,
    // handler;

    // If an event name was passed as a string, creates an event out of it
    if (typeof event === 'string') {
      event = { type: event, target: elem };
    }
    // Normalizes the event properties.
    event = fixEvent(event);

    // If the passed element has a dispatcher, executes the established handlers.
    if (elemData.dispatcher) {
      elemData.dispatcher.call(elem, event, hash);
    }

    // Unless explicitly stopped or the event does not bubble (e.g. media events)
    // recursively calls this function to bubble the event up the DOM.
    if (parent && !event.isPropagationStopped() && event.bubbles === true) {
      trigger.call(null, parent, event, hash);

      // If at the top of the DOM, triggers the default action unless disabled.
    } else if (!parent && !event.defaultPrevented) {
      var targetData = getData(event.target);

      // Checks if the target has a default action for this event.
      if (event.target[event.type]) {
        // Temporarily disables event dispatching on the target as we have already executed the handler.
        targetData.disabled = true;
        // Executes the default action.
        if (typeof event.target[event.type] === 'function') {
          event.target[event.type]();
        }
        // Re-enables event dispatching.
        targetData.disabled = false;
      }
    }

    // Inform the triggerer if the default was prevented by returning false
    return !event.defaultPrevented;
  }

  /**
   * Trigger a listener only once for an event
   *
   * @param {Element|Object} elem
   *        Element or object to bind to.
   *
   * @param {string|string[]} type
   *        Name/type of event
   *
   * @param {Event~EventListener} fn
   *        Event Listener function
   */
  function one(elem, type, fn) {
    if (Array.isArray(type)) {
      return _handleMultipleEvents(one, elem, type, fn);
    }
    var func = function func() {
      off(elem, type, func);
      fn.apply(this, arguments);
    };

    // copy the guid to the new function so it can removed using the original function's ID
    func.guid = fn.guid = fn.guid || newGUID();
    on(elem, type, func);
  }

  var Events = (Object.freeze || Object)({
    fixEvent: fixEvent,
    on: on,
    off: off,
    trigger: trigger,
    one: one
  });

  /**
   * @file setup.js - Functions for setting up a player without
   * user interaction based on the data-setup `attribute` of the video tag.
   *
   * @module setup
   */
  var _windowLoaded = false;
  var videojs$2 = void 0;

  /**
   * Set up any tags that have a data-setup `attribute` when the player is started.
   */
  var autoSetup = function autoSetup() {

    // Protect against breakage in non-browser environments.
    if (!isReal()) {
      return;
    }

    // One day, when we stop supporting IE8, go back to this, but in the meantime...*hack hack hack*
    // var vids = Array.prototype.slice.call(document.getElementsByTagName('video'));
    // var audios = Array.prototype.slice.call(document.getElementsByTagName('audio'));
    // var mediaEls = vids.concat(audios);

    // Because IE8 doesn't support calling slice on a node list, we need to loop
    // through each list of elements to build up a new, combined list of elements.
    var vids = document_1.getElementsByTagName('video');
    var audios = document_1.getElementsByTagName('audio');
    var mediaEls = [];

    if (vids && vids.length > 0) {
      for (var i = 0, e = vids.length; i < e; i++) {
        mediaEls.push(vids[i]);
      }
    }

    if (audios && audios.length > 0) {
      for (var _i = 0, _e = audios.length; _i < _e; _i++) {
        mediaEls.push(audios[_i]);
      }
    }

    // Check if any media elements exist
    if (mediaEls && mediaEls.length > 0) {

      for (var _i2 = 0, _e2 = mediaEls.length; _i2 < _e2; _i2++) {
        var mediaEl = mediaEls[_i2];

        // Check if element exists, has getAttribute func.
        // IE seems to consider typeof el.getAttribute == 'object' instead of
        // 'function' like expected, at least when loading the player immediately.
        if (mediaEl && mediaEl.getAttribute) {

          // Make sure this player hasn't already been set up.
          if (mediaEl.player === undefined) {
            var options = mediaEl.getAttribute('data-setup');

            // Check if data-setup attr exists.
            // We only auto-setup if they've added the data-setup attr.
            if (options !== null) {
              // Create new video.js instance.
              videojs$2(mediaEl);
            }
          }

          // If getAttribute isn't defined, we need to wait for the DOM.
        } else {
          autoSetupTimeout(1);
          break;
        }
      }

      // No videos were found, so keep looping unless page is finished loading.
    } else if (!_windowLoaded) {
      autoSetupTimeout(1);
    }
  };

  /**
   * Wait until the page is loaded before running autoSetup. This will be called in
   * autoSetup if `hasLoaded` returns false.
   *
   * @param {number} wait
   *        How long to wait in ms
   *
   * @param {module:videojs} [vjs]
   *        The videojs library function
   */
  function autoSetupTimeout(wait, vjs) {
    if (vjs) {
      videojs$2 = vjs;
    }

    window_1.setTimeout(autoSetup, wait);
  }

  if (isReal() && document_1.readyState === 'complete') {
    _windowLoaded = true;
  } else {
    /**
     * Listen for the load event on window, and set _windowLoaded to true.
     *
     * @listens load
     */
    one(window_1, 'load', function () {
      _windowLoaded = true;
    });
  }

  /**
   * @file stylesheet.js
   * @module stylesheet
   */
  /**
   * Create a DOM syle element given a className for it.
   *
   * @param {string} className
   *        The className to add to the created style element.
   *
   * @return {Element}
   *         The element that was created.
   */
  var createStyleElement = function createStyleElement(className) {
    var style = document_1.createElement('style');

    style.className = className;

    return style;
  };

  /**
   * Add text to a DOM element.
   *
   * @param {Element} el
   *        The Element to add text content to.
   *
   * @param {string} content
   *        The text to add to the element.
   */
  var setTextContent = function setTextContent(el, content) {
    if (el.styleSheet) {
      el.styleSheet.cssText = content;
    } else {
      el.textContent = content;
    }
  };

  /**
   * @file fn.js
   * @module fn
   */
  /**
   * Bind (a.k.a proxy or Context). A simple method for changing the context of a function
   * It also stores a unique id on the function so it can be easily removed from events.
   *
   * @param {Mixed} context
   *        The object to bind as scope.
   *
   * @param {Function} fn
   *        The function to be bound to a scope.
   *
   * @param {number} [uid]
   *        An optional unique ID for the function to be set
   *
   * @return {Function}
   *         The new function that will be bound into the context given
   */
  var bind = function bind(context, fn, uid) {
    // Make sure the function has a unique ID
    if (!fn.guid) {
      fn.guid = newGUID();
    }

    // Create the new function that changes the context
    var bound = function bound() {
      return fn.apply(context, arguments);
    };

    // Allow for the ability to individualize this function
    // Needed in the case where multiple objects might share the same prototype
    // IF both items add an event listener with the same function, then you try to remove just one
    // it will remove both because they both have the same guid.
    // when using this, you need to use the bind method when you remove the listener as well.
    // currently used in text tracks
    bound.guid = uid ? uid + '_' + fn.guid : fn.guid;

    return bound;
  };

  /**
   * Wraps the given function, `fn`, with a new function that only invokes `fn`
   * at most once per every `wait` milliseconds.
   *
   * @param  {Function} fn
   *         The function to be throttled.
   *
   * @param  {Number}   wait
   *         The number of milliseconds by which to throttle.
   *
   * @return {Function}
   */
  var throttle = function throttle(fn, wait) {
    var last = Date.now();

    var throttled = function throttled() {
      var now = Date.now();

      if (now - last >= wait) {
        fn.apply(undefined, arguments);
        last = now;
      }
    };

    return throttled;
  };

  /**
   * @file src/js/event-target.js
   */
  /**
   * `EventTarget` is a class that can have the same API as the DOM `EventTarget`. It
   * adds shorthand functions that wrap around lengthy functions. For example:
   * the `on` function is a wrapper around `addEventListener`.
   *
   * @see [EventTarget Spec]{@link https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-EventTarget}
   * @class EventTarget
   */
  var EventTarget = function EventTarget() {};

  /**
   * A Custom DOM event.
   *
   * @typedef {Object} EventTarget~Event
   * @see [Properties]{@link https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent}
   */

  /**
   * All event listeners should follow the following format.
   *
   * @callback EventTarget~EventListener
   * @this {EventTarget}
   *
   * @param {EventTarget~Event} event
   *        the event that triggered this function
   *
   * @param {Object} [hash]
   *        hash of data sent during the event
   */

  /**
   * An object containing event names as keys and booleans as values.
   *
   * > NOTE: If an event name is set to a true value here {@link EventTarget#trigger}
   *         will have extra functionality. See that function for more information.
   *
   * @property EventTarget.prototype.allowedEvents_
   * @private
   */
  EventTarget.prototype.allowedEvents_ = {};

  /**
   * Adds an `event listener` to an instance of an `EventTarget`. An `event listener` is a
   * function that will get called when an event with a certain name gets triggered.
   *
   * @param {string|string[]} type
   *        An event name or an array of event names.
   *
   * @param {EventTarget~EventListener} fn
   *        The function to call with `EventTarget`s
   */
  EventTarget.prototype.on = function (type, fn) {
    // Remove the addEventListener alias before calling Events.on
    // so we don't get into an infinite type loop
    var ael = this.addEventListener;

    this.addEventListener = function () {};
    on(this, type, fn);
    this.addEventListener = ael;
  };

  /**
   * An alias of {@link EventTarget#on}. Allows `EventTarget` to mimic
   * the standard DOM API.
   *
   * @function
   * @see {@link EventTarget#on}
   */
  EventTarget.prototype.addEventListener = EventTarget.prototype.on;

  /**
   * Removes an `event listener` for a specific event from an instance of `EventTarget`.
   * This makes it so that the `event listener` will no longer get called when the
   * named event happens.
   *
   * @param {string|string[]} type
   *        An event name or an array of event names.
   *
   * @param {EventTarget~EventListener} fn
   *        The function to remove.
   */
  EventTarget.prototype.off = function (type, fn) {
    off(this, type, fn);
  };

  /**
   * An alias of {@link EventTarget#off}. Allows `EventTarget` to mimic
   * the standard DOM API.
   *
   * @function
   * @see {@link EventTarget#off}
   */
  EventTarget.prototype.removeEventListener = EventTarget.prototype.off;

  /**
   * This function will add an `event listener` that gets triggered only once. After the
   * first trigger it will get removed. This is like adding an `event listener`
   * with {@link EventTarget#on} that calls {@link EventTarget#off} on itself.
   *
   * @param {string|string[]} type
   *        An event name or an array of event names.
   *
   * @param {EventTarget~EventListener} fn
   *        The function to be called once for each event name.
   */
  EventTarget.prototype.one = function (type, fn) {
    // Remove the addEventListener alialing Events.on
    // so we don't get into an infinite type loop
    var ael = this.addEventListener;

    this.addEventListener = function () {};
    one(this, type, fn);
    this.addEventListener = ael;
  };

  /**
   * This function causes an event to happen. This will then cause any `event listeners`
   * that are waiting for that event, to get called. If there are no `event listeners`
   * for an event then nothing will happen.
   *
   * If the name of the `Event` that is being triggered is in `EventTarget.allowedEvents_`.
   * Trigger will also call the `on` + `uppercaseEventName` function.
   *
   * Example:
   * 'click' is in `EventTarget.allowedEvents_`, so, trigger will attempt to call
   * `onClick` if it exists.
   *
   * @param {string|EventTarget~Event|Object} event
   *        The name of the event, an `Event`, or an object with a key of type set to
   *        an event name.
   */
  EventTarget.prototype.trigger = function (event) {
    var type = event.type || event;

    if (typeof event === 'string') {
      event = { type: type };
    }
    event = fixEvent(event);

    if (this.allowedEvents_[type] && this['on' + type]) {
      this['on' + type](event);
    }

    trigger(this, event);
  };

  /**
   * An alias of {@link EventTarget#trigger}. Allows `EventTarget` to mimic
   * the standard DOM API.
   *
   * @function
   * @see {@link EventTarget#trigger}
   */
  EventTarget.prototype.dispatchEvent = EventTarget.prototype.trigger;

  /**
   * @file mixins/evented.js
   * @module evented
   */
  /**
   * Returns whether or not an object has had the evented mixin applied.
   *
   * @param  {Object} object
   *         An object to test.
   *
   * @return {boolean}
   *         Whether or not the object appears to be evented.
   */
  var isEvented = function isEvented(object) {
    return object instanceof EventTarget || !!object.eventBusEl_ && ['on', 'one', 'off', 'trigger'].every(function (k) {
        return typeof object[k] === 'function';
      });
  };

  /**
   * Whether a value is a valid event type - non-empty string or array.
   *
   * @private
   * @param  {string|Array} type
   *         The type value to test.
   *
   * @return {boolean}
   *         Whether or not the type is a valid event type.
   */
  var isValidEventType = function isValidEventType(type) {
    return (
      // The regex here verifies that the `type` contains at least one non-
      // whitespace character.
      typeof type === 'string' && /\S/.test(type) || Array.isArray(type) && !!type.length
    );
  };

  /**
   * Validates a value to determine if it is a valid event target. Throws if not.
   *
   * @private
   * @throws {Error}
   *         If the target does not appear to be a valid event target.
   *
   * @param  {Object} target
   *         The object to test.
   */
  var validateTarget = function validateTarget(target) {
    if (!target.nodeName && !isEvented(target)) {
      throw new Error('Invalid target; must be a DOM node or evented object.');
    }
  };

  /**
   * Validates a value to determine if it is a valid event target. Throws if not.
   *
   * @private
   * @throws {Error}
   *         If the type does not appear to be a valid event type.
   *
   * @param  {string|Array} type
   *         The type to test.
   */
  var validateEventType = function validateEventType(type) {
    if (!isValidEventType(type)) {
      throw new Error('Invalid event type; must be a non-empty string or array.');
    }
  };

  /**
   * Validates a value to determine if it is a valid listener. Throws if not.
   *
   * @private
   * @throws {Error}
   *         If the listener is not a function.
   *
   * @param  {Function} listener
   *         The listener to test.
   */
  var validateListener = function validateListener(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Invalid listener; must be a function.');
    }
  };

  /**
   * Takes an array of arguments given to `on()` or `one()`, validates them, and
   * normalizes them into an object.
   *
   * @private
   * @param  {Object} self
   *         The evented object on which `on()` or `one()` was called. This
   *         object will be bound as the `this` value for the listener.
   *
   * @param  {Array} args
   *         An array of arguments passed to `on()` or `one()`.
   *
   * @return {Object}
   *         An object containing useful values for `on()` or `one()` calls.
   */
  var normalizeListenArgs = function normalizeListenArgs(self, args) {

    // If the number of arguments is less than 3, the target is always the
    // evented object itself.
    var isTargetingSelf = args.length < 3 || args[0] === self || args[0] === self.eventBusEl_;
    var target = void 0;
    var type = void 0;
    var listener = void 0;

    if (isTargetingSelf) {
      target = self.eventBusEl_;

      // Deal with cases where we got 3 arguments, but we are still listening to
      // the evented object itself.
      if (args.length >= 3) {
        args.shift();
      }

      type = args[0];
      listener = args[1];
    } else {
      target = args[0];
      type = args[1];
      listener = args[2];
    }

    validateTarget(target);
    validateEventType(type);
    validateListener(listener);

    listener = bind(self, listener);

    return { isTargetingSelf: isTargetingSelf, target: target, type: type, listener: listener };
  };

  /**
   * Adds the listener to the event type(s) on the target, normalizing for
   * the type of target.
   *
   * @private
   * @param  {Element|Object} target
   *         A DOM node or evented object.
   *
   * @param  {string} method
   *         The event binding method to use ("on" or "one").
   *
   * @param  {string|Array} type
   *         One or more event type(s).
   *
   * @param  {Function} listener
   *         A listener function.
   */
  var listen = function listen(target, method, type, listener) {
    validateTarget(target);

    if (target.nodeName) {
      Events[method](target, type, listener);
    } else {
      target[method](type, listener);
    }
  };

  /**
   * Contains methods that provide event capabilites to an object which is passed
   * to {@link module:evented|evented}.
   *
   * @mixin EventedMixin
   */
  var EventedMixin = {

    /**
     * Add a listener to an event (or events) on this object or another evented
     * object.
     *
     * @param  {string|Array|Element|Object} targetOrType
     *         If this is a string or array, it represents the event type(s)
     *         that will trigger the listener.
     *
     *         Another evented object can be passed here instead, which will
     *         cause the listener to listen for events on _that_ object.
     *
     *         In either case, the listener's `this` value will be bound to
     *         this object.
     *
     * @param  {string|Array|Function} typeOrListener
     *         If the first argument was a string or array, this should be the
     *         listener function. Otherwise, this is a string or array of event
     *         type(s).
     *
     * @param  {Function} [listener]
     *         If the first argument was another evented object, this will be
     *         the listener function.
     */
    on: function on$$1() {
      var _this = this;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var _normalizeListenArgs = normalizeListenArgs(this, args),
        isTargetingSelf = _normalizeListenArgs.isTargetingSelf,
        target = _normalizeListenArgs.target,
        type = _normalizeListenArgs.type,
        listener = _normalizeListenArgs.listener;

      listen(target, 'on', type, listener);

      // If this object is listening to another evented object.
      if (!isTargetingSelf) {

        // If this object is disposed, remove the listener.
        var removeListenerOnDispose = function removeListenerOnDispose() {
          return _this.off(target, type, listener);
        };

        // Use the same function ID as the listener so we can remove it later it
        // using the ID of the original listener.
        removeListenerOnDispose.guid = listener.guid;

        // Add a listener to the target's dispose event as well. This ensures
        // that if the target is disposed BEFORE this object, we remove the
        // removal listener that was just added. Otherwise, we create a memory leak.
        var removeRemoverOnTargetDispose = function removeRemoverOnTargetDispose() {
          return _this.off('dispose', removeListenerOnDispose);
        };

        // Use the same function ID as the listener so we can remove it later
        // it using the ID of the original listener.
        removeRemoverOnTargetDispose.guid = listener.guid;

        listen(this, 'on', 'dispose', removeListenerOnDispose);
        listen(target, 'on', 'dispose', removeRemoverOnTargetDispose);
      }
    },


    /**
     * Add a listener to an event (or events) on this object or another evented
     * object. The listener will only be called once and then removed.
     *
     * @param  {string|Array|Element|Object} targetOrType
     *         If this is a string or array, it represents the event type(s)
     *         that will trigger the listener.
     *
     *         Another evented object can be passed here instead, which will
     *         cause the listener to listen for events on _that_ object.
     *
     *         In either case, the listener's `this` value will be bound to
     *         this object.
     *
     * @param  {string|Array|Function} typeOrListener
     *         If the first argument was a string or array, this should be the
     *         listener function. Otherwise, this is a string or array of event
     *         type(s).
     *
     * @param  {Function} [listener]
     *         If the first argument was another evented object, this will be
     *         the listener function.
     */
    one: function one$$1() {
      var _this2 = this;

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var _normalizeListenArgs2 = normalizeListenArgs(this, args),
        isTargetingSelf = _normalizeListenArgs2.isTargetingSelf,
        target = _normalizeListenArgs2.target,
        type = _normalizeListenArgs2.type,
        listener = _normalizeListenArgs2.listener;

      // Targeting this evented object.


      if (isTargetingSelf) {
        listen(target, 'one', type, listener);

        // Targeting another evented object.
      } else {
        var wrapper = function wrapper() {
          for (var _len3 = arguments.length, largs = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            largs[_key3] = arguments[_key3];
          }

          _this2.off(target, type, wrapper);
          listener.apply(null, largs);
        };

        // Use the same function ID as the listener so we can remove it later
        // it using the ID of the original listener.
        wrapper.guid = listener.guid;
        listen(target, 'one', type, wrapper);
      }
    },


    /**
     * Removes listener(s) from event(s) on an evented object.
     *
     * @param  {string|Array|Element|Object} [targetOrType]
     *         If this is a string or array, it represents the event type(s).
     *
     *         Another evented object can be passed here instead, in which case
     *         ALL 3 arguments are _required_.
     *
     * @param  {string|Array|Function} [typeOrListener]
     *         If the first argument was a string or array, this may be the
     *         listener function. Otherwise, this is a string or array of event
     *         type(s).
     *
     * @param  {Function} [listener]
     *         If the first argument was another evented object, this will be
     *         the listener function; otherwise, _all_ listeners bound to the
     *         event type(s) will be removed.
     */
    off: function off$$1(targetOrType, typeOrListener, listener) {

      // Targeting this evented object.
      if (!targetOrType || isValidEventType(targetOrType)) {
        off(this.eventBusEl_, targetOrType, typeOrListener);

        // Targeting another evented object.
      } else {
        var target = targetOrType;
        var type = typeOrListener;

        // Fail fast and in a meaningful way!
        validateTarget(target);
        validateEventType(type);
        validateListener(listener);

        // Ensure there's at least a guid, even if the function hasn't been used
        listener = bind(this, listener);

        // Remove the dispose listener on this evented object, which was given
        // the same guid as the event listener in on().
        this.off('dispose', listener);

        if (target.nodeName) {
          off(target, type, listener);
          off(target, 'dispose', listener);
        } else if (isEvented(target)) {
          target.off(type, listener);
          target.off('dispose', listener);
        }
      }
    },


    /**
     * Fire an event on this evented object, causing its listeners to be called.
     *
     * @param   {string|Object} event
     *          An event type or an object with a type property.
     *
     * @param   {Object} [hash]
     *          An additional object to pass along to listeners.
     *
     * @returns {boolean}
     *          Whether or not the default behavior was prevented.
     */
    trigger: function trigger$$1(event, hash) {
      return trigger(this.eventBusEl_, event, hash);
    }
  };

  /**
   * Applies {@link module:evented~EventedMixin|EventedMixin} to a target object.
   *
   * @param  {Object} target
   *         The object to which to add event methods.
   *
   * @param  {Object} [options={}]
   *         Options for customizing the mixin behavior.
   *
   * @param  {String} [options.eventBusKey]
   *         By default, adds a `eventBusEl_` DOM element to the target object,
   *         which is used as an event bus. If the target object already has a
   *         DOM element that should be used, pass its key here.
   *
   * @return {Object}
   *         The target object.
   */
  function evented(target) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var eventBusKey = options.eventBusKey;

    // Set or create the eventBusEl_.

    if (eventBusKey) {
      if (!target[eventBusKey].nodeName) {
        throw new Error('The eventBusKey "' + eventBusKey + '" does not refer to an element.');
      }
      target.eventBusEl_ = target[eventBusKey];
    } else {
      target.eventBusEl_ = createEl('span', { className: 'vjs-event-bus' });
    }

    assign(target, EventedMixin);

    // When any evented object is disposed, it removes all its listeners.
    target.on('dispose', function () {
      return target.off();
    });

    return target;
  }

  /**
   * @file mixins/stateful.js
   * @module stateful
   */
  /**
   * Contains methods that provide statefulness to an object which is passed
   * to {@link module:stateful}.
   *
   * @mixin StatefulMixin
   */
  var StatefulMixin = {

    /**
     * A hash containing arbitrary keys and values representing the state of
     * the object.
     *
     * @type {Object}
     */
    state: {},

    /**
     * Set the state of an object by mutating its
     * {@link module:stateful~StatefulMixin.state|state} object in place.
     *
     * @fires   module:stateful~StatefulMixin#statechanged
     * @param   {Object|Function} stateUpdates
     *          A new set of properties to shallow-merge into the plugin state.
     *          Can be a plain object or a function returning a plain object.
     *
     * @returns {Object|undefined}
     *          An object containing changes that occurred. If no changes
     *          occurred, returns `undefined`.
     */
    setState: function setState(stateUpdates) {
      var _this = this;

      // Support providing the `stateUpdates` state as a function.
      if (typeof stateUpdates === 'function') {
        stateUpdates = stateUpdates();
      }

      var changes = void 0;

      each(stateUpdates, function (value, key) {

        // Record the change if the value is different from what's in the
        // current state.
        if (_this.state[key] !== value) {
          changes = changes || {};
          changes[key] = {
            from: _this.state[key],
            to: value
          };
        }

        _this.state[key] = value;
      });

      // Only trigger "statechange" if there were changes AND we have a trigger
      // function. This allows us to not require that the target object be an
      // evented object.
      if (changes && isEvented(this)) {

        /**
         * An event triggered on an object that is both
         * {@link module:stateful|stateful} and {@link module:evented|evented}
         * indicating that its state has changed.
         *
         * @event    module:stateful~StatefulMixin#statechanged
         * @type     {Object}
         * @property {Object} changes
         *           A hash containing the properties that were changed and
         *           the values they were changed `from` and `to`.
         */
        this.trigger({
          changes: changes,
          type: 'statechanged'
        });
      }

      return changes;
    }
  };

  /**
   * Applies {@link module:stateful~StatefulMixin|StatefulMixin} to a target
   * object.
   *
   * If the target object is {@link module:evented|evented} and has a
   * `handleStateChanged` method, that method will be automatically bound to the
   * `statechanged` event on itself.
   *
   * @param   {Object} target
   *          The object to be made stateful.
   *
   * @param   {Object} [defaultState]
   *          A default set of properties to populate the newly-stateful object's
   *          `state` property.
   *
   * @returns {Object}
   *          Returns the `target`.
   */
  function stateful(target, defaultState) {
    assign(target, StatefulMixin);

    // This happens after the mixing-in because we need to replace the `state`
    // added in that step.
    target.state = assign({}, target.state, defaultState);

    // Auto-bind the `handleStateChanged` method of the target object if it exists.
    if (typeof target.handleStateChanged === 'function' && isEvented(target)) {
      target.on('statechanged', target.handleStateChanged);
    }

    return target;
  }

  /**
   * @file to-title-case.js
   * @module to-title-case
   */

  /**
   * Uppercase the first letter of a string.
   *
   * @param {string} string
   *        String to be uppercased
   *
   * @return {string}
   *         The string with an uppercased first letter
   */
  function toTitleCase(string) {
    if (typeof string !== 'string') {
      return string;
    }

    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  /**
   * Compares the TitleCase versions of the two strings for equality.
   *
   * @param {string} str1
   *        The first string to compare
   *
   * @param {string} str2
   *        The second string to compare
   *
   * @return {boolean}
   *         Whether the TitleCase versions of the strings are equal
   */
  function titleCaseEquals(str1, str2) {
    return toTitleCase(str1) === toTitleCase(str2);
  }

  /**
   * @file merge-options.js
   * @module merge-options
   */
  /**
   * Deep-merge one or more options objects, recursively merging **only** plain
   * object properties.
   *
   * @param   {Object[]} sources
   *          One or more objects to merge into a new object.
   *
   * @returns {Object}
   *          A new object that is the merged result of all sources.
   */
  function mergeOptions() {
    var result = {};

    for (var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) {
      sources[_key] = arguments[_key];
    }

    sources.forEach(function (source) {
      if (!source) {
        return;
      }

      each(source, function (value, key) {
        if (!isPlain(value)) {
          result[key] = value;
          return;
        }

        if (!isPlain(result[key])) {
          result[key] = {};
        }

        result[key] = mergeOptions(result[key], value);
      });
    });

    return result;
  }

  /**
   * Player Component - Base class for all UI objects
   *
   * @file component.js
   */
  /**
   * Base class for all UI Components.
   * Components are UI objects which represent both a javascript object and an element
   * in the DOM. They can be children of other components, and can have
   * children themselves.
   *
   * Components can also use methods from {@link EventTarget}
   */

  var Component = function () {

    /**
     * A callback that is called when a component is ready. Does not have any
     * paramters and any callback value will be ignored.
     *
     * @callback Component~ReadyCallback
     * @this Component
     */

    /**
     * Creates an instance of this class.
     *
     * @param {Player} player
     *        The `Player` that this class should be attached to.
     *
     * @param {Object} [options]
     *        The key/value store of player options.
     *
     * @param {Object[]} [options.children]
     *        An array of children objects to intialize this component with. Children objects have
     *        a name property that will be used if more than one component of the same type needs to be
     *        added.
     *
     * @param {Component~ReadyCallback} [ready]
     *        Function that gets called when the `Component` is ready.
     */
    function Component(player, options, ready) {
      classCallCheck(this, Component);


      // The component might be the player itself and we can't pass `this` to super
      if (!player && this.play) {
        this.player_ = player = this; // eslint-disable-line
      } else {
        this.player_ = player;
      }

      // Make a copy of prototype.options_ to protect against overriding defaults
      this.options_ = mergeOptions({}, this.options_);

      // Updated options with supplied options
      options = this.options_ = mergeOptions(this.options_, options);

      // Get ID from options or options element if one is supplied
      this.id_ = options.id || options.el && options.el.id;

      // If there was no ID from the options, generate one
      if (!this.id_) {
        // Don't require the player ID function in the case of mock players
        var id = player && player.id && player.id() || 'no_player';

        this.id_ = id + '_component_' + newGUID();
      }

      this.name_ = options.name || null;

      // Create element if one wasn't provided in options
      if (options.el) {
        this.el_ = options.el;
      } else if (options.createEl !== false) {
        this.el_ = this.createEl();
      }

      // Make this an evented object and use `el_`, if available, as its event bus
      evented(this, { eventBusKey: this.el_ ? 'el_' : null });
      stateful(this, this.constructor.defaultState);

      this.children_ = [];
      this.childIndex_ = {};
      this.childNameIndex_ = {};

      // Add any child components in options
      if (options.initChildren !== false) {
        this.initChildren();
      }

      this.ready(ready);
      // Don't want to trigger ready here or it will before init is actually
      // finished for all children that run this constructor

      if (options.reportTouchActivity !== false) {
        this.enableTouchActivity();
      }
    }

    /**
     * Dispose of the `Component` and all child components.
     *
     * @fires Component#dispose
     */


    Component.prototype.dispose = function dispose() {

      /**
       * Triggered when a `Component` is disposed.
       *
       * @event Component#dispose
       * @type {EventTarget~Event}
       *
       * @property {boolean} [bubbles=false]
       *           set to false so that the close event does not
       *           bubble up
       */
      this.trigger({ type: 'dispose', bubbles: false });

      // Dispose all children.
      if (this.children_) {
        for (var i = this.children_.length - 1; i >= 0; i--) {
          if (this.children_[i].dispose) {
            this.children_[i].dispose();
          }
        }
      }

      // Delete child references
      this.children_ = null;
      this.childIndex_ = null;
      this.childNameIndex_ = null;

      if (this.el_) {
        // Remove element from DOM
        if (this.el_.parentNode) {
          this.el_.parentNode.removeChild(this.el_);
        }

        removeData(this.el_);
        this.el_ = null;
      }
    };

    /**
     * Return the {@link Player} that the `Component` has attached to.
     *
     * @return {Player}
     *         The player that this `Component` has attached to.
     */


    Component.prototype.player = function player() {
      return this.player_;
    };

    /**
     * Deep merge of options objects with new options.
     * > Note: When both `obj` and `options` contain properties whose values are objects.
     *         The two properties get merged using {@link module:mergeOptions}
     *
     * @param {Object} obj
     *        The object that contains new options.
     *
     * @return {Object}
     *         A new object of `this.options_` and `obj` merged together.
     *
     * @deprecated since version 5
     */


    Component.prototype.options = function options(obj) {
      log$1.warn('this.options() has been deprecated and will be moved to the constructor in 6.0');

      if (!obj) {
        return this.options_;
      }

      this.options_ = mergeOptions(this.options_, obj);
      return this.options_;
    };

    /**
     * Get the `Component`s DOM element
     *
     * @return {Element}
     *         The DOM element for this `Component`.
     */


    Component.prototype.el = function el() {
      return this.el_;
    };

    /**
     * Create the `Component`s DOM element.
     *
     * @param {string} [tagName]
     *        Element's DOM node type. e.g. 'div'
     *
     * @param {Object} [properties]
     *        An object of properties that should be set.
     *
     * @param {Object} [attributes]
     *        An object of attributes that should be set.
     *
     * @return {Element}
     *         The element that gets created.
     */


    Component.prototype.createEl = function createEl$$1(tagName, properties, attributes) {
      return createEl(tagName, properties, attributes);
    };

    /**
     * Localize a string given the string in english.
     *
     * If tokens are provided, it'll try and run a simple token replacement on the provided string.
     * The tokens it loooks for look like `{1}` with the index being 1-indexed into the tokens array.
     *
     * If a `defaultValue` is provided, it'll use that over `string`,
     * if a value isn't found in provided language files.
     * This is useful if you want to have a descriptive key for token replacement
     * but have a succinct localized string and not require `en.json` to be included.
     *
     * Currently, it is used for the progress bar timing.
     * ```js
     * {
   *   "progress bar timing: currentTime={1} duration={2}": "{1} of {2}"
   * }
     * ```
     * It is then used like so:
     * ```js
     * this.localize('progress bar timing: currentTime={1} duration{2}',
     *               [this.player_.currentTime(), this.player_.duration()],
     *               '{1} of {2}');
     * ```
     *
     * Which outputs something like: `01:23 of 24:56`.
     *
     *
     * @param {string} string
     *        The string to localize and the key to lookup in the language files.
     * @param {string[]} [tokens]
     *        If the current item has token replacements, provide the tokens here.
     * @param {string} [defaultValue]
     *        Defaults to `string`. Can be a default value to use for token replacement
     *        if the lookup key is needed to be separate.
     *
     * @return {string}
     *         The localized string or if no localization exists the english string.
     */


    Component.prototype.localize = function localize(string, tokens) {
      var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : string;

      var code = this.player_.language && this.player_.language();
      var languages = this.player_.languages && this.player_.languages();
      var language = languages && languages[code];
      var primaryCode = code && code.split('-')[0];
      var primaryLang = languages && languages[primaryCode];

      var localizedString = defaultValue;

      if (language && language[string]) {
        localizedString = language[string];
      } else if (primaryLang && primaryLang[string]) {
        localizedString = primaryLang[string];
      }

      if (tokens) {
        localizedString = localizedString.replace(/\{(\d+)\}/g, function (match, index) {
          var value = tokens[index - 1];
          var ret = value;

          if (typeof value === 'undefined') {
            ret = match;
          }

          return ret;
        });
      }

      return localizedString;
    };

    /**
     * Return the `Component`s DOM element. This is where children get inserted.
     * This will usually be the the same as the element returned in {@link Component#el}.
     *
     * @return {Element}
     *         The content element for this `Component`.
     */


    Component.prototype.contentEl = function contentEl() {
      return this.contentEl_ || this.el_;
    };

    /**
     * Get this `Component`s ID
     *
     * @return {string}
     *         The id of this `Component`
     */


    Component.prototype.id = function id() {
      return this.id_;
    };

    /**
     * Get the `Component`s name. The name gets used to reference the `Component`
     * and is set during registration.
     *
     * @return {string}
     *         The name of this `Component`.
     */


    Component.prototype.name = function name() {
      return this.name_;
    };

    /**
     * Get an array of all child components
     *
     * @return {Array}
     *         The children
     */


    Component.prototype.children = function children() {
      return this.children_;
    };

    /**
     * Returns the child `Component` with the given `id`.
     *
     * @param {string} id
     *        The id of the child `Component` to get.
     *
     * @return {Component|undefined}
     *         The child `Component` with the given `id` or undefined.
     */


    Component.prototype.getChildById = function getChildById(id) {
      return this.childIndex_[id];
    };

    /**
     * Returns the child `Component` with the given `name`.
     *
     * @param {string} name
     *        The name of the child `Component` to get.
     *
     * @return {Component|undefined}
     *         The child `Component` with the given `name` or undefined.
     */


    Component.prototype.getChild = function getChild(name) {
      if (!name) {
        return;
      }

      name = toTitleCase(name);

      return this.childNameIndex_[name];
    };

    /**
     * Add a child `Component` inside the current `Component`.
     *
     *
     * @param {string|Component} child
     *        The name or instance of a child to add.
     *
     * @param {Object} [options={}]
     *        The key/value store of options that will get passed to children of
     *        the child.
     *
     * @param {number} [index=this.children_.length]
     *        The index to attempt to add a child into.
     *
     * @return {Component}
     *         The `Component` that gets added as a child. When using a string the
     *         `Component` will get created by this process.
     */


    Component.prototype.addChild = function addChild(child) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.children_.length;

      var component = void 0;
      var componentName = void 0;

      // If child is a string, create component with options
      if (typeof child === 'string') {
        componentName = toTitleCase(child);

        var componentClassName = options.componentClass || componentName;

        // Set name through options
        options.name = componentName;

        // Create a new object & element for this controls set
        // If there's no .player_, this is a player
        var ComponentClass = Component.getComponent(componentClassName);

        if (!ComponentClass) {
          throw new Error('Component ' + componentClassName + ' does not exist');
        }

        // data stored directly on the videojs object may be
        // misidentified as a component to retain
        // backwards-compatibility with 4.x. check to make sure the
        // component class can be instantiated.
        if (typeof ComponentClass !== 'function') {
          return null;
        }

        component = new ComponentClass(this.player_ || this, options);

        // child is a component instance
      } else {
        component = child;
      }

      this.children_.splice(index, 0, component);

      if (typeof component.id === 'function') {
        this.childIndex_[component.id()] = component;
      }

      // If a name wasn't used to create the component, check if we can use the
      // name function of the component
      componentName = componentName || component.name && toTitleCase(component.name());

      if (componentName) {
        this.childNameIndex_[componentName] = component;
      }

      // Add the UI object's element to the container div (box)
      // Having an element is not required
      if (typeof component.el === 'function' && component.el()) {
        var childNodes = this.contentEl().children;
        var refNode = childNodes[index] || null;

        this.contentEl().insertBefore(component.el(), refNode);
      }

      // Return so it can stored on parent object if desired.
      return component;
    };

    /**
     * Remove a child `Component` from this `Component`s list of children. Also removes
     * the child `Component`s element from this `Component`s element.
     *
     * @param {Component} component
     *        The child `Component` to remove.
     */


    Component.prototype.removeChild = function removeChild(component) {
      if (typeof component === 'string') {
        component = this.getChild(component);
      }

      if (!component || !this.children_) {
        return;
      }

      var childFound = false;

      for (var i = this.children_.length - 1; i >= 0; i--) {
        if (this.children_[i] === component) {
          childFound = true;
          this.children_.splice(i, 1);
          break;
        }
      }

      if (!childFound) {
        return;
      }

      this.childIndex_[component.id()] = null;
      this.childNameIndex_[component.name()] = null;

      var compEl = component.el();

      if (compEl && compEl.parentNode === this.contentEl()) {
        this.contentEl().removeChild(component.el());
      }
    };

    /**
     * Add and initialize default child `Component`s based upon options.
     */


    Component.prototype.initChildren = function initChildren() {
      var _this = this;

      var children = this.options_.children;

      if (children) {
        // `this` is `parent`
        var parentOptions = this.options_;

        var handleAdd = function handleAdd(child) {
          var name = child.name;
          var opts = child.opts;

          // Allow options for children to be set at the parent options
          // e.g. videojs(id, { controlBar: false });
          // instead of videojs(id, { children: { controlBar: false });
          if (parentOptions[name] !== undefined) {
            opts = parentOptions[name];
          }

          // Allow for disabling default components
          // e.g. options['children']['posterImage'] = false
          if (opts === false) {
            return;
          }

          // Allow options to be passed as a simple boolean if no configuration
          // is necessary.
          if (opts === true) {
            opts = {};
          }

          // We also want to pass the original player options
          // to each component as well so they don't need to
          // reach back into the player for options later.
          opts.playerOptions = _this.options_.playerOptions;

          // Create and add the child component.
          // Add a direct reference to the child by name on the parent instance.
          // If two of the same component are used, different names should be supplied
          // for each
          var newChild = _this.addChild(name, opts);

          if (newChild) {
            _this[name] = newChild;
          }
        };

        // Allow for an array of children details to passed in the options
        var workingChildren = void 0;
        var Tech = Component.getComponent('Tech');

        if (Array.isArray(children)) {
          workingChildren = children;
        } else {
          workingChildren = Object.keys(children);
        }

        workingChildren
        // children that are in this.options_ but also in workingChildren  would
        // give us extra children we do not want. So, we want to filter them out.
          .concat(Object.keys(this.options_).filter(function (child) {
            return !workingChildren.some(function (wchild) {
              if (typeof wchild === 'string') {
                return child === wchild;
              }
              return child === wchild.name;
            });
          })).map(function (child) {
          var name = void 0;
          var opts = void 0;

          if (typeof child === 'string') {
            name = child;
            opts = children[name] || _this.options_[name] || {};
          } else {
            name = child.name;
            opts = child;
          }

          return { name: name, opts: opts };
        }).filter(function (child) {
          // we have to make sure that child.name isn't in the techOrder since
          // techs are registerd as Components but can't aren't compatible
          // See https://github.com/videojs/video.js/issues/2772
          var c = Component.getComponent(child.opts.componentClass || toTitleCase(child.name));

          return c && !Tech.isTech(c);
        }).forEach(handleAdd);
      }
    };

    /**
     * Builds the default DOM class name. Should be overriden by sub-components.
     *
     * @return {string}
     *         The DOM class name for this object.
     *
     * @abstract
     */


    Component.prototype.buildCSSClass = function buildCSSClass() {
      // Child classes can include a function that does:
      // return 'CLASS NAME' + this._super();
      return '';
    };

    /**
     * Bind a listener to the component's ready state.
     * Different from event listeners in that if the ready event has already happened
     * it will trigger the function immediately.
     *
     * @return {Component}
     *         Returns itself; method can be chained.
     */


    Component.prototype.ready = function ready(fn) {
      var sync = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!fn) {
        return;
      }

      if (!this.isReady_) {
        this.readyQueue_ = this.readyQueue_ || [];
        this.readyQueue_.push(fn);
        return;
      }

      if (sync) {
        fn.call(this);
      } else {
        // Call the function asynchronously by default for consistency
        this.setTimeout(fn, 1);
      }
    };

    /**
     * Trigger all the ready listeners for this `Component`.
     *
     * @fires Component#ready
     */


    Component.prototype.triggerReady = function triggerReady() {
      this.isReady_ = true;

      // Ensure ready is triggerd asynchronously
      this.setTimeout(function () {
        var readyQueue = this.readyQueue_;

        // Reset Ready Queue
        this.readyQueue_ = [];

        if (readyQueue && readyQueue.length > 0) {
          readyQueue.forEach(function (fn) {
            fn.call(this);
          }, this);
        }

        // Allow for using event listeners also
        /**
         * Triggered when a `Component` is ready.
         *
         * @event Component#ready
         * @type {EventTarget~Event}
         */
        this.trigger('ready');
      }, 1);
    };

/**
 * Find a single DOM element matching a
