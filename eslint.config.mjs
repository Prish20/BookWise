import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

export default [
    ...compat.extends(
        'next/core-web-vitals',
        'next/typescript',
        'plugin:tailwindcss/recommended',
        'prettier',
    ),
    {
        rules: {
            'no-undef': 'off',
            'no-unused-vars': 'off',
            'react/react-in-jsx-scope': 'off', // Not needed in Next.js
            'react/prop-types': 'off', // Not needed if using TypeScript
            'react-hooks/rules-of-hooks': 'error', // Enforce React Hooks rules
            'react-hooks/exhaustive-deps': 'warn', // Enforce exhaustive deps in useEffect
            '@next/next/no-html-link-for-pages': 'error', // Next.js-specific rule
            'tailwindcss/classnames-order': 'warn', // Enforce Tailwind class order
            'tailwindcss/enforces-negative-arbitrary-values': 'warn', // Enforce negative arbitrary values
            'tailwindcss/enforces-shorthand': 'warn', // Enforce shorthand syntax
            'tailwindcss/no-arbitrary-value': 'off', // Allow arbitrary values
            'tailwindcss/no-custom-classname': 'warn', // Warn against custom class names
            'tailwindcss/no-contradicting-classname': 'error', // Detect conflicting classes
            // 'prettier/prettier': 'error', // Run Prettier as an ESLint rule
        },
    },
];
