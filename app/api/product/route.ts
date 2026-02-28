import {
  ProductCategory,
  ProductDeliveryType,
  ProductEdition,
  ProductPlatform,
} from "@/app/generated/prisma/enums";
import prisma from "@/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const name = formData.get("name") as string;
  const slug = formData.get("slug") as string;
  const image = formData.get("image") as string;
  const category = formData.get("category") as string;
  const platform = formData.get("platform") as string;
  const platformImageIcon = formData.get("platformImageIcon") as string;
  const edition = formData.get("edition") as string;
  const description = formData.get("description") as string;
  const price = Number(formData.get("price"));
  const countInStock = Number(formData.get("countInStock"));
  const numSales = Number(formData.get("numSales"));
  const releaseDate = formData.get("releaseDate") as string;
  const developer = formData.get("developer") as string;
  const review = Number(formData.get("review"));
  const publisher = formData.get("publisher") as string;
  const delivery = formData.get("delivery") as string;
  console.log(image);
  await prisma.product.create({
    data: {
      name,
      slug,
      image,
      category: category as ProductCategory,
      platform: platform as ProductPlatform,
      platformImageIcon,
      edition: edition as ProductEdition,
      description,
      price,
      countInStock,
      numSales,
      releaseDate,
      developer,
      review,
      publisher,
      delivery: delivery as ProductDeliveryType,
    },
  });
  return NextResponse.json({ success: true });
}
