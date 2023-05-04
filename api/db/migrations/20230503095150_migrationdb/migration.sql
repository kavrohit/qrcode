-- CreateTable
CREATE TABLE "QRCode" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "scanCount" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "QRCode_pkey" PRIMARY KEY ("id")
);
