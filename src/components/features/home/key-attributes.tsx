/** biome-ignore-all lint/correctness/useImageSize: Easier to adjust sizes */
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
// Import capacity images
import ca1 from "@/assets/home/capacity/ca-01.jpeg";
import ca2 from "@/assets/home/capacity/ca-02.jpg";
import ca3 from "@/assets/home/capacity/ca-03.jpg";
import ca4 from "@/assets/home/capacity/ca-04.jpg";
// Import efficiency images
import ef1 from "@/assets/home/efficiency/ef-01.jpeg";
import ef2 from "@/assets/home/efficiency/ef-02.jpg";
import ef3 from "@/assets/home/efficiency/ef-03.png";
// Import reliability images
import re1 from "@/assets/home/reliability/re-01.jpg";
import re2 from "@/assets/home/reliability/re-02.webp";
// Import versatility image
import ve1 from "@/assets/home/versatility/ve-01.webp";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const BOLD_MARKER_REGEX = /\*\*/;

export const KeyAttributes = () => {
  const { t } = useTranslation();

  // Image mapping for attributes
  const attributeImages = {
    capacity: [ca1, ca2, ca3, ca4],
    reliability: [re1, re2],
    efficiency: [ef1, ef2, ef3],
    versatility: [ve1],
  };

  const attributes = [
    {
      key: "capacity",
    },
    {
      key: "reliability",
    },
    {
      key: "efficiency",
    },
    {
      key: "versatility",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section className="bg-primary py-24 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="mb-4 font-bold font-heading text-3xl text-white md:text-4xl">
            {t("keyAttributes.heading")}
          </h2>
          <p className="text-lg text-white/80">
            {t("keyAttributes.description")}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
          initial="hidden"
          variants={containerVariants}
          viewport={{ once: true }}
          whileInView="visible"
        >
          {attributes.map((attr) => {
            const title = t(`keyAttributes.items.${attr.key}.title`);
            const description = t(
              `keyAttributes.items.${attr.key}.description`
            );
            const boldText = t(`keyAttributes.items.${attr.key}.boldText`);

            // Split description by ** markers and bold the key phrase
            const parts = description.split(BOLD_MARKER_REGEX);
            const hasBold = parts.length > 1;

            return (
              <motion.div
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-xl"
                key={attr.key}
                variants={itemVariants}
              >
                {/* Image Area */}
                {(() => {
                  const images =
                    attributeImages[attr.key as keyof typeof attributeImages];

                  if (images.length > 1) {
                    // Multiple images - use carousel
                    return (
                      <div className="relative mb-6 h-64 overflow-hidden rounded-xl bg-gray-100">
                        <Carousel
                          className="h-full w-full"
                          plugins={[
                            Autoplay({
                              delay: 5000,
                            }),
                          ]}
                        >
                          <CarouselContent className="ml-0 h-64">
                            {images.map((img, imgIndex) => (
                              <CarouselItem
                                className="relative h-64 w-full pl-0"
                                key={`${attr.key}-img-${imgIndex}`}
                              >
                                <img
                                  alt={`${title} ${imgIndex + 1}`}
                                  className="absolute inset-0 h-full w-full object-cover object-center"
                                  src={img}
                                  title={`${title} ${imgIndex + 1}`}
                                />
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <div className="absolute top-1/2 left-2 z-10 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100">
                            <CarouselPrevious className="static h-8 w-8 translate-y-0 bg-white/80 hover:bg-white" />
                          </div>
                          <div className="absolute top-1/2 right-2 z-10 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100">
                            <CarouselNext className="static h-8 w-8 translate-y-0 bg-white/80 hover:bg-white" />
                          </div>
                        </Carousel>
                      </div>
                    );
                  }
                  // Single image - use simple img element
                  return (
                    <div className="relative mb-6 h-64 overflow-hidden rounded-xl bg-gray-100">
                      <img
                        alt={title}
                        className="h-full w-full object-cover object-center"
                        src={images[0]}
                        title={title}
                      />
                    </div>
                  );
                })()}

                {/* Content */}
                <div>
                  <h3 className="mb-4 font-bold font-heading text-2xl text-white">
                    {title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {hasBold
                      ? parts.map((part) =>
                          part === boldText ? (
                            <span className="font-bold text-white" key={part}>
                              {part}
                            </span>
                          ) : (
                            <span key={part}>{part}</span>
                          )
                        )
                      : description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
