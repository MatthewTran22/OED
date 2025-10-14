/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: './',
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src/client/app'),
		},
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
	},
	build: {
		outDir: path.resolve(__dirname, 'src/client/public/app'),
		emptyOutDir: true,
		sourcemap: true,
		rollupOptions: {
			input: path.resolve(__dirname, 'src/client/app/index.tsx'),
			output: {
				entryFileNames: 'bundle.js',
				chunkFileNames: '[name].js',
				assetFileNames: '[name].[ext]'
			}
		}
	},
	define: {
		'process.env': {}
	}
});
