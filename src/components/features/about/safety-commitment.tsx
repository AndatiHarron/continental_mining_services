import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import sa1 from "@/assets/about-us/safety/sa-01.jpg";
import sa2 from "@/assets/about-us/safety/sa-02.jpg";

export const SafetyCommitment = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const [showPopup, setShowPopup] = useState(false);

  return (
    <section
      className="relative overflow-hidden bg-primary py-24 text-white"
      ref={ref}
    >
      <motion.div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=2574&auto=format&fit=crop')] bg-center bg-cover opacity-10 mix-blend-overlay"
        style={{ y }}
      />
      <div className="absolute inset-0 bg-linear-to-r from-primary/90 via-primary/80 to-primary/90" />
      <div className="container relative mx-auto px-4 md:px-6">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="mb-6 font-bold font-heading text-3xl md:text-5xl">
            {t("about.safetyCommitment.headline")}
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-white/80 text-xl leading-relaxed">
            {t("about.safetyCommitment.text")}
          </p>
          <motion.div
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              className="h-14 border-white/20 bg-white/5 px-10 font-bold text-lg text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:shadow-lg hover:shadow-white/5"
              size="lg"
              variant="outline"
              onClick={() => setShowPopup(true)}
            >
              {t("about.safetyCommitment.ctaButton.text")}
            </Button>
          </motion.div>
        </motion.div>
      </div>
      {showPopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-[10px]"
          style={{ background: "rgba(0,0,0,0.60)" }}
          onClick={() => setShowPopup(false)}
        >
          <div
            className="relative rounded-2xl p-8 w-full max-w-2xl shadow-2xl border border-white/20 text-white"
            style={{
              background: "rgba(20, 20, 30, 0.85)",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.18)",
            }}
            onClick={e => e.stopPropagation()}
          >
            <h3 className="mb-4 font-bold text-2xl text-white">Mining Safety Policy & Best Practices</h3>
            <div className="flex flex-col md:flex-row gap-6 mb-4">
              <img src={sa1} alt="Safety in Mining 1" className="rounded-lg w-full md:w-1/2 object-cover max-h-60" />
              <img src={sa2} alt="Safety in Mining 2" className="rounded-lg w-full md:w-1/2 object-cover max-h-60" />
            </div>
            <ul className="mb-4 space-y-2 text-white text-base text-left">
              <li><b>Comprehensive Training:</b> All personnel must undergo rigorous safety training before entering mining sites.</li>
              <li><b>Personal Protective Equipment (PPE):</b> Mandatory use of helmets, gloves, boots, high-visibility vests, and respiratory protection.</li>
              <li><b>Hazard Identification:</b> Continuous risk assessment and hazard identification to prevent accidents.</li>
              <li><b>Equipment Safety:</b> Regular inspection and maintenance of all machinery and vehicles.</li>
              <li><b>Emergency Preparedness:</b> Clear evacuation plans, regular drills, and accessible first-aid kits.</li>
              <li><b>Environmental Protection:</b> Measures to prevent contamination and protect local ecosystems.</li>
              <li><b>Health Monitoring:</b> Ongoing health checks for all workers to detect and address issues early.</li>
              <li><b>Communication:</b> Reliable communication systems for reporting hazards and emergencies.</li>
              <li><b>Compliance:</b> Adherence to all local and international mining safety regulations and standards.</li>
            </ul>
            <button
              className="mt-2 rounded-lg bg-white/10 px-6 py-2 font-semibold text-white hover:bg-white/20 border border-white/30"
              onClick={() => setShowPopup(false)}
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
