import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import whoWeAreImage from "@/assets/about-us/who-we-are.jpeg";

export const CompanyProfile = () => {
  const { t } = useTranslation();
  const paragraphs = t("about.companyProfile.bodyParagraphs", {
    returnObjects: true,
  }) as string[];
  const statBadges = t("about.companyProfile.statBadges", {
    returnObjects: true,
  }) as string[];

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="mb-6 font-bold font-heading text-3xl text-primary md:text-4xl">
              {t("about.companyProfile.headline")}
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              {statBadges.map((badge, index) => (
                <motion.span
                  className="rounded-full border border-primary/20 bg-primary/5 px-4 py-2 font-semibold text-primary text-sm transition-colors hover:bg-primary/10"
                  initial={{ opacity: 0, y: 10 }}
                  key={badge}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  {badge}
                </motion.span>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="relative aspect-4/3 overflow-hidden rounded-xl bg-neutral-100 shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <img
              alt={t("about.companyProfile.imageAlt")}
              className="h-full w-full object-cover"
              height={800}
              src={whoWeAreImage}
              title={t("about.companyProfile.imageAlt")}
              width={1200}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
