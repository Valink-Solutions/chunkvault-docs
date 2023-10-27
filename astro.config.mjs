import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'ChunkVault Docs',
			logo: {
			  light: './src/assets/chunkvault-logo-dark.png',
			  dark: './src/assets/chunkvault-logo-light.png',
			  replacesTitle: true,
			},
			social: {
				github: 'https://github.com/valink-solutions',
				twitter: 'https://twitter.com/ChunkVault',
				"x.com": 'https://twitter.com/valink',
			},
			favicon: '/favicon.ico',
			sidebar: [
				{ label: 'ChunkVault Desktop', autogenerate: { directory: 'teller' } },
				{ label: 'Vault Server', autogenerate: { directory: 'vault' } },
				{ label: 'CommandBlock Library', autogenerate: { directory: 'commandblock' } },
			],
		}),
	],
});
