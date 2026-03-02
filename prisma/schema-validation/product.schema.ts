import z from "zod";

const ProductCategory = [
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
const ProductTag = ["normal", "hero", "promotion", "featured"];
const ProductPlatform = [
  "ea",
  "epic",
  "microsoft",
  "nintendo",
  "playstation",
  "steam",
  "ubisoft",
  "xbox",
];
const ProductEdition = [
  "standard",
  "deluxe",
  "ultimate",
  "premium",
  "gold",
  "silver",
  "platinum",
];
const ProductDeliveryType = ["key", "account"];
export const ProductInputSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  slug: z.string().min(3, "Name must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  price: z.coerce.number().positive("Price must be a positive number"),
  image: z.string(),
  category: z.enum(ProductCategory).default(ProductCategory[0]),
  tag: z.enum(ProductTag).default(ProductTag[0]),
  platform: z.enum(ProductPlatform).default(ProductPlatform[0]),
  platformImageIcon: z.string(),
  edition: z.enum(ProductEdition).default(ProductEdition[0]),
  developer: z.string().min(2, "Publisher is required"),
  publisher: z.string().min(2, "Publisher is required"),
  releaseDate: z.string(),
  review: z.coerce
    .number()
    .int()
    .min(0, "Review score cannot be less than 0")
    .max(100, "Review score cannot be more than 100"),
  countInStock: z.number().int().nonnegative("Must be positive number"),
  numSales: z.number().int().nonnegative("Must be positive number"),
  delivery: z.enum(ProductDeliveryType).default(ProductDeliveryType[0]),
});
