module.exports = {
    parser: 'babel-eslint',
    extends: ['airbnb', 'prettier', 'prettier/flowtype'],
    plugins: ['react', 'jsx-a11y', 'import', 'jest'],
    rules: {
        indent: ['error', 4],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'comma-dangle': ['error', 'never'],
        'react/no-multi-comp': 0,
        'react/sort-comp': 0,
        'class-methods-use-this': 0,
        'no-unused-vars': ['warn'],
        'import/prefer-default-export': ['warn'],
        'prefer-destructuring': 0,
        'react/prefer-stateless-function': ['warn']
    },
    env: {
        'jest/globals': true
    },
    globals: {
        Generator: true,
        $Shape: true
    }
};
