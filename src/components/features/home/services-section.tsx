import { Drill, RouteIcon, TruckIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { motion, type Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ServiceCard } from "./service-card";

export const ServicesSection = () => {
  const { t } = useTranslation();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section className="bg-neutral-bg py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="mb-4 font-bold font-heading text-3xl text-primary md:text-4xl">
            {t("services.heading")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("services.description")}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
          initial="hidden"
          variants={containerVariants}
          viewport={{ once: true }}
          whileInView="visible"
        >
          <motion.div variants={itemVariants}>
            <ServiceCard
              description={t("services.items.oreHaulage.description")}
              icon={<HugeiconsIcon className="h-10 w-10" icon={TruckIcon} />}
              title={t("services.items.oreHaulage.title")}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <ServiceCard
              description={t("services.items.drilling.description")}
              icon={<HugeiconsIcon className="h-10 w-10" icon={Drill} />}
              title={t("services.items.drilling.title")}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <ServiceCard
              description={t("services.items.logistics.description")}
              icon={<HugeiconsIcon className="h-10 w-10" icon={RouteIcon} />}
              title={t("services.items.logistics.title")}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
