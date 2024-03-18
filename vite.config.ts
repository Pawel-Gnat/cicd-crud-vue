import { defineConfig, loadEnv, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import packageJson from './package.json'

const env = loadEnv('production', process.cwd(), 'VITE')
console.log(env)

export default defineConfig({
	base: '/',
	build: {
		outDir: 'dist',
		assetsDir: 'assets',
		minify: true,
		sourcemap: false,
	},
	define: {
		APP_VERSION: JSON.stringify(packageJson.version),
	},
	server: {
		port: 3000,
	},
	plugins: [vue(), splitVendorChunkPlugin()],
})
