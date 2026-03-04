/*
  Warnings:

  - The `delivery` column on the `Product` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "ProductDeliveryType" AS ENUM ('key', 'account');

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "delivery",
ADD COLUMN     "delivery" "ProductDeliveryType" NOT NULL DEFAULT 'key';
