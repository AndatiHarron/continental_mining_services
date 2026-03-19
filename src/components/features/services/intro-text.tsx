import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const IntroText = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-neutral-bg py-16">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="mb-6 font-bold font-heading text-3xl text-primary md:text-4xl">
            {t("servicesPage.introText.headline")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("servicesPage.introText.text")}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
