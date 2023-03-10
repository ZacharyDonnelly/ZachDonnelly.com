/** @type {import('@types/eslint').Linter.BaseConfig} */
module.exports = {
  root: true,
  env: {
    'cypress/globals': true,
    browser: true,
    es6: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    settings: {
      'import/resolver': {
        typescript: {
          directory: '**/tsconfig.json'
        }
      },
      react: {
        version: 'detect'
      },
      // we're using vitest which has a very similar API to jest
      // (so the linting plugins work nicely), but it means we have to explicitly
      // set the jest version.
      jest: {
        version: 28
      }
    }
  },
  plugins: ['@typescript-eslint', 'prettier', 'cypress', 'jsx-a11y', 'jest', 'testing-library', 'jest-dom'],
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'react/require-default-props': 'warn',
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/no-onchange': 0,
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'prettier/prettier': 'off',
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'import/extensions': 'off',
    'import/export': 'off',
    'import/named': 'off',
    'import/namespace': 'off',
    'import/no-deprecated': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-cycle': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-named-as-default': 'off',
    'import/no-self-import': 'off',
    'import/default': 'off',
    'import/no-duplicates': 'off',
    'import/no-unresolved': 'off',
    'import/order': 'off',
    'one-var': 'off',
    'no-unexpected-multiline': 'error',
    'prefer-const': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'typeLike',
        format: ['PascalCase']
      }
    ]
  },
  overrides: [
    {
      files: ['*.tsx'],
      rules: {
        'react/jsx-filename-extension': [
          'warn',
          {
            extensions: ['tsx']
          }
        ],
        '@typescript-eslint/no-unused-vars': 'off',
        'react/prop-types': 'off'
      }
    },
    {
      files: ['*.spec.ts', '*.spec.tsx', '*.test.ts', '*.test.tsx'],
      plugins: ['jest', 'testing-library', 'jest-dom'],
      rules: {
        'rulesdir/no-global-fetch': 'off',
        'jest/no-large-snapshots': [
          'error',
          {
            maxSize: 0
          }
        ],
        'jest/no-test-prefixes': 'off',
        'jest/no-jasmine-globals': 'error',
        'jest/prefer-to-be-null': 'error',
        'jest/prefer-to-be-undefined': 'error',
        'jest/require-to-throw-message': 'error',
        'jest/expect-expect': 'error',
        'jest/valid-expect': 'error',
        'jest/no-test-return-statement': 'error',
        'jest/no-standalone-expect': 'error',
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-contain': 'error',
        'jest/prefer-to-have-length': 'error',
        'jest/valid-title': 'error',
        'jest/no-commented-out-tests': 'error',
        'jest/no-if': 'error',
        'jest/no-export': 'error',
        'jest/no-restricted-matchers': [
          'error',
          {
            toMatchSnapshot: 'Do not use snapshot tests. Write a real test instead.',
            resolves: 'Use `expect(await promise)` instead.',
            toMatchInlineSnapshot: 'Do not use snapshot tests. Write a real test instead.',
            toThrowErrorMatchingSnapshot: 'Do not use snapshot tests. Write a real test instead.',
            toThrowErrorMatchingInlineSnapshot: 'Do not use snapshot tests. Write a real test instead.',
            toBeTruthy:
              'Do not use toBeTruthy.  Use toBeInTheDocument for DOM assertions, or toBe/toEqual for checking booleans',
            toBeFalsy:
              'Do not use toBeFalsy.  Use toBeInTheDocument for DOM assertions, or toBe/toEqual for checking booleans'
          }
        ],
        'jest-dom/prefer-checked': 'error',
        'jest-dom/prefer-empty': 'error',
        'jest-dom/prefer-enabled-disabled': 'error',
        'jest-dom/prefer-focus': 'error',
        'jest-dom/prefer-required': 'error',
        'jest-dom/prefer-to-have-attribute': 'error',
        'jest-dom/prefer-to-have-style': 'error',
        'jest-dom/prefer-to-have-class': 'error',
        'jest-dom/prefer-to-have-value': 'error',
        'jest-dom/prefer-in-document': 'error',
        'jest-dom/prefer-to-have-text-content': 'error',
        'testing-library/await-async-query': 'error',
        'testing-library/await-async-utils': 'error',
        'testing-library/no-await-sync-events': 'error',
        'testing-library/no-await-sync-query': 'error',
        'testing-library/no-dom-import': 'error',
        'testing-library/prefer-explicit-assert': 'off',
        'testing-library/prefer-presence-queries': 'error',
        'testing-library/prefer-wait-for': 'error',
        'testing-library/no-wait-for-empty-callback': 'error',
        'testing-library/prefer-screen-queries': 'error',
        'testing-library/no-manual-cleanup': 'error',
        'max-lines-per-function': 'off'
      }
    }
  ],
  extends: [
    '@remix-run/eslint-config',
    '@remix-run/eslint-config/node',
    '@remix-run/eslint-config/jest-testing-library',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/typescript'
  ]
}
