import { createFileRoute } from "@tanstack/react-router";
import { AboutCta } from "@/components/features/about/about-cta";
import { CompanyAttributes } from "@/components/features/about/company-attributes";
import { CompanyProfile } from "@/components/features/about/company-profile";
import { MissionVisionValues } from "@/components/features/about/mission-vision-values";
import { PageHeader } from "@/components/features/about/page-header";
import { RegionFocus } from "@/components/features/about/region-focus";
import { SafetyCommitment } from "@/components/features/about/safety-commitment";
import { Layout } from "@/components/ui/layout";
import i18n from "@/i18n/config";
import enTranslation from "@/locales/en/translation.json";
import frTranslation from "@/locales/fr/translation.json";
import { getSEOData } from "@/utils/seo";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => {
    const currentLang = (i18n.language || "en") as "en" | "fr";
    const translations = currentLang === "fr" ? frTranslation : enTranslation;

    const pageMeta = translations.about?.pageMeta;
    const title = pageMeta?.title || "About Us | Continental Mining Services";
    const description =
      pageMeta?.description ||
      "Learn about Continental Mining Services, our mission in Sierra Leone, and our commitment to safety and operational excellence.";

    return getSEOData({
      title,
      description,
      keywords:
        "about, mining company, Sierra Leone, mining logistics, safety, operational excellence, West Africa",
      path: "/about",
    });
  },
});

function About() {
  return (
    <Layout>
      <PageHeader />
      <CompanyProfile />
      <MissionVisionValues />
      <CompanyAttributes />
      <SafetyCommitment />
      <RegionFocus />
      <AboutCta />
    </Layout>
  );
}
