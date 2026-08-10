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

        description: z.string()
    })

});

export const collections = {
    entrades
};