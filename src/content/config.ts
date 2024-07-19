import { defineCollection, z } from 'astro:content';

const experienceCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		tech: z.array(z.string()),
		link: z.string(),
		startDate: z.string(),
		endDate: z.string(),
	}),
});
const projectCollection = defineCollection({
	type: 'content',
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
