// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Wiki',
			description: 'A personal wiki built with Astro Starlight.',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/Riyoway/personal-wiki' },
			],
			sidebar: [
				{
					label: 'Start here',
					items: [{ label: 'About', slug: 'about' }],
				},
				{
					label: 'Notes',
					items: [{ autogenerate: { directory: 'notes' } }],
				},
				{
					label: 'How-to',
					items: [{ autogenerate: { directory: 'how-to' } }],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
