module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
    },
    "globals": {
        "_gaq": false,
        "process": false,
        "ActiveXObject": false,
        "VERSION": false,
        // Build globals
        "__dirname": false,
        // Test globals
        "after": false,
        "afterEach": false,
        "assert": false,
        "before": false,
        "beforeEach": false,
        "describe": false,
        "expect": false,
        "it": false,
        "sinon": false,
        "xit": false
    },
    "extends": "node-style-guide",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
        "no-var": "error",
        // part of Node Style-guide but ignored
        "max-len": 0,
        "max-statements": 0,
        "object-curly-spacing": 0,
        "brace-style": 0,
        "space-after-keywords": 0
    }
};
