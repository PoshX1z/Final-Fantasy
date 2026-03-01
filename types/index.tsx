import { ProductInputSchema } from "@/prisma/schema-validation/product.schema";
import z from "zod";

export type IProductInput = z.infer<typeof ProductInputSchema>;
