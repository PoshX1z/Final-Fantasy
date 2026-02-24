/*
  Warnings:

  - The values [normal] on the enum `ProductEdition` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ProductEdition_new" AS ENUM ('standard', 'deluxe', 'ultimate', 'premium', 'gold', 'silver', 'platinum');
ALTER TABLE "public"."Product" ALTER COLUMN "edition" DROP DEFAULT;
ALTER TABLE "Product" ALTER COLUMN "edition" TYPE "ProductEdition_new" USING ("edition"::text::"ProductEdition_new");
ALTER TYPE "ProductEdition" RENAME TO "ProductEdition_old";
ALTER TYPE "ProductEdition_new" RENAME TO "ProductEdition";
DROP TYPE "public"."ProductEdition_old";
ALTER TABLE "Product" ALTER COLUMN "edition" SET DEFAULT 'standard';
COMMIT;

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "image" SET DATA TYPE TEXT,
ALTER COLUMN "edition" SET DEFAULT 'standard';
