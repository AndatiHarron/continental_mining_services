import { createFileRoute } from "@tanstack/react-router";
import { CtaFooterBanner } from "@/components/features/services/cta-footer-banner";
import { EquipmentRentalTeaser } from "@/components/features/services/equipment-rental-teaser";
import { IntroText } from "@/components/features/services/intro-text";
import { PageHeader } from "@/components/features/services/page-header";
import { ServiceDetailedList } from "@/components/features/services/service-detailed-list";
import { Layout } from "@/components/ui/layout";
import i18n from "@/i18n/config";
import enTranslation from "@/locales/en/translation.json";
import frTranslation from "@/locales/fr/translation.json";
import { getSEOData } from "@/utils/seo";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => {
    const currentLang = (i18n.language || "en") as "en" | "fr";
    const translations = currentLang === "fr" ? frTranslation : enTranslation;

    const pageMeta = translations.servicesPage?.pageMeta;
    const title =
      pageMeta?.title || "Our Services | Continental Mining Services";
    const description =
      pageMeta?.description ||
      "Comprehensive mining solutions including ore haulage, precision drilling, and heavy logistics in Sierra Leone.";

    return getSEOData({
      title,
      description,
      keywords:
        "mining services, ore haulage, drilling services, logistics, equipment rental, Sierra Leone, mining solutions",
      path: "/services",
    });
  },
});

function Services() {
  return (
    <Layout>
      <PageHeader />
      <IntroText />
      <ServiceDetailedList />
      <EquipmentRentalTeaser />
      <CtaFooterBanner />
    </Layout>
  );
}
