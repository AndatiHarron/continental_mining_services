import { ArrowRightIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useState } from "react";

interface RentalCardProps {
  image: string;
  title: string;
  description: string;
}

export const RentalCard = ({ image, title, description }: RentalCardProps) => {
  const { t } = useTranslation();
  const [showSpecs, setShowSpecs] = useState(false);
  const [hoveringSpecs, setHoveringSpecs] = useState(false);

  // Hyundai Dump Truck (HA45A) specs example
  const specs = [
    { label: "Model", value: "HA45A" },
    { label: "Type", value: "Articulated Dump Truck" },
    { label: "Rated Payload", value: "41 ton" },
    { label: "Operating Weight", value: "30.5 ton" },
    { label: "Rated Power", value: "368 kW / 2,100 rpm" },
    { label: "Emission", value: "STAGE V" },
  ];

  // Only show popup if either clicked or hovering the button
  const shouldShowSpecs = showSpecs || hoveringSpecs;

  return (
    <div className="group relative aspect-4/5 overflow-hidden rounded-xl md:aspect-3/4">
      <motion.div
        className="h-full w-full"
        transition={{ duration: 0.7 }}
        whileHover={{ scale: 1.1 }}
      >
        <img
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700"
          height={100}
          src={image}
          title={title}
          width={100}
        />
      </motion.div>
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-80" />
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
        <h3 className="mb-2 font-bold font-heading text-2xl text-white">
          {title}
        </h3>
        <p className="mb-4 line-clamp-2 text-white/70">{description}</p>
        <button
          className="inline-flex items-center font-bold text-secondary text-sm uppercase tracking-wider transition-colors group-hover:text-white focus:outline-none"
          onClick={() => setShowSpecs((v) => !v)}
          onMouseEnter={() => setHoveringSpecs(true)}
          onMouseLeave={() => setHoveringSpecs(false)}
          type="button"
        >
          {t("rental.card.viewSpecs")} {" "}
          <HugeiconsIcon className="ml-1 h-4 w-4" icon={ArrowRightIcon} />
        </button>
      </div>
      {shouldShowSpecs && (
        <div
          className="absolute inset-0 z-20 flex items-center justify-center bg-black/30 backdrop-blur-[8px]"
          style={{ background: "rgba(255,255,255,0.10)" }}
          onClick={() => setShowSpecs(false)}
        >
          <div
            className="relative rounded-2xl p-8 w-80 max-w-full shadow-2xl border border-white/20"
            style={{
              background:
                "rgba(255,255,255,0.25)",
              boxShadow:
                "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.18)",
            }}
            onClick={e => e.stopPropagation()}
            onMouseEnter={() => setHoveringSpecs(true)}
            onMouseLeave={() => {
              setHoveringSpecs(false);
              setShowSpecs(false);
            }}
          >
            <h4 className="mb-4 font-bold text-xl text-primary">{title} Specs</h4>
            <ul className="mb-4 space-y-2">
              {specs.map((spec, idx) => (
                <li key={idx} className="flex justify-between text-base text-primary/90">
                  <span className="font-medium">{spec.label}:</span>
                  <span>{spec.value}</span>
                </li>
              ))}
            </ul>
            <button
              className="mt-2 rounded-lg bg-primary px-4 py-2 font-semibold text-white hover:bg-primary/90"
              onClick={() => {
                setShowSpecs(false);
                setHoveringSpecs(false);
              }}
              type="button"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
