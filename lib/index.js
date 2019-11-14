/**
 * @fileoverview LifeOmic config for typescript-eslint
 * @author Xander Dumaine
 */
'use strict';
module.exports = {
  configs: {
    recommended: {
      env: {
        es2020: true,
        node: true
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended'
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module'
      },
      plugins: [
        '@typescript-eslint',
        '@typescript-eslint/tslint',
        'prefer-arrow',
        'prettier'
      ],
      rules: {
        'no-unused-vars': 'error',
        'no-else-return': 'error',
        'prefer-arrow/prefer-arrow-functions': 'error',
        'prettier/prettier': 'error',
        '@typescript-eslint/explicit-member-accessibility': 'error',
        quotes: ['error', 'single', { avoidEscape: true }],
        '@typescript-eslint/camelcase': ['error', { properties: 'never' }], // because of stripe and twilio APIs
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-floating-promises': 'off'
      },
      overrides: [
        {
          files: ['**/*.js'],
          rules: {
            '@typescript-eslint/tslint/config': 'off',
            '@typescript-eslint/no-var-requires': 'off',
            '@typescript-eslint/no-require-imports': 'off',
            'prefer-arrow/prefer-arrow-functions': 'off'
          },
          parserOptions: {
            project: null,
            sourceType: 'module'
          }
        },
        {
          files: [
            '{src,stories}/**/*.test.{tsx,ts}',
            '{src/testUtils,test,src/utils/__mocks__}/**/*.{tsx,ts}',
            'test/**/*.{tsx,ts}',
            'src/util/__mocks__/**/*.ts',
            '__mocks__/*.ts'
          ],
          env: {
            jest: true,
            node: true,
            browser: true
          },
          rules: {
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/no-empty-interface': 'off',
            '@typescript-eslint/no-non-null-assertion': 'off'
          }
        }
      ]
    },
    reactNative: {
      settings: {
        react: {
          pragma: 'React',
          version: 'detect'
        }
      },
      rules: {
        'react/forbid-elements': [
          'error',
          {
            forbid: [
              { element: 'svg', message: 'Use react-native-svg Svg instead' },
              {
                element: 'linearGradient',
                message: 'Use react-native-svg LinearGradient instead'
              },
              { element: 'path', message: 'Use react-native-svg Path instead' },
              { element: 'defs', message: 'Use react-native-svg Defs instead' },
              { element: 'stop', message: 'Use react-native-svg Stop instead' },
              { element: 'rect', message: 'Use react-native-svg Rect instead' },
              { element: 'mask', message: 'Use react-native-svg Mask instead' },
              {
                element: 'radialGradient',
                message: 'Use react-native-svg RadialGradient instead'
              },
              { element: '^g$', message: 'Use react-native-svg G instead' }
            ]
          }
        ],
        '@typescript-eslint/tslint/config': [
          'error',
          {
            rules: {
              ban: [
                true,
                {
                  name: ['StyleSheet', 'create']
                }
              ]
            }
          }
        ]
      }
    }
  }
};
