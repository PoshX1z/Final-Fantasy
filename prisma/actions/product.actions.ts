import prisma from "../prisma";

export const getProductByTag = async (tag: any) => {
  const products = await prisma.product.findMany({
    where: {
      tag: tag,
    },
  });
  return products;
};
