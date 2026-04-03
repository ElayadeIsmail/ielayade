import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod'

const experienceCollection = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
	schema: z.object({
		title: z.string(),
		tech: z.array(z.string()),
		link: z.string(),
		startDate: z.string(),
		endDate: z.string(),
	}),
});

const projectCollection = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			tech: z.array(z.string()),
			link: z.string(),
			image: image(),
		}),
});

export const collections = {
	experience: experienceCollection,
	projects: projectCollection,
};
