/*
  Warnings:

  - The values [Action,Adventure,RPG,JRPG,Strategy,Simulation,Sports,Racing,Fighting,Shooter,Puzzle,Platformer,Survival,Horror,Stealth,OpenWorld,MMO,BattleRoyald,StoryTelling,Rhythm] on the enum `ProductCategory` will be removed. If these variants are still used in the database, this will fail.
  - The `platform` column on the `Product` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `edition` column on the `Product` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `image` on the `Product` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `releaseDate` on the `Product` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "ProductPlatform" AS ENUM ('ea', 'epic', 'microsoft', 'nintendo', 'playstation', 'steam', 'ubisoft', 'xbox');

-- CreateEnum
CREATE TYPE "ProductEdition" AS ENUM ('normal', 'deluxe', 'ultimate', 'premium', 'gold', 'silver', 'platinum');

-- AlterEnum
BEGIN;
CREATE TYPE "ProductCategory_new" AS ENUM ('action', 'adventure', 'rpg', 'jrpg', 'strategy', 'simulation', 'sports', 'racing', 'fighting', 'shooter', 'puzzle', 'platformer', 'survival', 'horror', 'stealth', 'openWorld', 'mmo', 'battleRoyald', 'storyTelling', 'rhythm');
ALTER TABLE "public"."Product" ALTER COLUMN "category" DROP DEFAULT;
ALTER TABLE "Product" ALTER COLUMN "category" TYPE "ProductCategory_new" USING ("category"::text::"ProductCategory_new");
ALTER TYPE "ProductCategory" RENAME TO "ProductCategory_old";
ALTER TYPE "ProductCategory_new" RENAME TO "ProductCategory";
DROP TYPE "public"."ProductCategory_old";
ALTER TABLE "Product" ALTER COLUMN "category" SET DEFAULT 'action';
COMMIT;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "image",
ADD COLUMN     "image" BYTEA NOT NULL,
ALTER COLUMN "category" SET DEFAULT 'action',
DROP COLUMN "platform",
ADD COLUMN     "platform" "ProductPlatform" NOT NULL DEFAULT 'steam',
DROP COLUMN "edition",
ADD COLUMN     "edition" "ProductEdition" NOT NULL DEFAULT 'normal',
DROP COLUMN "releaseDate",
ADD COLUMN     "releaseDate" TIMESTAMP(3) NOT NULL;
