import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import vercel from '@astrojs/vercel/static';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://ielayade.dev',
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		sitemap(),
	],
	output: 'static',
	adapter: vercel({
		webAnalytics: { enabled: true },
		imageService: true,
	}),
});
