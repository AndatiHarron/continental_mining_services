// import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import heroBg from "@/assets/hero.jpg";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import excavatorImg from "@/assets/home/excavators.avif";
import bulldozerImg from "@/assets/home/bulldozer.webp";
import loaderImg from "@/assets/home/front_loaders.jpg";
import dumpTruckImg from "@/assets/home/heavy_dump_trucks.webp";
// import logoImg from "@/logo.png";
import logoImg from "@/logo.png";

export const HeroSection = () => {
  const { t } = useTranslation();

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1.0] as const },
    },
  };

  const [showFleetPopup, setShowFleetPopup] = useState(false);

  // Rental fleet data
  const fleet = [
    {
      key: "excavators",
      title: t("rental.items.excavators.title"),
      description: t("rental.items.excavators.description"),
      image: excavatorImg,
      icon: null,
      specs: [
        { label: "Operating Weight", value: "21-35 ton" },
        { label: "Engine Power", value: "120-210 kW" },
        { label: "Bucket Capacity", value: "0.8-2.1 m³" },
      ],
    },
    {
      key: "bulldozers",
      title: t("rental.items.bulldozers.title"),
      description: t("rental.items.bulldozers.description"),
      image: bulldozerImg,
      icon: null,
      specs: [
        { label: "Operating Weight", value: "18-38 ton" },
        { label: "Engine Power", value: "150-320 kW" },
        { label: "Blade Capacity", value: "3.5-7.0 m³" },
      ],
    },
    {
      key: "loaders",
      title: t("rental.items.loaders.title"),
      description: t("rental.items.loaders.description"),
      image: loaderImg,
      icon: null,
      specs: [
        { label: "Operating Weight", value: "12-25 ton" },
        { label: "Engine Power", value: "100-180 kW" },
        { label: "Bucket Capacity", value: "1.8-4.5 m³" },
      ],
    },
    {
      key: "dumpTrucks",
      title: t("rental.items.dumpTrucks.title"),
      description: t("rental.items.dumpTrucks.description"),
      image: dumpTruckImg,
      icon: null,
      specs: [
        { label: "Payload", value: "41 ton" },
        { label: "Engine Power", value: "368 kW" },
        { label: "Drive", value: "6x6, 8x8" },
      ],
    },
  ];

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">
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
            alt={t("hero.image.alt")}
            className="h-full w-full object-cover opacity-60"
            height={1080}
            src={heroBg}
            title={t("hero.image.alt")}
            width={1920}
          />
        </motion.div>
      </div>

      <div className="container relative z-10 px-4 pt-20 md:px-6">
        <motion.div
          className="mx-auto max-w-4xl text-center md:text-left"
          initial="hidden"
          variants={containerVariants}
          viewport={{ once: true }}
          whileInView="visible"
        >
          <motion.span
            className="mb-6 inline-block rounded-full border border-white/20 bg-white/5 px-6 py-2 font-bold text-sm text-white uppercase tracking-wider shadow-lg backdrop-blur-xl transition-all hover:bg-white/10"
            variants={itemVariants}
          >
            {t("hero.badge")}
          </motion.span>
          <motion.h1
            className="mb-6 font-bold font-heading text-4xl text-white leading-tight md:text-6xl lg:text-7xl"
            variants={itemVariants}
          >
            {t("hero.heading.part1")} <br className="hidden md:block" />
            <span className="bg-linear-to-r from-white to-white/70 bg-clip-text text-transparent">
              {t("hero.heading.part2")}
            </span>
          </motion.h1>
          <motion.p
            className="mb-10 max-w-2xl font-light text-lg text-white/80 leading-relaxed md:text-2xl"
            variants={itemVariants}
          >
            {t("hero.description")}
          </motion.p>
          <motion.div
            className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start"
            variants={itemVariants}
          >
            <a
              href="https://wa.me/254710337605?text=Hello%2C%20I%20would%20like%20to%20request%20a%20quote.%20You%20can%20also%20reach%20me%20at%20operations@continental-miningservices.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="h-14 bg-secondary px-8 font-bold text-lg text-white shadow-secondary/20 shadow-xl hover:bg-secondary/90"
                size="lg"
              >
                {t("hero.button.quote")}
              </Button>
            </a>
            <Button
              className="h-14 border-white/20 bg-white/5 text-lg text-white backdrop-blur-sm hover:bg-white/10"
              size="lg"
              variant="outline"
              onClick={() => setShowFleetPopup(true)}
            >
              {t("hero.button.fleet")}
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Fleet Popup */}
      {showFleetPopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-[10px]"
          style={{ background: "rgba(0,0,0,0.70)" }}
          onClick={() => setShowFleetPopup(false)}
        >
          <div
            className="relative rounded-2xl p-8 w-full max-w-3xl shadow-2xl border border-white/20 text-white"
            style={{
              background: "rgba(20, 20, 30, 0.95)",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.18)",
              maxHeight: "80vh",
              overflowY: "auto",
            }}
            onClick={e => e.stopPropagation()}
          >
            <h3 className="mb-6 font-bold text-2xl text-white text-center">{t("rental.button.fleet")}</h3>
            <div className="flex flex-col gap-6">
              {fleet.map((item) => (
                <div key={item.key} className="flex items-center gap-6 bg-white/5 rounded-xl p-4">
                  <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded-lg border border-white/10" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <img src={logoImg} alt="logo" className="w-6 h-6 object-contain" />
                      <span className="font-bold text-lg">{item.title}</span>
                    </div>
                    <div className="text-white/80 mb-2 text-sm">{item.description}</div>
                    <ul className="text-white/90 text-xs grid grid-cols-2 gap-x-4 gap-y-1">
                      {item.specs.map((spec, i) => (
                        <li key={i}><span className="font-semibold">{spec.label}:</span> {spec.value}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="mt-8 rounded-lg bg-white/10 px-6 py-2 font-semibold text-white hover:bg-white/20 border border-white/30 block mx-auto"
              onClick={() => setShowFleetPopup(false)}
              type="button"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
