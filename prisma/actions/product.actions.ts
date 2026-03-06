import prisma from "../prisma";

export const getProductByTag = async (tags: any) => {
  const products = await prisma.product.findMany({
    where: {
      tags: {
        some: {
          tag: {
            slug: {
              in: [tags],
            },
          },
        },
      },
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
