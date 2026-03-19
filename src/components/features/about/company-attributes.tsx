import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
// Import capacity images
import ca1 from "@/assets/about-us/capacity/ca-01.jpeg";
import ca2 from "@/assets/about-us/capacity/ca-02.jpg";
import ca3 from "@/assets/about-us/capacity/ca-03.jpg";
import ca4 from "@/assets/about-us/capacity/ca-04.jpg";
// Import safety images
import sa1 from "@/assets/about-us/safety/sa-01.jpg";
import sa2 from "@/assets/about-us/safety/sa-02.jpg";
// Import technology images
import tech1 from "@/assets/about-us/technology/tech-01.jpg";
import tech2 from "@/assets/about-us/technology/tech-02.jpg";
// Import versatility image
import ve1 from "@/assets/about-us/versatility/ve-01.webp";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const BOLD_MARKER_REGEX = /\*\*/;

export const CompanyAttributes = () => {
  const { t } = useTranslation();

  // Image mapping for attributes
  const attributeImages = {
    capacity: [ca1, ca2, ca3, ca4],
    versatility: [ve1],
    safety: [sa1, sa2],
    technology: [tech1, tech2],
  };

  const attributes = [
    {
      key: "capacity",
    },
    {
      key: "versatility",
    },
    {
      key: "safety",
    },
    {
      key: "technology",
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
    <section className="bg-white py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="mb-4 font-bold font-heading text-3xl text-primary md:text-4xl">
            {t("about.companyAttributes.heading")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("about.companyAttributes.description")}
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
            const title = t(`about.companyAttributes.items.${attr.key}.title`);
            const description = t(
              `about.companyAttributes.items.${attr.key}.description`
            );
            const boldText = t(
              `about.companyAttributes.items.${attr.key}.boldText`
            );

            // Split description by ** markers and bold the key phrase
            const parts = description.split(BOLD_MARKER_REGEX);
            const hasBold = parts.length > 1;

            return (
              <motion.div
                className="group overflow-hidden rounded-2xl border border-white/40 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5"
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
                          <CarouselContent className="h-full">
                            {images.map((img, imgIndex) => (
                              <CarouselItem
                                className="h-full w-full"
                                key={`${attr.key}-img-${imgIndex}`}
                              >
                                <img
                                  alt={`${title} ${imgIndex + 1}`}
                                  className="h-full w-full object-cover"
                                  height={400}
                                  src={img}
                                  title={`${title} ${imgIndex + 1}`}
                                  width={600}
                                />
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <div className="absolute top-1/2 left-2 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100">
                            <CarouselPrevious className="static h-8 w-8 translate-y-0 bg-white/80 hover:bg-white" />
                          </div>
                          <div className="absolute top-1/2 right-2 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100">
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
                        className="h-full w-full object-cover"
                        height={400}
                        src={images[0]}
                        title={title}
                        width={600}
                      />
                    </div>
                  );
                })()}

                {/* Content */}
                <div>
                  <h3 className="mb-4 font-bold font-heading text-2xl text-primary">
                    {title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {hasBold
                      ? parts.map((part) =>
                          part === boldText ? (
                            <span className="font-bold text-primary" key={part}>
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
