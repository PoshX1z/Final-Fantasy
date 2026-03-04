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

export const getProductAll = async () => {
  const product = await prisma.product.findMany();
  return product;
};

export const getProductByCategory = async (category: any) => {
  const product = await prisma.product.findMany({
    where: {
      category: category,
    },
  });
  return product;
};
