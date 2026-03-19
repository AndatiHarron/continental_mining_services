import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import heroBg from "@/assets/about-us/develon.jpg";

export const PageHeader = () => {
  const { t } = useTranslation();
  const breadcrumbs = t("about.pageHeader.breadcrumbs", {
    returnObjects: true,
  }) as string[];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-primary">
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{ scale: 1.05 }}
          className="h-full w-full"
          initial={{ scale: 1 }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "linear",
          }}
        >
          <img
            alt="About Hero Background"
            className="h-full w-full object-cover"
            height={100}
            src={heroBg}
            title="About Hero Background"
            width={100}
          />
        </motion.div>
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>

      <div className="container relative z-10 px-4 pt-20 md:px-6">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial="hidden"
          variants={containerVariants}
          viewport={{ once: true }}
          whileInView="visible"
        >
          <motion.nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center justify-center gap-2 text-sm text-white/70"
            variants={itemVariants}
          >
            {breadcrumbs.map((crumb, index) => (
              <div className="flex items-center gap-2" key={crumb}>
                {index > 0 && <span className="text-white/40">/</span>}
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-white">{crumb}</span>
                ) : (
                  <Link
                    className="transition-colors hover:text-white"
                    to={index === 0 ? "/" : "/about"}
                  >
                    {crumb}
                  </Link>
                )}
              </div>
            ))}
          </motion.nav>
          <motion.h1
            className="mb-6 font-bold font-heading text-4xl text-white leading-tight md:text-5xl lg:text-6xl"
            variants={itemVariants}
          >
            {t("about.pageHeader.title")}
          </motion.h1>
          <motion.p
            className="mx-auto max-w-2xl font-light text-lg text-white/80 leading-relaxed md:text-xl"
            variants={itemVariants}
          >
            {t("about.pageHeader.subtitle")}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
