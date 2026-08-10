import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const entrades = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/content/entrades"
    }),

    schema: z.object({
        title: z.string(),

        date: z.coerce.date(),

        category: z.enum([
            "Dins",
            "Vincles",
            "Absències",
            "El món",
            "Pensament",
            "Fragments"
        ]),

        tags: z.array(z.string()).default([]),

        description: z.string(),
        image: z.string().optional(),
        story_text: z.string().optional()
    })
});

const pagines = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/content/pagines"
    }),

    schema: z.object({
        title: z.string(),
        label: z.string()
    })
});

export const collections = {
    entrades,
    pagines
};