module.exports = {
    "env": {
        "node": true,
        "es6": true
    },
    "extends": "eslint:recommended",
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
        "no-console": "off"
    },
    "parser": "babel-eslint",
    "globals": {
        "test": true,
        "expect": true,
        "describe": true,
        "beforeAll": true,
        "afterAll": true
    }

};
