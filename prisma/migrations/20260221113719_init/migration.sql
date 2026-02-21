-- CreateEnum
CREATE TYPE "ProductCategory" AS ENUM ('Action', 'Adventure', 'RPG', 'JRPG', 'Strategy', 'Simulation', 'Sports', 'Racing', 'Fighting', 'Shooter', 'Puzzle', 'Platformer', 'Survival', 'Horror', 'Stealth', 'OpenWorld', 'MMO', 'BattleRoyald', 'StoryTelling', 'Rhythm');

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "category" "ProductCategory" NOT NULL DEFAULT 'Action',
    "platform" TEXT NOT NULL,
    "platformImageIcon" TEXT NOT NULL,
    "edition" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "countInStock" INTEGER NOT NULL,
    "numSales" INTEGER NOT NULL,
    "releaseDate" TEXT NOT NULL,
    "developer" TEXT NOT NULL,
    "review" INTEGER NOT NULL,
    "publisher" TEXT NOT NULL,
    "delivery" TEXT NOT NULL,
    "tag" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_slug_key" ON "Product"("slug");
