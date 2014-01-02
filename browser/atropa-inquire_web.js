;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var atropa = {};

/// <reference path="../docs/vsdoc/OpenLayersAll.js"/>

/*jslint
    indent: 4,
    maxerr: 50,
    white: true,
    browser: true,
    devel: true,
    plusplus: true,
    regexp: true
*/
/*global XPathResult */
// end header

/**
 * Container for all Glorious classes, functions, etc.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @namespace Container for all Glorious classes, functions, etc.
 */
var atropa;
atropa = {};
/**
 * Checks whether this class has been marked as unsupported and throws an 
 *  error if it has.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20130308
 * @param {String} className The name of the class.
 * @param {String} errorMessage Optional. A custom error message. Defaults to
 *  atropa.data[className].error
 */
atropa.supportCheck = function (className, errorMessage) {
    "use strict";
    className = String(className);
    errorMessage = errorMessage || atropa.data[className].error;
    errorMessage = String(errorMessage);
    
    if(atropa.data[className].support === 'unsupported') {
        throw new Error(errorMessage);
    }
};
/**
 * Pushes a requirement check into atropa.data.requirements. The test
 *  tests whether the class is supported in this environment. Sets
 *  atropa.data[className]'s support to unsupported and error to errorMessage
 *  if the requirementFn returns false. The requirement checks will all be run
 *  after the library has loaded.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20130308
 * @param {String} className The name of the class.
 * @param {Function} requirementFn A function to test whether or not the class
 *  is supported in this environment. If supported, returns true otherwise
 *  return false.
 * @param {String} errorMessage The error message to use when this class or its
 *  methods are called in unsupported environments. Defaults to:
 *  'The atropa.' + className + ' class is unsupported in this environment.';
 */
atropa.requires = function (className, requirementFn, errorMessage) {
    "use strict";
    var check = function () {
        var test = false;
        if(typeof className !== 'string') {
            throw new Error('atropa.requires requires the class name to be ' +
                'specified');
        }
        
        if(atropa.data[className] === undefined) {
            atropa.data[className] = {};
            
            if(typeof requirementFn !== 'function') {
                requirementFn = false;
            }
            errorMessage = errorMessage || 'The atropa.' + className +
                    ' class is unsupported in this environment.';
            try {
                test = requirementFn();
            } catch (e) {
                test = false;
            }
            
            atropa.data[className].error = errorMessage;
            
            if(test === false) {
                atropa.data[className].support = 'unsupported';
            }
        }
    };
    
    atropa.data.requirements.push(check);
};
/**
 * Container for gobal data related to the classes and functions.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @namespace Container for gobal data related to the classes and functions.
 */
atropa.data = {};

atropa.data.requirements = [];

