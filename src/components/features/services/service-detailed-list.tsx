/** biome-ignore-all lint/correctness/useImageSize: Easier to adjust sizes */
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
// Import container-movement images
// Efficient Loading
import el1 from "@/assets/services/container-movement/efficient-loading/el-1.jpg";
import el2 from "@/assets/services/container-movement/efficient-loading/el-2.avif";
import el3 from "@/assets/services/container-movement/efficient-loading/el-3.jpg";
import el4 from "@/assets/services/container-movement/efficient-loading/el-4.webp";
import el5 from "@/assets/services/container-movement/efficient-loading/el-5.jpg";
// Timely Delivery
import td1 from "@/assets/services/container-movement/timely-delivery/td-1.webp";
import td2 from "@/assets/services/container-movement/timely-delivery/td-2.webp";
// Flexible Rental Terms
import frt1 from "@/assets/services/earth-moving-equipment-rental/flexible-rental-terms/frt-01.avif";
import frt2 from "@/assets/services/earth-moving-equipment-rental/flexible-rental-terms/frt-02.jpg";
// Import earth-moving-equipment-rental images
// Modern Equipment
import me1 from "@/assets/services/earth-moving-equipment-rental/modern-equipment/me-01.webp";
import me2 from "@/assets/services/earth-moving-equipment-rental/modern-equipment/me-02.jpg";
// Import flatbed-cargo-movement images
// Efficient Transport
import et1 from "@/assets/services/flatbed-cargo-movement/efficient-transport/et-01.png";
import et2 from "@/assets/services/flatbed-cargo-movement/efficient-transport/et-02.jpg";
import et3 from "@/assets/services/flatbed-cargo-movement/efficient-transport/et-03.jpg";
import et4 from "@/assets/services/flatbed-cargo-movement/efficient-transport/et-04.jpg";
import et5 from "@/assets/services/flatbed-cargo-movement/efficient-transport/et-05.avif";
// Seamless Operations
import so1 from "@/assets/services/flatbed-cargo-movement/seamless-operations/so-01.jpeg";
import so2 from "@/assets/services/flatbed-cargo-movement/seamless-operations/so-02.jpg";
import vs1 from "@/assets/services/flatbed-cargo-movement/versatile-solutions/vs-01.jpg";
import vs2 from "@/assets/services/flatbed-cargo-movement/versatile-solutions/vs-02.webp";
import crewImg from "@/assets/services/mine-drilling/crew.webp";
// Import mine-drilling images
import drillImg from "@/assets/services/mine-drilling/drill.avif";
import drillingImg from "@/assets/services/mine-drilling/drilling.webp";
// Import ore-loading images
// Efficient Operations
import eo1 from "@/assets/services/ore-loading/efficient-operations/eo-1.webp";
import eo2 from "@/assets/services/ore-loading/efficient-operations/eo-2.jpg";
import eo3 from "@/assets/services/ore-loading/efficient-operations/eo-3.jpg";
import eo4 from "@/assets/services/ore-loading/efficient-operations/eo-4.jpg";
import eo5 from "@/assets/services/ore-loading/efficient-operations/eo-5.jpg";
import eo6 from "@/assets/services/ore-loading/efficient-operations/eo-6.jpg";
// Safe Transport
import st1 from "@/assets/services/ore-loading/safe-transport/st-1.webp";
import st2 from "@/assets/services/ore-loading/safe-transport/st-2.webp";
import st3 from "@/assets/services/ore-loading/safe-transport/st-3.jpg";
// Import tipper-truck-rentals images
// High-Capacity Fleet
import hcf1 from "@/assets/services/tipper-truck-rentals/high-capacity-fleet/hcf-01.png";
import hcf2 from "@/assets/services/tipper-truck-rentals/high-capacity-fleet/hcf-02.png";
import hcf3 from "@/assets/services/tipper-truck-rentals/high-capacity-fleet/hcf-03.png";
// Reliable Equipment
import re1 from "@/assets/services/tipper-truck-rentals/reliable-equipment/re-01.jpg";
import re2 from "@/assets/services/tipper-truck-rentals/reliable-equipment/re-02.webp";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const ServiceDetailedList = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || "en";

  const services = [
    {
      id: "oreHaulage",
      key: "oreHaulage",
    },
    {
      id: "mineDrilling",
      key: "mineDrilling",
    },
    {
      id: "flatbedCargo",
      key: "flatbedCargo",
    },
    {
      id: "containerMovement",
      key: "containerMovement",
    },
    {
      id: "tipperTruckRentals",
      key: "tipperTruckRentals",
    },
    {
      id: "earthMovingRental",
      key: "earthMovingRental",
    },
  ];

  // Image mapping for ore-loading service (bilingual)
  const oreLoadingImages = {
    "Efficient Operations": [eo1, eo2, eo3, eo4, eo5, eo6],
    "Opérations Efficaces": [eo1, eo2, eo3, eo4, eo5, eo6], // French
    "Safe Transport": [st1, st2, st3],
    "Transport Sécurisé": [st1, st2, st3], // French
  };

  // Image mapping for mine-drilling service (bilingual)
  const mineDrillingImages = {
    "Precision Drilling": [drillImg, drillingImg],
    "Forage de Précision": [drillImg, drillingImg], // French
    "Experienced Crew": [crewImg],
    "Équipe Expérimentée": [crewImg], // French
  };

  // Image mapping for container-movement service (bilingual)
  const containerMovementImages = {
    "Efficient Loading": [el1, el2, el3, el4, el5],
    "Chargement Efficace": [el1, el2, el3, el4, el5], // French
    "Timely Delivery": [td1, td2],
    "Livraison Ponctuelle": [td1, td2], // French
  };

  // Image mapping for earth-moving-equipment-rental service (bilingual)
  const earthMovingRentalImages = {
    "Modern Equipment": [me1, me2],
    "Équipement Moderne": [me1, me2], // French
    "Flexible Rental Terms": [frt1, frt2],
    "Conditions de Location Flexibles": [frt1, frt2], // French
  };

  // Image mapping for flatbed-cargo-movement service (bilingual)
  const flatbedCargoImages = {
    "Efficient Transport": [et1, et2, et3, et4, et5],
    "Transport Efficace": [et1, et2, et3, et4, et5], // French
    "Seamless Operations": [so1, so2],
    "Opérations Fluides": [so1, so2], // French
    "Versatile Solutions": [vs1, vs2],
    "Solutions Polyvalentes": [vs1, vs2], // French
  };

  // Image mapping for tipper-truck-rentals service (bilingual)
  const tipperTruckRentalsImages = {
    "High-Capacity Fleet": [hcf1, hcf2, hcf3],
    "Flotte à Haute Capacité": [hcf1, hcf2, hcf3], // French
    "Reliable Equipment": [re1, re2],
    "Équipement Fiable": [re1, re2], // French
  };

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section className="bg-neutral-bg py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="space-y-32"
          initial="hidden"
          key={`services-list-${currentLang}`}
          variants={containerVariants}
          viewport={{ once: true }}
          whileInView="visible"
        >
          {services.map((service, index) => {
            const title = t(`servicesPage.detailedList.${service.key}.title`);
            const subtitle = t(
              `servicesPage.detailedList.${service.key}.subtitle`
            );
            const description = t(
              `servicesPage.detailedList.${service.key}.description`
            );
            const featureCards = t(
              `servicesPage.detailedList.${service.key}.featureCards`,
              {
                returnObjects: true,
              }
            ) as Array<{ title: string; description: string }>;
            const ctaText = t(
              `servicesPage.detailedList.${service.key}.ctaText`
            );

            let gridCols = "md:grid-cols-2";
            if (featureCards.length === 3) {
              gridCols = "md:grid-cols-3";
            }

            return (
              <motion.div
                className="space-y-8"
                key={service.id}
                variants={itemVariants}
              >
                {/* Service Header */}
                <div className="text-center">
                  <h3 className="mb-2 font-bold font-heading text-3xl text-primary md:text-4xl">
                    {title}
                  </h3>
                  <p className="mb-4 font-semibold text-lg text-secondary">
                    {subtitle}
                  </p>
                  <p className="mx-auto max-w-3xl text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </div>

                {/* Feature Cards Grid */}
                <div className={`grid gap-6 ${gridCols}`}>
                  {featureCards.map((card) => {
                    const isOreLoading = service.key === "oreHaulage";
                    const isMineDrilling = service.key === "mineDrilling";
                    const isContainerMovement =
                      service.key === "containerMovement";
                    const isEarthMovingRental =
                      service.key === "earthMovingRental";
                    const isFlatbedCargo = service.key === "flatbedCargo";
                    const isTipperTruckRentals =
                      service.key === "tipperTruckRentals";

                    // Get images for the card based on service and card title
                    const getCardImages = (): string[] | null => {
                      const imageMappings: Record<
                        string,
                        Record<string, string[]>
                      > = {
                        oreHaulage: oreLoadingImages,
                        mineDrilling: mineDrillingImages,
                        containerMovement: containerMovementImages,
                        earthMovingRental: earthMovingRentalImages,
                        flatbedCargo: flatbedCargoImages,
                        tipperTruckRentals: tipperTruckRentalsImages,
                      };

                      const mapping = imageMappings[service.key];
                      if (mapping) {
                        return (
                          (mapping[card.title] as string[] | undefined) || null
                        );
                      }
                      return null;
                    };

                    const cardImages = getCardImages();

                    return (
                      <motion.div
                        className="group overflow-hidden rounded-2xl border border-white/40 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5"
                        key={`${service.id}-${card.title}-${currentLang}`}
                        variants={itemVariants}
                      >
                        {/* Image Area */}
                        {(isOreLoading ||
                          isMineDrilling ||
                          isContainerMovement ||
                          isEarthMovingRental ||
                          isFlatbedCargo ||
                          isTipperTruckRentals) &&
                        cardImages ? (
                          <div className="relative aspect-3/2 w-full overflow-hidden bg-gray-100">
                            <Carousel
                              className="absolute inset-0 h-full w-full [&>div]:h-full"
                              key={`carousel-${service.id}-${card.title}-${currentLang}`}
                              plugins={[
                                Autoplay({
                                  delay: 5000,
                                }),
                              ]}
                            >
                              <CarouselContent className="ml-0 h-full">
                                {cardImages.map((img, imgIndex) => (
                                  <CarouselItem
                                    className="relative h-full w-full pl-0"
                                    key={`${card.title}-img-${imgIndex}-${currentLang}`}
                                  >
                                    <img
                                      alt={`${card.title} ${imgIndex + 1}`}
                                      className="absolute inset-0 h-full w-full object-cover object-center"
                                      src={img}
                                      title={`${card.title} ${imgIndex + 1}`}
                                    />
                                  </CarouselItem>
                                ))}
                              </CarouselContent>
                              {cardImages.length > 1 && (
                                <>
                                  <CarouselPrevious className="absolute top-1/2 left-2 z-10 h-8 w-8 translate-x-0 -translate-y-1/2 bg-white/80 opacity-0 transition-opacity hover:bg-white group-hover:opacity-100" />
                                  <CarouselNext className="absolute top-1/2 right-2 z-10 h-8 w-8 translate-x-0 -translate-y-1/2 bg-white/80 opacity-0 transition-opacity hover:bg-white group-hover:opacity-100" />
                                </>
                              )}
                            </Carousel>
                          </div>
                        ) : (
                          /* Fallback Image Placeholder */
                          <div className="relative h-64 overflow-hidden bg-linear-to-br from-primary/20 to-secondary/20">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-center text-white/40">
                                <div className="mb-2 font-bold text-4xl opacity-20">
                                  {index + 1}
                                </div>
                                <p className="font-medium text-xs">
                                  {card.title}
                                </p>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Card Content */}
                        <div className="p-6">
                          <h4 className="mb-3 font-bold font-heading text-primary text-xl">
                            {card.title}
                          </h4>
                          <p className="text-muted-foreground leading-relaxed">
                            {card.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* CTA Button */}
                <div className="flex justify-center">
                  <Button
                    className="bg-secondary font-semibold text-white hover:bg-secondary/90"
                    size="lg"
                  >
                    {ctaText}
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
