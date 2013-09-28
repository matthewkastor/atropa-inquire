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