atropa.nop = function nop () {
    "use strict";
    return null;
};
module.exports = atropa;


},{}],2:[function(require,module,exports){
var inquire = require('../src/atropa-inquire.js');

try {
    Object.keys(inquire).forEach(
        function (prop) {
            if(!atropa[prop]) {
                atropa[prop] = inquire[prop];
            }
        }
    );
} catch (ignore) {
    atropa = require('../src/atropa-inquire.js');
}

Object.keys(inquire.data).filter(
    function (prop) {
        return prop !== 'requirements';
    }
).forEach(
    function (prop) {
        atropa.data[prop] = inquire.data[prop];
    }
);

},{"../src/atropa-inquire.js":3}],3:[function(require,module,exports){
/**
 * Container for all Glorious classes, functions, etc.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @namespace Container for all Glorious classes, functions, etc.
 */
var atropa = require('atropa-header');
/// <reference path="../docs/vsdoc/OpenLayersAll.js"/>
/*jslint
    indent: 4,
    maxerr: 50,
    white: true,
    browser: true,
    devel: true,
    plusplus: true,
    regexp: true
*/
/*global atropa */
// end header

/**
 * Container for functions that test the state of inputs.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20120909
 * @namespace Container for functions that test the state of inputs.
 */
atropa.inquire = {};
/**
 * Checks whether the input is null.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20120909
 * @param {Mixed} x Any input that may or may not be null.
 * @returns {Boolean} Returns true if x === null.
 */
atropa.inquire.isNull = function (x) {
    "use strict";
    return (x === null);
};
/**
 * Checks whether the input is an object.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20120909
 * @param {Mixed} x Any input that may or may not be an object.
 * @returns {Boolean} Returns true if typeof(x) === 'object'.
 */
atropa.inquire.isObject = function (x) {
    "use strict";
    return (typeof x === 'object');
};
/**
 * Checks whether the input is both an object and not null.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20120909
 * @param {Mixed} x Any input that may or may not be both an
 * object and null.
 * @returns {Boolean} Returns true if x is both an object and
 * not null. (null is an object).
 */
atropa.inquire.isObjectNotNull = function (x) {
    "use strict";
    return atropa.inquire.isObject(x) && (!atropa.inquire.isNull(x));
};
/**
 * Checks an object for the existence of a property
 * regardless of whether the property was inherited
 * or not.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20120909
 * @param {Object} obj An object which may or may not
 * have the property identified by prop.
 * @param {String} prop A string value representing the
 * name of the property.
 * @returns {Boolean} Returns true if obj.prop exists,
 * otherwise returns false.
 */
atropa.inquire.hasProperty = function (obj, prop) {
    "use strict";
    if (atropa.inquire.isObjectNotNull(obj)) {
        return (prop in obj);
    }
    return false;
};
/**
 * Checks whether the input is an empty string.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20130118
 * @param {String} str The string you want to know about
 * @returns {Boolean} Returns true if str is an empty string,
 *  otherwise returns false.
 */
atropa.inquire.isEmptyString = function (str) {
    "use strict";
    var out = false;
    if ('' === str) {
        out = true;
    }
    return out;
};




while(atropa.data.requirements.length > 0) {
    atropa.data.requirements.pop()();
}
module.exports = atropa;

},{"atropa-header":1}]},{},[2])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGthc3RvclxcRGVza3RvcFxcZXhwZXJpbWVudHNcXGF0cm9wYS1jb21wb25lbnRzXFxub2RlX21vZHVsZXNcXGF0cm9wYS1oZWFkZXJcXHNyY1xcYXRyb3BhLWhlYWRlci5qcyIsIkM6XFxVc2Vyc1xca2FzdG9yXFxEZXNrdG9wXFxleHBlcmltZW50c1xcYXRyb3BhLWNvbXBvbmVudHNcXG5vZGVfbW9kdWxlc1xcYXRyb3BhLWlucXVpcmVcXGRldlxcYnJvd3Nlck1haW4uanMiLCJDOlxcVXNlcnNcXGthc3RvclxcRGVza3RvcFxcZXhwZXJpbWVudHNcXGF0cm9wYS1jb21wb25lbnRzXFxub2RlX21vZHVsZXNcXGF0cm9wYS1pbnF1aXJlXFxzcmNcXGF0cm9wYS1pbnF1aXJlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbInZhciBhdHJvcGEgPSB7fTtcclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9kb2NzL3ZzZG9jL09wZW5MYXllcnNBbGwuanNcIi8+XHJcblxyXG4vKmpzbGludFxyXG4gICAgaW5kZW50OiA0LFxyXG4gICAgbWF4ZXJyOiA1MCxcclxuICAgIHdoaXRlOiB0cnVlLFxyXG4gICAgYnJvd3NlcjogdHJ1ZSxcclxuICAgIGRldmVsOiB0cnVlLFxyXG4gICAgcGx1c3BsdXM6IHRydWUsXHJcbiAgICByZWdleHA6IHRydWVcclxuKi9cclxuLypnbG9iYWwgWFBhdGhSZXN1bHQgKi9cclxuLy8gZW5kIGhlYWRlclxyXG5cclxuLyoqXHJcbiAqIENvbnRhaW5lciBmb3IgYWxsIEdsb3Jpb3VzIGNsYXNzZXMsIGZ1bmN0aW9ucywgZXRjLlxyXG4gKiBAYXV0aG9yIDxhIGhyZWY9XCJtYWlsdG86bWF0dGhld2thc3RvckBnbWFpbC5jb21cIj5cclxuICogIE1hdHRoZXcgQ2hyaXN0b3BoZXIgS2FzdG9yLUluYXJlIElJSSA8L2E+PGJyIC8+XHJcbiAqICDimK0gSGlhbCBBdHJvcGEhISDimK1cclxuICogQG5hbWVzcGFjZSBDb250YWluZXIgZm9yIGFsbCBHbG9yaW91cyBjbGFzc2VzLCBmdW5jdGlvbnMsIGV0Yy5cclxuICovXHJcbnZhciBhdHJvcGE7XHJcbmF0cm9wYSA9IHt9O1xyXG4vKipcclxuICogQ2hlY2tzIHdoZXRoZXIgdGhpcyBjbGFzcyBoYXMgYmVlbiBtYXJrZWQgYXMgdW5zdXBwb3J0ZWQgYW5kIHRocm93cyBhbiBcclxuICogIGVycm9yIGlmIGl0IGhhcy5cclxuICogQGF1dGhvciA8YSBocmVmPVwibWFpbHRvOm1hdHRoZXdrYXN0b3JAZ21haWwuY29tXCI+XHJcbiAqICBNYXR0aGV3IENocmlzdG9waGVyIEthc3Rvci1JbmFyZSBJSUkgPC9hPjxiciAvPlxyXG4gKiAg4pitIEhpYWwgQXRyb3BhISEg4pitXHJcbiAqIEB2ZXJzaW9uIDIwMTMwMzA4XHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgVGhlIG5hbWUgb2YgdGhlIGNsYXNzLlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXJyb3JNZXNzYWdlIE9wdGlvbmFsLiBBIGN1c3RvbSBlcnJvciBtZXNzYWdlLiBEZWZhdWx0cyB0b1xyXG4gKiAgYXRyb3BhLmRhdGFbY2xhc3NOYW1lXS5lcnJvclxyXG4gKi9cclxuYXRyb3BhLnN1cHBvcnRDaGVjayA9IGZ1bmN0aW9uIChjbGFzc05hbWUsIGVycm9yTWVzc2FnZSkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICBjbGFzc05hbWUgPSBTdHJpbmcoY2xhc3NOYW1lKTtcclxuICAgIGVycm9yTWVzc2FnZSA9IGVycm9yTWVzc2FnZSB8fCBhdHJvcGEuZGF0YVtjbGFzc05hbWVdLmVycm9yO1xyXG4gICAgZXJyb3JNZXNzYWdlID0gU3RyaW5nKGVycm9yTWVzc2FnZSk7XHJcbiAgICBcclxuICAgIGlmKGF0cm9wYS5kYXRhW2NsYXNzTmFtZV0uc3VwcG9ydCA9PT0gJ3Vuc3VwcG9ydGVkJykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvck1lc3NhZ2UpO1xyXG4gICAgfVxyXG59O1xyXG4vKipcclxuICogUHVzaGVzIGEgcmVxdWlyZW1lbnQgY2hlY2sgaW50byBhdHJvcGEuZGF0YS5yZXF1aXJlbWVudHMuIFRoZSB0ZXN0XHJcbiAqICB0ZXN0cyB3aGV0aGVyIHRoZSBjbGFzcyBpcyBzdXBwb3J0ZWQgaW4gdGhpcyBlbnZpcm9ubWVudC4gU2V0c1xyXG4gKiAgYXRyb3BhLmRhdGFbY2xhc3NOYW1lXSdzIHN1cHBvcnQgdG8gdW5zdXBwb3J0ZWQgYW5kIGVycm9yIHRvIGVycm9yTWVzc2FnZVxyXG4gKiAgaWYgdGhlIHJlcXVpcmVtZW50Rm4gcmV0dXJucyBmYWxzZS4gVGhlIHJlcXVpcmVtZW50IGNoZWNrcyB3aWxsIGFsbCBiZSBydW5cclxuICogIGFmdGVyIHRoZSBsaWJyYXJ5IGhhcyBsb2FkZWQuXHJcbiAqIEBhdXRob3IgPGEgaHJlZj1cIm1haWx0bzptYXR0aGV3a2FzdG9yQGdtYWlsLmNvbVwiPlxyXG4gKiAgTWF0dGhldyBDaHJpc3RvcGhlciBLYXN0b3ItSW5hcmUgSUlJIDwvYT48YnIgLz5cclxuICogIOKYrSBIaWFsIEF0cm9wYSEhIOKYrVxyXG4gKiBAdmVyc2lvbiAyMDEzMDMwOFxyXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIFRoZSBuYW1lIG9mIHRoZSBjbGFzcy5cclxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVxdWlyZW1lbnRGbiBBIGZ1bmN0aW9uIHRvIHRlc3Qgd2hldGhlciBvciBub3QgdGhlIGNsYXNzXHJcbiAqICBpcyBzdXBwb3J0ZWQgaW4gdGhpcyBlbnZpcm9ubWVudC4gSWYgc3VwcG9ydGVkLCByZXR1cm5zIHRydWUgb3RoZXJ3aXNlXHJcbiAqICByZXR1cm4gZmFsc2UuXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBlcnJvck1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UgdG8gdXNlIHdoZW4gdGhpcyBjbGFzcyBvciBpdHNcclxuICogIG1ldGhvZHMgYXJlIGNhbGxlZCBpbiB1bnN1cHBvcnRlZCBlbnZpcm9ubWVudHMuIERlZmF1bHRzIHRvOlxyXG4gKiAgJ1RoZSBhdHJvcGEuJyArIGNsYXNzTmFtZSArICcgY2xhc3MgaXMgdW5zdXBwb3J0ZWQgaW4gdGhpcyBlbnZpcm9ubWVudC4nO1xyXG4gKi9cclxuYXRyb3BhLnJlcXVpcmVzID0gZnVuY3Rpb24gKGNsYXNzTmFtZSwgcmVxdWlyZW1lbnRGbiwgZXJyb3JNZXNzYWdlKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHZhciBjaGVjayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdGVzdCA9IGZhbHNlO1xyXG4gICAgICAgIGlmKHR5cGVvZiBjbGFzc05hbWUgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignYXRyb3BhLnJlcXVpcmVzIHJlcXVpcmVzIHRoZSBjbGFzcyBuYW1lIHRvIGJlICcgK1xyXG4gICAgICAgICAgICAgICAgJ3NwZWNpZmllZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZihhdHJvcGEuZGF0YVtjbGFzc05hbWVdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgYXRyb3BhLmRhdGFbY2xhc3NOYW1lXSA9IHt9O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYodHlwZW9mIHJlcXVpcmVtZW50Rm4gIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVtZW50Rm4gPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSBlcnJvck1lc3NhZ2UgfHwgJ1RoZSBhdHJvcGEuJyArIGNsYXNzTmFtZSArXHJcbiAgICAgICAgICAgICAgICAgICAgJyBjbGFzcyBpcyB1bnN1cHBvcnRlZCBpbiB0aGlzIGVudmlyb25tZW50Lic7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0ZXN0ID0gcmVxdWlyZW1lbnRGbigpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0ZXN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGF0cm9wYS5kYXRhW2NsYXNzTmFtZV0uZXJyb3IgPSBlcnJvck1lc3NhZ2U7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZih0ZXN0ID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgYXRyb3BhLmRhdGFbY2xhc3NOYW1lXS5zdXBwb3J0ID0gJ3Vuc3VwcG9ydGVkJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBcclxuICAgIGF0cm9wYS5kYXRhLnJlcXVpcmVtZW50cy5wdXNoKGNoZWNrKTtcclxufTtcclxuLyoqXHJcbiAqIENvbnRhaW5lciBmb3IgZ29iYWwgZGF0YSByZWxhdGVkIHRvIHRoZSBjbGFzc2VzIGFuZCBmdW5jdGlvbnMuXHJcbiAqIEBhdXRob3IgPGEgaHJlZj1cIm1haWx0bzptYXR0aGV3a2FzdG9yQGdtYWlsLmNvbVwiPlxyXG4gKiAgTWF0dGhldyBDaHJpc3RvcGhlciBLYXN0b3ItSW5hcmUgSUlJIDwvYT48YnIgLz5cclxuICogIOKYrSBIaWFsIEF0cm9wYSEhIOKYrVxyXG4gKiBAbmFtZXNwYWNlIENvbnRhaW5lciBmb3IgZ29iYWwgZGF0YSByZWxhdGVkIHRvIHRoZSBjbGFzc2VzIGFuZCBmdW5jdGlvbnMuXHJcbiAqL1xyXG5hdHJvcGEuZGF0YSA9IHt9O1xyXG5cclxuYXRyb3BhLmRhdGEucmVxdWlyZW1lbnRzID0gW107XHJcblxyXG5hdHJvcGEubm9wID0gZnVuY3Rpb24gbm9wICgpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbn07XHJcbm1vZHVsZS5leHBvcnRzID0gYXRyb3BhO1xyXG5cclxuIiwidmFyIGlucXVpcmUgPSByZXF1aXJlKCcuLi9zcmMvYXRyb3BhLWlucXVpcmUuanMnKTtcclxuXHJcbnRyeSB7XHJcbiAgICBPYmplY3Qua2V5cyhpbnF1aXJlKS5mb3JFYWNoKFxyXG4gICAgICAgIGZ1bmN0aW9uIChwcm9wKSB7XHJcbiAgICAgICAgICAgIGlmKCFhdHJvcGFbcHJvcF0pIHtcclxuICAgICAgICAgICAgICAgIGF0cm9wYVtwcm9wXSA9IGlucXVpcmVbcHJvcF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICApO1xyXG59IGNhdGNoIChpZ25vcmUpIHtcclxuICAgIGF0cm9wYSA9IHJlcXVpcmUoJy4uL3NyYy9hdHJvcGEtaW5xdWlyZS5qcycpO1xyXG59XHJcblxyXG5PYmplY3Qua2V5cyhpbnF1aXJlLmRhdGEpLmZpbHRlcihcclxuICAgIGZ1bmN0aW9uIChwcm9wKSB7XHJcbiAgICAgICAgcmV0dXJuIHByb3AgIT09ICdyZXF1aXJlbWVudHMnO1xyXG4gICAgfVxyXG4pLmZvckVhY2goXHJcbiAgICBmdW5jdGlvbiAocHJvcCkge1xyXG4gICAgICAgIGF0cm9wYS5kYXRhW3Byb3BdID0gaW5xdWlyZS5kYXRhW3Byb3BdO1xyXG4gICAgfVxyXG4pO1xyXG4iLCIvKipcclxuICogQ29udGFpbmVyIGZvciBhbGwgR2xvcmlvdXMgY2xhc3NlcywgZnVuY3Rpb25zLCBldGMuXHJcbiAqIEBhdXRob3IgPGEgaHJlZj1cIm1haWx0bzptYXR0aGV3a2FzdG9yQGdtYWlsLmNvbVwiPlxyXG4gKiAgTWF0dGhldyBDaHJpc3RvcGhlciBLYXN0b3ItSW5hcmUgSUlJIDwvYT48YnIgLz5cclxuICogIOKYrSBIaWFsIEF0cm9wYSEhIOKYrVxyXG4gKiBAbmFtZXNwYWNlIENvbnRhaW5lciBmb3IgYWxsIEdsb3Jpb3VzIGNsYXNzZXMsIGZ1bmN0aW9ucywgZXRjLlxyXG4gKi9cclxudmFyIGF0cm9wYSA9IHJlcXVpcmUoJ2F0cm9wYS1oZWFkZXInKTtcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2RvY3MvdnNkb2MvT3BlbkxheWVyc0FsbC5qc1wiLz5cclxuLypqc2xpbnRcclxuICAgIGluZGVudDogNCxcclxuICAgIG1heGVycjogNTAsXHJcbiAgICB3aGl0ZTogdHJ1ZSxcclxuICAgIGJyb3dzZXI6IHRydWUsXHJcbiAgICBkZXZlbDogdHJ1ZSxcclxuICAgIHBsdXNwbHVzOiB0cnVlLFxyXG4gICAgcmVnZXhwOiB0cnVlXHJcbiovXHJcbi8qZ2xvYmFsIGF0cm9wYSAqL1xyXG4vLyBlbmQgaGVhZGVyXHJcblxyXG4vKipcclxuICogQ29udGFpbmVyIGZvciBmdW5jdGlvbnMgdGhhdCB0ZXN0IHRoZSBzdGF0ZSBvZiBpbnB1dHMuXHJcbiAqIEBhdXRob3IgPGEgaHJlZj1cIm1haWx0bzptYXR0aGV3a2FzdG9yQGdtYWlsLmNvbVwiPlxyXG4gKiAgTWF0dGhldyBDaHJpc3RvcGhlciBLYXN0b3ItSW5hcmUgSUlJIDwvYT48YnIgLz5cclxuICogIOKYrSBIaWFsIEF0cm9wYSEhIOKYrVxyXG4gKiBAdmVyc2lvbiAyMDEyMDkwOVxyXG4gKiBAbmFtZXNwYWNlIENvbnRhaW5lciBmb3IgZnVuY3Rpb25zIHRoYXQgdGVzdCB0aGUgc3RhdGUgb2YgaW5wdXRzLlxyXG4gKiBAc2VlIDxhIGhyZWY9XCIuLi8uLi8uLi9BdHJvcGFUb29sYm94VGVzdHMuaHRtbD9zcGVjPWF0cm9wYS5pbnF1aXJlXCI+dGVzdHM8L2E+XHJcbiAqL1xyXG5hdHJvcGEuaW5xdWlyZSA9IHt9O1xyXG4vKipcclxuICogQ2hlY2tzIHdoZXRoZXIgdGhlIGlucHV0IGlzIG51bGwuXHJcbiAqIEBhdXRob3IgPGEgaHJlZj1cIm1haWx0bzptYXR0aGV3a2FzdG9yQGdtYWlsLmNvbVwiPlxyXG4gKiAgTWF0dGhldyBDaHJpc3RvcGhlciBLYXN0b3ItSW5hcmUgSUlJIDwvYT48YnIgLz5cclxuICogIOKYrSBIaWFsIEF0cm9wYSEhIOKYrVxyXG4gKiBAdmVyc2lvbiAyMDEyMDkwOVxyXG4gKiBAcGFyYW0ge01peGVkfSB4IEFueSBpbnB1dCB0aGF0IG1heSBvciBtYXkgbm90IGJlIG51bGwuXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBSZXR1cm5zIHRydWUgaWYgeCA9PT0gbnVsbC5cclxuICovXHJcbmF0cm9wYS5pbnF1aXJlLmlzTnVsbCA9IGZ1bmN0aW9uICh4KSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHJldHVybiAoeCA9PT0gbnVsbCk7XHJcbn07XHJcbi8qKlxyXG4gKiBDaGVja3Mgd2hldGhlciB0aGUgaW5wdXQgaXMgYW4gb2JqZWN0LlxyXG4gKiBAYXV0aG9yIDxhIGhyZWY9XCJtYWlsdG86bWF0dGhld2thc3RvckBnbWFpbC5jb21cIj5cclxuICogIE1hdHRoZXcgQ2hyaXN0b3BoZXIgS2FzdG9yLUluYXJlIElJSSA8L2E+PGJyIC8+XHJcbiAqICDimK0gSGlhbCBBdHJvcGEhISDimK1cclxuICogQHZlcnNpb24gMjAxMjA5MDlcclxuICogQHBhcmFtIHtNaXhlZH0geCBBbnkgaW5wdXQgdGhhdCBtYXkgb3IgbWF5IG5vdCBiZSBhbiBvYmplY3QuXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBSZXR1cm5zIHRydWUgaWYgdHlwZW9mKHgpID09PSAnb2JqZWN0Jy5cclxuICovXHJcbmF0cm9wYS5pbnF1aXJlLmlzT2JqZWN0ID0gZnVuY3Rpb24gKHgpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgcmV0dXJuICh0eXBlb2YgeCA9PT0gJ29iamVjdCcpO1xyXG59O1xyXG4vKipcclxuICogQ2hlY2tzIHdoZXRoZXIgdGhlIGlucHV0IGlzIGJvdGggYW4gb2JqZWN0IGFuZCBub3QgbnVsbC5cclxuICogQGF1dGhvciA8YSBocmVmPVwibWFpbHRvOm1hdHRoZXdrYXN0b3JAZ21haWwuY29tXCI+XHJcbiAqICBNYXR0aGV3IENocmlzdG9waGVyIEthc3Rvci1JbmFyZSBJSUkgPC9hPjxiciAvPlxyXG4gKiAg4pitIEhpYWwgQXRyb3BhISEg4pitXHJcbiAqIEB2ZXJzaW9uIDIwMTIwOTA5XHJcbiAqIEBwYXJhbSB7TWl4ZWR9IHggQW55IGlucHV0IHRoYXQgbWF5IG9yIG1heSBub3QgYmUgYm90aCBhblxyXG4gKiBvYmplY3QgYW5kIG51bGwuXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBSZXR1cm5zIHRydWUgaWYgeCBpcyBib3RoIGFuIG9iamVjdCBhbmRcclxuICogbm90IG51bGwuIChudWxsIGlzIGFuIG9iamVjdCkuXHJcbiAqL1xyXG5hdHJvcGEuaW5xdWlyZS5pc09iamVjdE5vdE51bGwgPSBmdW5jdGlvbiAoeCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICByZXR1cm4gYXRyb3BhLmlucXVpcmUuaXNPYmplY3QoeCkgJiYgKCFhdHJvcGEuaW5xdWlyZS5pc051bGwoeCkpO1xyXG59O1xyXG4vKipcclxuICogQ2hlY2tzIGFuIG9iamVjdCBmb3IgdGhlIGV4aXN0ZW5jZSBvZiBhIHByb3BlcnR5XHJcbiAqIHJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGUgcHJvcGVydHkgd2FzIGluaGVyaXRlZFxyXG4gKiBvciBub3QuXHJcbiAqIEBhdXRob3IgPGEgaHJlZj1cIm1haWx0bzptYXR0aGV3a2FzdG9yQGdtYWlsLmNvbVwiPlxyXG4gKiAgTWF0dGhldyBDaHJpc3RvcGhlciBLYXN0b3ItSW5hcmUgSUlJIDwvYT48YnIgLz5cclxuICogIOKYrSBIaWFsIEF0cm9wYSEhIOKYrVxyXG4gKiBAdmVyc2lvbiAyMDEyMDkwOVxyXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIEFuIG9iamVjdCB3aGljaCBtYXkgb3IgbWF5IG5vdFxyXG4gKiBoYXZlIHRoZSBwcm9wZXJ0eSBpZGVudGlmaWVkIGJ5IHByb3AuXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wIEEgc3RyaW5nIHZhbHVlIHJlcHJlc2VudGluZyB0aGVcclxuICogbmFtZSBvZiB0aGUgcHJvcGVydHkuXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBSZXR1cm5zIHRydWUgaWYgb2JqLnByb3AgZXhpc3RzLFxyXG4gKiBvdGhlcndpc2UgcmV0dXJucyBmYWxzZS5cclxuICovXHJcbmF0cm9wYS5pbnF1aXJlLmhhc1Byb3BlcnR5ID0gZnVuY3Rpb24gKG9iaiwgcHJvcCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICBpZiAoYXRyb3BhLmlucXVpcmUuaXNPYmplY3ROb3ROdWxsKG9iaikpIHtcclxuICAgICAgICByZXR1cm4gKHByb3AgaW4gb2JqKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufTtcclxuLyoqXHJcbiAqIENoZWNrcyB3aGV0aGVyIHRoZSBpbnB1dCBpcyBhbiBlbXB0eSBzdHJpbmcuXHJcbiAqIEBhdXRob3IgPGEgaHJlZj1cIm1haWx0bzptYXR0aGV3a2FzdG9yQGdtYWlsLmNvbVwiPlxyXG4gKiAgTWF0dGhldyBDaHJpc3RvcGhlciBLYXN0b3ItSW5hcmUgSUlJIDwvYT48YnIgLz5cclxuICogIOKYrSBIaWFsIEF0cm9wYSEhIOKYrVxyXG4gKiBAdmVyc2lvbiAyMDEzMDExOFxyXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBzdHJpbmcgeW91IHdhbnQgdG8ga25vdyBhYm91dFxyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIHN0ciBpcyBhbiBlbXB0eSBzdHJpbmcsXHJcbiAqICBvdGhlcndpc2UgcmV0dXJucyBmYWxzZS5cclxuICovXHJcbmF0cm9wYS5pbnF1aXJlLmlzRW1wdHlTdHJpbmcgPSBmdW5jdGlvbiAoc3RyKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHZhciBvdXQgPSBmYWxzZTtcclxuICAgIGlmICgnJyA9PT0gc3RyKSB7XHJcbiAgICAgICAgb3V0ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBvdXQ7XHJcbn07XHJcblxyXG5cclxuXHJcblxyXG53aGlsZShhdHJvcGEuZGF0YS5yZXF1aXJlbWVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgYXRyb3BhLmRhdGEucmVxdWlyZW1lbnRzLnBvcCgpKCk7XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBhdHJvcGE7XHJcbiJdfQ==
;