import { Diamond01Icon, EyeIcon, Flag01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";

export const MissionVisionValues = () => {
  const { t } = useTranslation();
  const coreValues = t("about.missionVisionValues.coreValues.list", {
    returnObjects: true,
  }) as string[];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
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
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
          initial="hidden"
          variants={containerVariants}
          viewport={{ once: true }}
          whileInView="visible"
        >
          <motion.div variants={itemVariants}>
            <Card className="group h-full border border-white/40 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5">
              <CardContent className="flex h-full flex-col p-8">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/5 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/20">
                  <HugeiconsIcon className="h-8 w-8" icon={Flag01Icon} />
                </div>
                <h3 className="mb-4 font-bold font-heading text-primary text-xl">
                  {t("about.missionVisionValues.mission.title")}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("about.missionVisionValues.mission.text")}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="group h-full border border-white/40 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5">
              <CardContent className="flex h-full flex-col p-8">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/5 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/20">
                  <HugeiconsIcon className="h-8 w-8" icon={EyeIcon} />
                </div>
                <h3 className="mb-4 font-bold font-heading text-primary text-xl">
                  {t("about.missionVisionValues.vision.title")}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("about.missionVisionValues.vision.text")}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="group h-full border border-white/40 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5">
              <CardContent className="flex h-full flex-col p-8">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/5 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/20">
                  <HugeiconsIcon className="h-8 w-8" icon={Diamond01Icon} />
                </div>
                <h3 className="mb-4 font-bold font-heading text-primary text-xl">
                  {t("about.missionVisionValues.coreValues.title")}
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  {coreValues.map((value) => (
                    <li className="flex items-start gap-3" key={value}>
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="text-lg leading-tight">{value}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
