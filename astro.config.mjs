import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
	],
	output: 'server',
	adapter: vercel({
		webAnalytics: true,
		imageService: true,
	}),
});
