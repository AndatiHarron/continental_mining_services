import { ArrowRightIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import bulldozerImg from "@/assets/home/bulldozer.webp";
import excavatorImg from "@/assets/home/excavators.avif";
import loaderImg from "@/assets/home/front_loaders.jpg";
import heavyDumpTrucksImg from "@/assets/home/heavy_dump_trucks.webp";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { RentalCard } from "./rental-card";

export const RentalTeaserSection = () => {
  const { t } = useTranslation();

  return (
    <section className="border-neutral-100 border-y bg-white py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 flex flex-col items-end justify-between gap-6 md:flex-row">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="mb-4 font-bold font-heading text-3xl text-primary md:text-4xl">
              {t("rental.heading")}
            </h2>
            <p className="max-w-xl text-lg text-muted-foreground">
              {t("rental.description")}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <Link to="/">
              <Button
                className="group font-semibold text-lg text-primary hover:bg-primary/5"
                variant="ghost"
              >
                {t("rental.button.fleet")}{" "}
                <HugeiconsIcon
                  className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                  icon={ArrowRightIcon}
                />
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Carousel className="w-full">
            <CarouselContent className="-ml-4 pt-8">
              <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                <RentalCard
                  description={t("rental.items.excavators.description")}
                  image={excavatorImg}
                  title={t("rental.items.excavators.title")}
                />
              </CarouselItem>
              <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                <RentalCard
                  description={t("rental.items.bulldozers.description")}
                  image={bulldozerImg}
                  title={t("rental.items.bulldozers.title")}
                />
              </CarouselItem>
              <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                <RentalCard
                  description={t("rental.items.loaders.description")}
                  image={loaderImg}
                  title={t("rental.items.loaders.title")}
                />
              </CarouselItem>
              <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                <RentalCard
                  description={t("rental.items.dumpTrucks.description")}
                  image={heavyDumpTrucksImg}
                  title={t("rental.items.dumpTrucks.title")}
                />
              </CarouselItem>
            </CarouselContent>
            <div className="absolute -top-7 -right-10 flex -translate-x-1/2 gap-4">
              <CarouselPrevious className="static translate-y-0" size="lg" />
              <CarouselNext className="static translate-y-0" size="lg" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};
