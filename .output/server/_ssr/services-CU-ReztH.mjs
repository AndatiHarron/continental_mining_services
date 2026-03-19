import { j as jsxRuntimeExports, r as reactExports } from "../_chunks/_libs/react.mjs";
import { L as Layout, B as Button } from "./layout-Cge3f9-K.mjs";
import { H as Hn } from "../_chunks/_libs/@hugeicons/core-free-icons.mjs";
import { L as Link } from "../_chunks/_libs/@tanstack/react-router.mjs";
import { A as Autoplay } from "../_libs/embla-carousel-autoplay.mjs";
import { C as Carousel, a as CarouselContent, b as CarouselItem, c as CarouselPrevious, d as CarouselNext } from "./carousel-Cw4F2ZAm.mjs";
import { u as useTranslation } from "../_libs/react-i18next.mjs";
import { m as motion, u as useScroll, a as useTransform } from "../_libs/framer-motion.mjs";
import { H as HugeiconsIcon } from "../_chunks/_libs/@hugeicons/react.mjs";
import "./router-C94rKTxU.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/i18next.mjs";
import "../_libs/_jlZyyM7A.mjs";
import "../_libs/i18next-http-backend.mjs";
import "../_chunks/_libs/@tanstack/router-core.mjs";
import "../_libs/tiny-invariant.mjs";
import "../_chunks/_libs/@tanstack/history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/tiny-warning.mjs";
import "../_chunks/_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/use-sync-external-store.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_chunks/_libs/@base-ui/react.mjs";
import "../_libs/tabbable.mjs";
import "../_chunks/_libs/@floating-ui/utils.mjs";
import "../_chunks/_libs/@base-ui/utils.mjs";
import "../_libs/reselect.mjs";
import "../_libs/embla-carousel-react.mjs";
import "../_libs/embla-carousel-reactive-utils.mjs";
import "../_libs/embla-carousel.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const CtaFooterBanner = () => {
  const { t } = useTranslation();
  const ref = reactExports.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      className: "relative overflow-hidden bg-primary py-24 text-white",
      ref,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=2574&auto=format&fit=crop')] bg-center bg-cover opacity-20 mix-blend-overlay",
            style: { y }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-linear-to-t from-primary/90 via-primary/40 to-primary/90" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-radial-[circle_at_center] from-transparent to-black/30" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container relative mx-auto px-4 text-center md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            whileInView: { opacity: 1, y: 0 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-6 font-bold font-heading text-3xl md:text-5xl", children: t("servicesPage.ctaBanner.headline") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mb-10 max-w-2xl text-white/80 text-xl", children: t("servicesPage.ctaBanner.subheadline") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  transition: { type: "spring", stiffness: 400, damping: 10 },
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      className: "h-14 bg-white px-10 font-bold text-lg text-primary hover:bg-white/90",
                      size: "lg",
                      children: t("servicesPage.ctaBanner.buttonText")
                    }
                  )
                }
              )
            ]
          }
        ) })
      ]
    }
  );
};
const EquipmentRentalTeaser = () => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gray-50 py-24 text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      className: "mx-auto max-w-3xl text-center",
      initial: { opacity: 0, y: 30 },
      transition: { duration: 0.8, ease: "easeOut" },
      viewport: { once: true },
      whileInView: { opacity: 1, y: 0 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-6 font-bold font-heading text-3xl text-primary md:text-4xl", children: t("servicesPage.rentalTeaser.headline") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-8 text-lg text-muted-foreground leading-relaxed", children: t("servicesPage.rentalTeaser.text") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: t("servicesPage.rentalTeaser.buttonLink"), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            className: "group bg-secondary font-semibold text-lg text-white hover:bg-secondary/90",
            size: "lg",
            children: [
              t("servicesPage.rentalTeaser.buttonText"),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                HugeiconsIcon,
                {
                  className: "ml-2 h-5 w-5 transition-transform group-hover:translate-x-1",
                  icon: Hn
                }
              )
            ]
          }
        ) })
      ]
    }
  ) }) });
};
const IntroText = () => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-neutral-bg py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      className: "mx-auto max-w-3xl text-center",
      initial: { opacity: 0, y: 30 },
      transition: { duration: 0.8, ease: "easeOut" },
      viewport: { once: true },
      whileInView: { opacity: 1, y: 0 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-6 font-bold font-heading text-3xl text-primary md:text-4xl", children: t("servicesPage.introText.headline") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground leading-relaxed", children: t("servicesPage.introText.text") })
      ]
    }
  ) }) });
};
const heroBg = "/assets/bg_o-CWnqzSzd.jpg";
const PageHeader = () => {
  const { t } = useTranslation();
  const breadcrumbs = t("servicesPage.pageHeader.breadcrumbs", {
    returnObjects: true
  });
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-primary", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 z-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          animate: { scale: 1.05 },
          className: "h-full w-full",
          initial: { scale: 1 },
          transition: {
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "linear"
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              alt: "Services Hero Background",
              className: "h-full w-full object-cover",
              height: 100,
              src: heroBg,
              title: "Services Hero Background",
              width: 100
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black opacity-50" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container relative z-10 px-4 pt-20 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        className: "mx-auto max-w-4xl text-center",
        initial: "hidden",
        variants: containerVariants,
        viewport: { once: true },
        whileInView: "visible",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.nav,
            {
              "aria-label": "Breadcrumb",
              className: "mb-6 flex items-center justify-center gap-2 text-sm text-white/70",
              variants: itemVariants,
              children: breadcrumbs.map((crumb, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                index > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40", children: "/" }),
                index === breadcrumbs.length - 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: crumb }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    className: "transition-colors hover:text-white",
                    to: index === 0 ? "/" : "/services",
                    children: crumb
                  }
                )
              ] }, crumb))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.h1,
            {
              className: "mb-6 font-bold font-heading text-4xl text-white leading-tight md:text-5xl lg:text-6xl",
              variants: itemVariants,
              children: t("servicesPage.pageHeader.title")
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              className: "mx-auto max-w-2xl font-light text-lg text-white/80 leading-relaxed md:text-xl",
              variants: itemVariants,
              children: t("servicesPage.pageHeader.subtitle")
            }
          )
        ]
      }
    ) })
  ] });
};
const el1 = "/assets/el-1-B2FFSErX.jpg";
const el2 = "/assets/el-2-CvHMQsEF.avif";
const el3 = "/assets/el-3-B-28Mf7B.jpg";
const el4 = "/assets/el-4-BQVivoVv.webp";
const el5 = "/assets/el-5-CqPePhfn.jpg";
const td1 = "/assets/td-1-D-bkj8Ii.webp";
const td2 = "/assets/td-2-hh1pFHy3.webp";
const frt1 = "/assets/el-2-CvHMQsEF.avif";
const frt2 = "/assets/frt-02-DBuZKSeZ.jpg";
const me1 = "/assets/eo-1-QLTVphYD.webp";
const me2 = "/assets/me-02-CUJqsiNJ.jpg";
const et1 = "/assets/et-01-CwZSJp_a.png";
const et2 = "/assets/et-02-CsQEioER.jpg";
const et3 = "/assets/et-03-DjCwfxZl.jpg";
const et4 = "/assets/et-04-CyBy-Byn.jpg";
const et5 = "/assets/et-05-IjMqVLor.avif";
const so1 = "/assets/so-01-BZQXD1Qv.jpeg";
const so2 = "/assets/so-02-zpV4UEbw.jpg";
const vs1 = "/assets/et-02-CsQEioER.jpg";
const vs2 = "/assets/vs-02-DVfeR4iF.webp";
const crewImg = "/assets/crew-C-lpl__d.webp";
const drillImg = "/assets/drill-DLbXwzfG.avif";
const drillingImg = "/assets/drilling-DifqaHUL.webp";
const eo1 = "/assets/eo-1-QLTVphYD.webp";
const eo2 = "/assets/eo-2-DBrCyK70.jpg";
const eo3 = "/assets/eo-3-BEdE9mIV.jpg";
const eo4 = "/assets/eo-4-D8DsUjom.jpg";
const eo5 = "/assets/eo-5-5P7yX2PW.jpg";
const eo6 = "/assets/eo-6-CcHM5h0C.jpg";
const st1 = "/assets/st-1-B8cmPIL4.webp";
const st2 = "/assets/st-2-7s-zQB5x.webp";
const st3 = "/assets/st-3-D34hOgpe.jpg";
const hcf1 = "/assets/hcf-01-DAM9NNNs.png";
const hcf2 = "/assets/hcf-02-BhB0QuuY.png";
const hcf3 = "/assets/hcf-03-DeXt5Ssz.png";
const re1 = "/assets/re-01-Codbkata.jpg";
const re2 = "/assets/re-02-oxOWgx7-.webp";
const ServiceDetailedList = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || "en";
  const services = [
    {
      id: "oreHaulage",
      key: "oreHaulage"
    },
    {
      id: "mineDrilling",
      key: "mineDrilling"
    },
    {
      id: "flatbedCargo",
      key: "flatbedCargo"
    },
    {
      id: "containerMovement",
      key: "containerMovement"
    },
    {
      id: "tipperTruckRentals",
      key: "tipperTruckRentals"
    },
    {
      id: "earthMovingRental",
      key: "earthMovingRental"
    }
  ];
  const oreLoadingImages = {
    "Efficient Operations": [eo1, eo2, eo3, eo4, eo5, eo6],
    "Opérations Efficaces": [eo1, eo2, eo3, eo4, eo5, eo6],
    // French
    "Safe Transport": [st1, st2, st3],
    "Transport Sécurisé": [st1, st2, st3]
    // French
  };
  const mineDrillingImages = {
    "Precision Drilling": [drillImg, drillingImg],
    "Forage de Précision": [drillImg, drillingImg],
    // French
    "Experienced Crew": [crewImg],
    "Équipe Expérimentée": [crewImg]
    // French
  };
  const containerMovementImages = {
    "Efficient Loading": [el1, el2, el3, el4, el5],
    "Chargement Efficace": [el1, el2, el3, el4, el5],
    // French
    "Timely Delivery": [td1, td2],
    "Livraison Ponctuelle": [td1, td2]
    // French
  };
  const earthMovingRentalImages = {
    "Modern Equipment": [me1, me2],
    "Équipement Moderne": [me1, me2],
    // French
    "Flexible Rental Terms": [frt1, frt2],
    "Conditions de Location Flexibles": [frt1, frt2]
    // French
  };
  const flatbedCargoImages = {
    "Efficient Transport": [et1, et2, et3, et4, et5],
    "Transport Efficace": [et1, et2, et3, et4, et5],
    // French
    "Seamless Operations": [so1, so2],
    "Opérations Fluides": [so1, so2],
    // French
    "Versatile Solutions": [vs1, vs2],
    "Solutions Polyvalentes": [vs1, vs2]
    // French
  };
  const tipperTruckRentalsImages = {
    "High-Capacity Fleet": [hcf1, hcf2, hcf3],
    "Flotte à Haute Capacité": [hcf1, hcf2, hcf3],
    // French
    "Reliable Equipment": [re1, re2],
    "Équipement Fiable": [re1, re2]
    // French
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-neutral-bg py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className: "space-y-32",
      initial: "hidden",
      variants: containerVariants,
      viewport: { once: true },
      whileInView: "visible",
      children: services.map((service, index) => {
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
            returnObjects: true
          }
        );
        const ctaText = t(
          `servicesPage.detailedList.${service.key}.ctaText`
        );
        let gridCols = "md:grid-cols-2";
        if (featureCards.length === 3) {
          gridCols = "md:grid-cols-3";
        }
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            className: "space-y-8",
            variants: itemVariants,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-2 font-bold font-heading text-3xl text-primary md:text-4xl", children: title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 font-semibold text-lg text-secondary", children: subtitle }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto max-w-3xl text-muted-foreground leading-relaxed", children: description })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `grid gap-6 ${gridCols}`, children: featureCards.map((card) => {
                const isOreLoading = service.key === "oreHaulage";
                const isMineDrilling = service.key === "mineDrilling";
                const isContainerMovement = service.key === "containerMovement";
                const isEarthMovingRental = service.key === "earthMovingRental";
                const isFlatbedCargo = service.key === "flatbedCargo";
                const isTipperTruckRentals = service.key === "tipperTruckRentals";
                const getCardImages = () => {
                  const imageMappings = {
                    oreHaulage: oreLoadingImages,
                    mineDrilling: mineDrillingImages,
                    containerMovement: containerMovementImages,
                    earthMovingRental: earthMovingRentalImages,
                    flatbedCargo: flatbedCargoImages,
                    tipperTruckRentals: tipperTruckRentalsImages
                  };
                  const mapping = imageMappings[service.key];
                  if (mapping) {
                    return mapping[card.title] || null;
                  }
                  return null;
                };
                const cardImages = getCardImages();
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    className: "group overflow-hidden rounded-2xl border border-white/40 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5",
                    variants: itemVariants,
                    children: [
                      (isOreLoading || isMineDrilling || isContainerMovement || isEarthMovingRental || isFlatbedCargo || isTipperTruckRentals) && cardImages ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-3/2 w-full overflow-hidden bg-gray-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Carousel,
                        {
                          className: "absolute inset-0 h-full w-full [&>div]:h-full",
                          plugins: [
                            Autoplay({
                              delay: 5e3
                            })
                          ],
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselContent, { className: "ml-0 h-full", children: cardImages.map((img, imgIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                              CarouselItem,
                              {
                                className: "relative h-full w-full pl-0",
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "img",
                                  {
                                    alt: `${card.title} ${imgIndex + 1}`,
                                    className: "absolute inset-0 h-full w-full object-cover object-center",
                                    src: img,
                                    title: `${card.title} ${imgIndex + 1}`
                                  }
                                )
                              },
                              `${card.title}-img-${imgIndex}-${currentLang}`
                            )) }),
                            cardImages.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselPrevious, { className: "absolute top-1/2 left-2 z-10 h-8 w-8 translate-x-0 -translate-y-1/2 bg-white/80 opacity-0 transition-opacity hover:bg-white group-hover:opacity-100" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselNext, { className: "absolute top-1/2 right-2 z-10 h-8 w-8 translate-x-0 -translate-y-1/2 bg-white/80 opacity-0 transition-opacity hover:bg-white group-hover:opacity-100" })
                            ] })
                          ]
                        },
                        `carousel-${service.id}-${card.title}-${currentLang}`
                      ) }) : (
                        /* Fallback Image Placeholder */
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-64 overflow-hidden bg-linear-to-br from-primary/20 to-secondary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center text-white/40", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 font-bold text-4xl opacity-20", children: index + 1 }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-xs", children: card.title })
                        ] }) }) })
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-3 font-bold font-heading text-primary text-xl", children: card.title }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: card.description })
                      ] })
                    ]
                  },
                  `${service.id}-${card.title}-${currentLang}`
                );
              }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  className: "bg-secondary font-semibold text-white hover:bg-secondary/90",
                  size: "lg",
                  children: ctaText
                }
              ) })
            ]
          },
          service.id
        );
      })
    },
    `services-list-${currentLang}`
  ) }) });
};
function Services() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(IntroText, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceDetailedList, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EquipmentRentalTeaser, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CtaFooterBanner, {})
  ] });
}
export {
  Services as component
};
