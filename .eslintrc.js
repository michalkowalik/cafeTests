module.exports = {

    'plugins' : [
        'babel'
    ],

    'env': {
        'es6': true,
        'node': true,
        'browser': true
    },

    'extends': 'google',
    "parserOptions": {
        'ecmaVersion': 2017,
        'jsx': true,
        'sourceType': 'module'
    },

    'rules': {
        'indent': [2, 2],
        'linebreak-style': [2, 'unix'],
        'eol-last': [2],
        'no-trailing-spaces': [2],
        'arrow-parens': 2,
        'max-len': [1, 120, 1, {'ignore-urls':true}]
    }
}