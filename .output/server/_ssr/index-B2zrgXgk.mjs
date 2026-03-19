import { j as jsxRuntimeExports, r as reactExports } from "../_chunks/_libs/react.mjs";
import { L as Layout, B as Button, l as logoImg } from "./layout-Cge3f9-K.mjs";
import { A as Autoplay } from "../_libs/embla-carousel-autoplay.mjs";
import { C as Carousel, a as CarouselContent, b as CarouselItem, c as CarouselPrevious, d as CarouselNext } from "./carousel-Cw4F2ZAm.mjs";
import { c as Khr, s as sHr, d as H6, H as Hn } from "../_chunks/_libs/@hugeicons/core-free-icons.mjs";
import { L as Link } from "../_chunks/_libs/@tanstack/react-router.mjs";
import { C as Card, a as CardContent } from "./router-C94rKTxU.mjs";
import { u as useTranslation } from "../_libs/react-i18next.mjs";
import { m as motion, u as useScroll, a as useTransform } from "../_libs/framer-motion.mjs";
import { H as HugeiconsIcon } from "../_chunks/_libs/@hugeicons/react.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_chunks/_libs/@base-ui/react.mjs";
import "../_libs/tabbable.mjs";
import "../_chunks/_libs/@floating-ui/utils.mjs";
import "../_chunks/_libs/@base-ui/utils.mjs";
import "../_libs/reselect.mjs";
import "../_libs/use-sync-external-store.mjs";
import "../_chunks/_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/embla-carousel-react.mjs";
import "../_libs/embla-carousel-reactive-utils.mjs";
import "../_libs/embla-carousel.mjs";
import "../_chunks/_libs/@tanstack/router-core.mjs";
import "../_libs/tiny-invariant.mjs";
import "../_chunks/_libs/@tanstack/history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/tiny-warning.mjs";
import "../_libs/isbot.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/i18next.mjs";
import "../_libs/_jlZyyM7A.mjs";
import "../_libs/i18next-http-backend.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const CtaSection = () => {
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-6 font-bold font-heading text-3xl md:text-5xl", children: t("cta.heading") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mb-10 max-w-2xl text-white/80 text-xl", children: t("cta.description") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  transition: { type: "spring", stiffness: 400, damping: 10 },
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/contact-us", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      className: "h-14 bg-white px-10 font-bold text-lg text-primary hover:bg-white/90",
                      size: "lg",
                      children: t("cta.button")
                    }
                  ) })
                }
              )
            ]
          }
        ) })
      ]
    }
  );
};
const heroBg = "/assets/eo-4-D8DsUjom.jpg";
const excavatorImg = "/assets/excavators-BNQu-APY.avif";
const bulldozerImg = "/assets/bulldozer-ozfsGf6s.webp";
const loaderImg = "/assets/ca-03-ByJ-zvWX.jpg";
const heavyDumpTrucksImg = "/assets/heavy_dump_trucks-CrQQUY-N.webp";
const HeroSection = () => {
  const { t } = useTranslation();
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
    }
  };
  const [showFleetPopup, setShowFleetPopup] = reactExports.useState(false);
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
        { label: "Bucket Capacity", value: "0.8-2.1 m³" }
      ]
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
        { label: "Blade Capacity", value: "3.5-7.0 m³" }
      ]
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
        { label: "Bucket Capacity", value: "1.8-4.5 m³" }
      ]
    },
    {
      key: "dumpTrucks",
      title: t("rental.items.dumpTrucks.title"),
      description: t("rental.items.dumpTrucks.description"),
      image: heavyDumpTrucksImg,
      icon: null,
      specs: [
        { label: "Payload", value: "41 ton" },
        { label: "Engine Power", value: "368 kW" },
        { label: "Drive", value: "6x6, 8x8" }
      ]
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative flex min-h-screen items-center justify-center overflow-hidden bg-black", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 z-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
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
            alt: t("hero.image.alt"),
            className: "h-full w-full object-cover opacity-60",
            height: 1080,
            src: heroBg,
            title: t("hero.image.alt"),
            width: 1920
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container relative z-10 px-4 pt-20 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        className: "mx-auto max-w-4xl text-center md:text-left",
        initial: "hidden",
        variants: containerVariants,
        viewport: { once: true },
        whileInView: "visible",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.span,
            {
              className: "mb-6 inline-block rounded-full border border-white/20 bg-white/5 px-6 py-2 font-bold text-sm text-white uppercase tracking-wider shadow-lg backdrop-blur-xl transition-all hover:bg-white/10",
              variants: itemVariants,
              children: t("hero.badge")
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.h1,
            {
              className: "mb-6 font-bold font-heading text-4xl text-white leading-tight md:text-6xl lg:text-7xl",
              variants: itemVariants,
              children: [
                t("hero.heading.part1"),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", { className: "hidden md:block" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-linear-to-r from-white to-white/70 bg-clip-text text-transparent", children: t("hero.heading.part2") })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              className: "mb-10 max-w-2xl font-light text-lg text-white/80 leading-relaxed md:text-2xl",
              variants: itemVariants,
              children: t("hero.description")
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "flex flex-col justify-center gap-4 sm:flex-row md:justify-start",
              variants: itemVariants,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "https://wa.me/254710337605?text=Hello%2C%20I%20would%20like%20to%20request%20a%20quote.%20You%20can%20also%20reach%20me%20at%20operations@continental-miningservices.com",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        className: "h-14 bg-secondary px-8 font-bold text-lg text-white shadow-secondary/20 shadow-xl hover:bg-secondary/90",
                        size: "lg",
                        children: t("hero.button.quote")
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    className: "h-14 border-white/20 bg-white/5 text-lg text-white backdrop-blur-sm hover:bg-white/10",
                    size: "lg",
                    variant: "outline",
                    onClick: () => setShowFleetPopup(true),
                    children: t("hero.button.fleet")
                  }
                )
              ]
            }
          )
        ]
      }
    ) }),
    showFleetPopup && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-[10px]",
        style: { background: "rgba(0,0,0,0.70)" },
        onClick: () => setShowFleetPopup(false),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative rounded-2xl p-8 w-full max-w-3xl shadow-2xl border border-white/20 text-white",
            style: {
              background: "rgba(20, 20, 30, 0.95)",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.18)",
              maxHeight: "80vh",
              overflowY: "auto"
            },
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-6 font-bold text-2xl text-white text-center", children: t("rental.button.fleet") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-6", children: fleet.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6 bg-white/5 rounded-xl p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.image, alt: item.title, className: "w-24 h-24 object-cover rounded-lg border border-white/10" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoImg, alt: "logo", className: "w-6 h-6 object-contain" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-lg", children: item.title })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/80 mb-2 text-sm", children: item.description }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "text-white/90 text-xs grid grid-cols-2 gap-x-4 gap-y-1", children: item.specs.map((spec, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
                      spec.label,
                      ":"
                    ] }),
                    " ",
                    spec.value
                  ] }, i)) })
                ] })
              ] }, item.key)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  className: "mt-8 rounded-lg bg-white/10 px-6 py-2 font-semibold text-white hover:bg-white/20 border border-white/30 block mx-auto",
                  onClick: () => setShowFleetPopup(false),
                  type: "button",
                  children: "Close"
                }
              )
            ]
          }
        )
      }
    )
  ] });
};
const ca1 = "/assets/ca-01-DILw52ZT.jpeg";
const ca2 = "/assets/eo-2-DBrCyK70.jpg";
const ca3 = "/assets/ca-03-ByJ-zvWX.jpg";
const ca4 = "/assets/ca-04-p42hzUar.jpg";
const ef1 = "/assets/ef-01-DWiH4kdM.jpeg";
const ef2 = "/assets/ef-02-CwePIN6F.jpg";
const ef3 = "/assets/ef-03-BlnyDWEk.png";
const re1 = "/assets/re-01-BzAzssAp.jpg";
const re2 = "/assets/re-02-BVmiSVyo.webp";
const ve1 = "/assets/ve-01-Coa70dGC.webp";
const BOLD_MARKER_REGEX = /\*\*/;
const KeyAttributes = () => {
  const { t } = useTranslation();
  const attributeImages = {
    capacity: [ca1, ca2, ca3, ca4],
    reliability: [re1, re2],
    efficiency: [ef1, ef2, ef3],
    versatility: [ve1]
  };
  const attributes = [
    {
      key: "capacity"
    },
    {
      key: "reliability"
    },
    {
      key: "efficiency"
    },
    {
      key: "versatility"
    }
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary py-24 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        className: "mx-auto mb-16 max-w-3xl text-center",
        initial: { opacity: 0, y: 20 },
        transition: { duration: 0.6 },
        viewport: { once: true },
        whileInView: { opacity: 1, y: 0 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-bold font-heading text-3xl text-white md:text-4xl", children: t("keyAttributes.heading") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-white/80", children: t("keyAttributes.description") })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "grid grid-cols-1 gap-6 md:grid-cols-2",
        initial: "hidden",
        variants: containerVariants,
        viewport: { once: true },
        whileInView: "visible",
        children: attributes.map((attr) => {
          const title = t(`keyAttributes.items.${attr.key}.title`);
          const description = t(
            `keyAttributes.items.${attr.key}.description`
          );
          const boldText = t(`keyAttributes.items.${attr.key}.boldText`);
          const parts = description.split(BOLD_MARKER_REGEX);
          const hasBold = parts.length > 1;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "group overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-xl",
              variants: itemVariants,
              children: [
                (() => {
                  const images = attributeImages[attr.key];
                  if (images.length > 1) {
                    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mb-6 h-64 overflow-hidden rounded-xl bg-gray-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Carousel,
                      {
                        className: "h-full w-full",
                        plugins: [
                          Autoplay({
                            delay: 5e3
                          })
                        ],
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselContent, { className: "ml-0 h-64", children: images.map((img, imgIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                            CarouselItem,
                            {
                              className: "relative h-64 w-full pl-0",
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "img",
                                {
                                  alt: `${title} ${imgIndex + 1}`,
                                  className: "absolute inset-0 h-full w-full object-cover object-center",
                                  src: img,
                                  title: `${title} ${imgIndex + 1}`
                                }
                              )
                            },
                            `${attr.key}-img-${imgIndex}`
                          )) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-2 z-10 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselPrevious, { className: "static h-8 w-8 translate-y-0 bg-white/80 hover:bg-white" }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 right-2 z-10 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselNext, { className: "static h-8 w-8 translate-y-0 bg-white/80 hover:bg-white" }) })
                        ]
                      }
                    ) });
                  }
                  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mb-6 h-64 overflow-hidden rounded-xl bg-gray-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      alt: title,
                      className: "h-full w-full object-cover object-center",
                      src: images[0],
                      title
                    }
                  ) });
                })(),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-4 font-bold font-heading text-2xl text-white", children: title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 leading-relaxed", children: hasBold ? parts.map(
                    (part) => part === boldText ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-white", children: part }, part) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: part }, part)
                  ) : description })
                ] })
              ]
            },
            attr.key
          );
        })
      }
    )
  ] }) });
};
const RentalCard = ({ image, title, description }) => {
  const { t } = useTranslation();
  const [showSpecs, setShowSpecs] = reactExports.useState(false);
  const [hoveringSpecs, setHoveringSpecs] = reactExports.useState(false);
  const specs = [
    { label: "Model", value: "HA45A" },
    { label: "Type", value: "Articulated Dump Truck" },
    { label: "Rated Payload", value: "41 ton" },
    { label: "Operating Weight", value: "30.5 ton" },
    { label: "Rated Power", value: "368 kW / 2,100 rpm" },
    { label: "Emission", value: "STAGE V" }
  ];
  const shouldShowSpecs = showSpecs || hoveringSpecs;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative aspect-4/5 overflow-hidden rounded-xl md:aspect-3/4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "h-full w-full",
        transition: { duration: 0.7 },
        whileHover: { scale: 1.1 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            alt: title,
            className: "h-full w-full object-cover transition-transform duration-700",
            height: 100,
            src: image,
            title,
            width: 100
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-80" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 w-full p-6 md:p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-2 font-bold font-heading text-2xl text-white", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 line-clamp-2 text-white/70", children: description }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          className: "inline-flex items-center font-bold text-secondary text-sm uppercase tracking-wider transition-colors group-hover:text-white focus:outline-none",
          onClick: () => setShowSpecs((v) => !v),
          onMouseEnter: () => setHoveringSpecs(true),
          onMouseLeave: () => setHoveringSpecs(false),
          type: "button",
          children: [
            t("rental.card.viewSpecs"),
            " ",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { className: "ml-1 h-4 w-4", icon: Hn })
          ]
        }
      )
    ] }),
    shouldShowSpecs && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0 z-20 flex items-center justify-center bg-black/30 backdrop-blur-[8px]",
        style: { background: "rgba(255,255,255,0.10)" },
        onClick: () => setShowSpecs(false),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative rounded-2xl p-8 w-80 max-w-full shadow-2xl border border-white/20",
            style: {
              background: "rgba(255,255,255,0.25)",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.18)"
            },
            onClick: (e) => e.stopPropagation(),
            onMouseEnter: () => setHoveringSpecs(true),
            onMouseLeave: () => {
              setHoveringSpecs(false);
              setShowSpecs(false);
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "mb-4 font-bold text-xl text-primary", children: [
                title,
                " Specs"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mb-4 space-y-2", children: specs.map((spec, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between text-base text-primary/90", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
                  spec.label,
                  ":"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: spec.value })
              ] }, idx)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  className: "mt-2 rounded-lg bg-primary px-4 py-2 font-semibold text-white hover:bg-primary/90",
                  onClick: () => {
                    setShowSpecs(false);
                    setHoveringSpecs(false);
                  },
                  type: "button",
                  children: "Close"
                }
              )
            ]
          }
        )
      }
    )
  ] });
};
const RentalTeaserSection = () => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-neutral-100 border-y bg-white py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12 flex flex-col items-end justify-between gap-6 md:flex-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -20 },
          transition: { duration: 0.6 },
          viewport: { once: true },
          whileInView: { opacity: 1, x: 0 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-bold font-heading text-3xl text-primary md:text-4xl", children: t("rental.heading") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-xl text-lg text-muted-foreground", children: t("rental.description") })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: 20 },
          transition: { duration: 0.6, delay: 0.1 },
          viewport: { once: true },
          whileInView: { opacity: 1, x: 0 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              className: "group font-semibold text-lg text-primary hover:bg-primary/5",
              variant: "ghost",
              children: [
                t("rental.button.fleet"),
                " ",
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
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        transition: { duration: 0.8, delay: 0.2 },
        viewport: { once: true },
        whileInView: { opacity: 1, y: 0 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Carousel, { className: "w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CarouselContent, { className: "-ml-4 pt-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselItem, { className: "pl-4 md:basis-1/2 lg:basis-1/3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              RentalCard,
              {
                description: t("rental.items.excavators.description"),
                image: excavatorImg,
                title: t("rental.items.excavators.title")
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselItem, { className: "pl-4 md:basis-1/2 lg:basis-1/3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              RentalCard,
              {
                description: t("rental.items.bulldozers.description"),
                image: bulldozerImg,
                title: t("rental.items.bulldozers.title")
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselItem, { className: "pl-4 md:basis-1/2 lg:basis-1/3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              RentalCard,
              {
                description: t("rental.items.loaders.description"),
                image: loaderImg,
                title: t("rental.items.loaders.title")
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselItem, { className: "pl-4 md:basis-1/2 lg:basis-1/3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              RentalCard,
              {
                description: t("rental.items.dumpTrucks.description"),
                image: heavyDumpTrucksImg,
                title: t("rental.items.dumpTrucks.title")
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -top-7 -right-10 flex -translate-x-1/2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselPrevious, { className: "static translate-y-0", size: "lg" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselNext, { className: "static translate-y-0", size: "lg" })
          ] })
        ] })
      }
    )
  ] }) });
};
const ServiceCard = ({ icon, title, description }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "group relative overflow-hidden border border-white/40 bg-white/80 shadow-lg backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 dark:bg-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-linear-to-br from-transparent via-transparent to-primary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "relative p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/5 text-primary ring-1 ring-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          transition: { type: "spring", stiffness: 400, damping: 10 },
          whileHover: { scale: 1.1, rotate: 5 },
          children: icon
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-3 font-bold font-heading text-primary text-xl", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: description })
    ] })
  ] });
};
const ServicesSection = () => {
  const { t } = useTranslation();
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-neutral-bg py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        className: "mx-auto mb-16 max-w-3xl text-center",
        initial: { opacity: 0, y: 20 },
        transition: { duration: 0.6 },
        viewport: { once: true },
        whileInView: { opacity: 1, y: 0 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-bold font-heading text-3xl text-primary md:text-4xl", children: t("services.heading") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground", children: t("services.description") })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        className: "grid grid-cols-1 gap-8 md:grid-cols-3",
        initial: "hidden",
        variants: containerVariants,
        viewport: { once: true },
        whileInView: "visible",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            ServiceCard,
            {
              description: t("services.items.oreHaulage.description"),
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { className: "h-10 w-10", icon: Khr }),
              title: t("services.items.oreHaulage.title")
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            ServiceCard,
            {
              description: t("services.items.drilling.description"),
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { className: "h-10 w-10", icon: sHr }),
              title: t("services.items.drilling.title")
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            ServiceCard,
            {
              description: t("services.items.logistics.description"),
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { className: "h-10 w-10", icon: H6 }),
              title: t("services.items.logistics.title")
            }
          ) })
        ]
      }
    )
  ] }) });
};
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(KeyAttributes, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServicesSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RentalTeaserSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CtaSection, {})
  ] });
}
export {
  Index as component
};
