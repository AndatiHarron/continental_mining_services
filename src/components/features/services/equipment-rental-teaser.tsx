import { ArrowRightIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

export const EquipmentRentalTeaser = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-50 py-24 text-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="mb-6 font-bold font-heading text-3xl text-primary md:text-4xl">
            {t("servicesPage.rentalTeaser.headline")}
          </h2>
          <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
            {t("servicesPage.rentalTeaser.text")}
          </p>
          <Link to={t("servicesPage.rentalTeaser.buttonLink")}>
            <Button
              className="group bg-secondary font-semibold text-lg text-white hover:bg-secondary/90"
              size="lg"
            >
              {t("servicesPage.rentalTeaser.buttonText")}
              <HugeiconsIcon
                className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                icon={ArrowRightIcon}
              />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
