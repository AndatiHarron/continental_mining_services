import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

export const AboutCta = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      className="relative overflow-hidden bg-primary py-24 text-white"
      ref={ref}
    >
      <motion.div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=2574&auto=format&fit=crop')] bg-center bg-cover opacity-20 mix-blend-overlay"
        style={{ y }}
      />
      <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/40 to-primary/90" />
      <div className="absolute inset-0 bg-radial-[circle_at_center] from-transparent to-black/30" />

      <div className="container relative mx-auto px-4 text-center md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="mb-6 font-bold font-heading text-3xl md:text-5xl">
            {t("about.cta.headline")}
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-white/80 text-xl">
            {t("about.cta.subheadline")}
          </p>
          <motion.div
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="/contact-us">
              <Button
                className="h-14 bg-white px-10 font-bold text-lg text-primary hover:bg-white/90"
                size="lg"
              >
                {t("about.cta.buttonText")}
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
