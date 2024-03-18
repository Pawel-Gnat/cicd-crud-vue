/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_APP: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}

declare const APP_VERSION: string
