import prisma from "../prisma";

export const getProductByTag = async (tag: any) => {
  const products = await prisma.product.findMany({
    where: {
      tag: tag,
    },
  });
  return products;
};

export const getProductBySlug = async (slug: any) => {
  const product = await prisma.product.findFirst({
    where: {
      slug: slug,
    },
  });
  return product;
};
