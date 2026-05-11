-- CreateEnum
CREATE TYPE "LeadService" AS ENUM ('LANDING_PAGE', 'INSTITUTIONAL_SITE', 'AUTOMATION', 'AI_AGENT', 'OTHER');

-- CreateTable
CREATE TABLE "ContactLead" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "company" TEXT,
    "service" "LeadService" NOT NULL,
    "message" TEXT NOT NULL,
    "sourcePage" TEXT,
    "referrer" TEXT,
    "userAgent" TEXT,
    "ipAddress" TEXT,
    "utmSource" TEXT,
    "utmMedium" TEXT,
    "utmCampaign" TEXT,
    "utmTerm" TEXT,
    "utmContent" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ContactLead_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ContactLead_createdAt_idx" ON "ContactLead"("createdAt");

-- CreateIndex
CREATE INDEX "ContactLead_email_idx" ON "ContactLead"("email");

-- CreateIndex
CREATE INDEX "ContactLead_service_idx" ON "ContactLead"("service");
