import { MapPinIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import operatingImage from "@/assets/about-us/operating.jpeg";

export const RegionFocus = () => {
  const { t } = useTranslation();

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
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <HugeiconsIcon className="h-6 w-6" icon={MapPinIcon} />
              </div>
              <h2 className="font-bold font-heading text-3xl text-primary md:text-4xl">
                {t("about.regionFocus.headline")}
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("about.regionFocus.text")}
            </p>
          </motion.div>
          <motion.div
            className="relative aspect-4/3 overflow-hidden rounded-xl bg-neutral-100 shadow-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <img
              alt={t("about.regionFocus.mapHighlight")}
              className="h-full w-full object-cover"
              height={800}
              src={operatingImage}
              title={t("about.regionFocus.mapHighlight")}
              width={1200}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
