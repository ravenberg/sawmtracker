module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/essential',
        'plugin:@typescript-eslint/recommended',
        '@nuxtjs/eslint-config-typescript',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        indent: ['error', 4],
        'no-multi-spaces': ['error'],
        'no-unused-vars': [
            'error',
            { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
        ],
        '@typescript-eslint/ban-ts-comment': 'off',
        'comma-dangle': ['error', {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'never',
            exports: 'never',
            functions: 'never',
        }],
    },
};
