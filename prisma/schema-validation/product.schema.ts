import z from "zod";

const productCategory = [
  "action",
  "adventure",
  "rpg",
  "jrpg",
  "strategy",
  "simulation",
  "sports",
  "racing",
  "fighting",
  "shooter",
  "puzzle",
  "platformer",
  "survival",
  "horror",
  "stealth",
  "openWorld",
  "mmo",
  "battleRoyald",
  "storyTelling",
  "rhythm",
];
export const ProductInputSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  slug: z.string().min(3, "Name must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  price: z.number(),
  image: z.string(),
  category: z.enum(productCategory),
});
