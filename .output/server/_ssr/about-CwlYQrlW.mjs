import { j as jsxRuntimeExports, r as reactExports } from "../_chunks/_libs/react.mjs";
import { L as Layout, B as Button } from "./layout-Cge3f9-K.mjs";
import { A as Autoplay } from "../_libs/embla-carousel-autoplay.mjs";
import { C as Carousel, a as CarouselContent, b as CarouselItem, c as CarouselPrevious, d as CarouselNext } from "./carousel-Cw4F2ZAm.mjs";
import { j as jf, b as jm, Z as ZF, u as uG } from "../_chunks/_libs/@hugeicons/core-free-icons.mjs";
import { C as Card, a as CardContent } from "./router-C94rKTxU.mjs";
import { L as Link } from "../_chunks/_libs/@tanstack/react-router.mjs";
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
import "../_libs/isbot.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const AboutCta = () => {
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-6 font-bold font-heading text-3xl md:text-5xl", children: t("about.cta.headline") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mb-10 max-w-2xl text-white/80 text-xl", children: t("about.cta.subheadline") }),
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
                      children: t("about.cta.buttonText")
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
const ca1 = "/assets/ca-01-DILw52ZT.jpeg";
const ca2 = "/assets/eo-2-DBrCyK70.jpg";
const ca3 = "/assets/ca-03-ByJ-zvWX.jpg";
const ca4 = "/assets/ca-04-p42hzUar.jpg";
const sa1 = "/assets/sa-01-Bjq6PyHX.jpg";
const sa2 = "/assets/sa-02-D3ldvD4m.jpg";
const tech1 = "/assets/tech-01-DRwuAo-m.jpg";
const tech2 = "/assets/tech-02-BfABqbMq.jpg";
const ve1 = "/assets/ve-01-Coa70dGC.webp";
const BOLD_MARKER_REGEX = /\*\*/;
const CompanyAttributes = () => {
  const { t } = useTranslation();
  const attributeImages = {
    capacity: [ca1, ca2, ca3, ca4],
    versatility: [ve1],
    safety: [sa1, sa2],
    technology: [tech1, tech2]
  };
  const attributes = [
    {
      key: "capacity"
    },
    {
      key: "versatility"
    },
    {
      key: "safety"
    },
    {
      key: "technology"
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        className: "mx-auto mb-16 max-w-3xl text-center",
        initial: { opacity: 0, y: 20 },
        transition: { duration: 0.6 },
        viewport: { once: true },
        whileInView: { opacity: 1, y: 0 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-bold font-heading text-3xl text-primary md:text-4xl", children: t("about.companyAttributes.heading") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground", children: t("about.companyAttributes.description") })
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
          const title = t(`about.companyAttributes.items.${attr.key}.title`);
          const description = t(
            `about.companyAttributes.items.${attr.key}.description`
          );
          const boldText = t(
            `about.companyAttributes.items.${attr.key}.boldText`
          );
          const parts = description.split(BOLD_MARKER_REGEX);
          const hasBold = parts.length > 1;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "group overflow-hidden rounded-2xl border border-white/40 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5",
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
                          /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselContent, { className: "h-full", children: images.map((img, imgIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                            CarouselItem,
                            {
                              className: "h-full w-full",
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "img",
                                {
                                  alt: `${title} ${imgIndex + 1}`,
                                  className: "h-full w-full object-cover",
                                  height: 400,
                                  src: img,
                                  title: `${title} ${imgIndex + 1}`,
                                  width: 600
                                }
                              )
                            },
                            `${attr.key}-img-${imgIndex}`
                          )) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-2 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselPrevious, { className: "static h-8 w-8 translate-y-0 bg-white/80 hover:bg-white" }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 right-2 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselNext, { className: "static h-8 w-8 translate-y-0 bg-white/80 hover:bg-white" }) })
                        ]
                      }
                    ) });
                  }
                  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mb-6 h-64 overflow-hidden rounded-xl bg-gray-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      alt: title,
                      className: "h-full w-full object-cover",
                      height: 400,
                      src: images[0],
                      title,
                      width: 600
                    }
                  ) });
                })(),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-4 font-bold font-heading text-2xl text-primary", children: title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: hasBold ? parts.map(
                    (part) => part === boldText ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-primary", children: part }, part) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: part }, part)
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
const whoWeAreImage = "/assets/who-we-are-WEhr1ccY.jpeg";
const CompanyProfile = () => {
  const { t } = useTranslation();
  const paragraphs = t("about.companyProfile.bodyParagraphs", {
    returnObjects: true
  });
  const statBadges = t("about.companyProfile.statBadges", {
    returnObjects: true
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: -30 },
        transition: { duration: 0.8, ease: "easeOut" },
        viewport: { once: true },
        whileInView: { opacity: 1, x: 0 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-6 font-bold font-heading text-3xl text-primary md:text-4xl", children: t("about.companyProfile.headline") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 text-lg text-muted-foreground leading-relaxed", children: paragraphs.map((paragraph) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: paragraph }, paragraph)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-wrap gap-4", children: statBadges.map((badge, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.span,
            {
              className: "rounded-full border border-primary/20 bg-primary/5 px-4 py-2 font-semibold text-primary text-sm transition-colors hover:bg-primary/10",
              initial: { opacity: 0, y: 10 },
              transition: { delay: 0.4 + index * 0.1, duration: 0.4 },
              viewport: { once: true },
              whileInView: { opacity: 1, y: 0 },
              children: badge
            },
            badge
          )) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "relative aspect-4/3 overflow-hidden rounded-xl bg-neutral-100 shadow-2xl",
        initial: { opacity: 0, scale: 0.95 },
        transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
        viewport: { once: true },
        whileInView: { opacity: 1, scale: 1 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            alt: t("about.companyProfile.imageAlt"),
            className: "h-full w-full object-cover",
            height: 800,
            src: whoWeAreImage,
            title: t("about.companyProfile.imageAlt"),
            width: 1200
          }
        )
      }
    )
  ] }) }) });
};
const MissionVisionValues = () => {
  const { t } = useTranslation();
  const coreValues = t("about.missionVisionValues.coreValues.list", {
    returnObjects: true
  });
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-neutral-bg py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      className: "grid grid-cols-1 gap-8 md:grid-cols-3",
      initial: "hidden",
      variants: containerVariants,
      viewport: { once: true },
      whileInView: "visible",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "group h-full border border-white/40 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "flex h-full flex-col p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/5 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { className: "h-8 w-8", icon: jf }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-4 font-bold font-heading text-primary text-xl", children: t("about.missionVisionValues.mission.title") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: t("about.missionVisionValues.mission.text") })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "group h-full border border-white/40 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "flex h-full flex-col p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/5 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { className: "h-8 w-8", icon: jm }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-4 font-bold font-heading text-primary text-xl", children: t("about.missionVisionValues.vision.title") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: t("about.missionVisionValues.vision.text") })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "group h-full border border-white/40 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "flex h-full flex-col p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/5 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { className: "h-8 w-8", icon: ZF }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-4 font-bold font-heading text-primary text-xl", children: t("about.missionVisionValues.coreValues.title") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3 text-muted-foreground", children: coreValues.map((value) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg leading-tight", children: value })
          ] }, value)) })
        ] }) }) })
      ]
    }
  ) }) });
};
const heroBg = "/assets/develon-C2MAq8JO.jpg";
const PageHeader = () => {
  const { t } = useTranslation();
  const breadcrumbs = t("about.pageHeader.breadcrumbs", {
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
              alt: "About Hero Background",
              className: "h-full w-full object-cover",
              height: 100,
              src: heroBg,
              title: "About Hero Background",
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
                    to: index === 0 ? "/" : "/about",
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
              children: t("about.pageHeader.title")
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              className: "mx-auto max-w-2xl font-light text-lg text-white/80 leading-relaxed md:text-xl",
              variants: itemVariants,
              children: t("about.pageHeader.subtitle")
            }
          )
        ]
      }
    ) })
  ] });
};
const operatingImage = "/assets/operating-hXByIABn.jpeg";
const RegionFocus = () => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: -30 },
        transition: { duration: 0.8, ease: "easeOut" },
        viewport: { once: true },
        whileInView: { opacity: 1, x: 0 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { className: "h-6 w-6", icon: uG }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold font-heading text-3xl text-primary md:text-4xl", children: t("about.regionFocus.headline") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground leading-relaxed", children: t("about.regionFocus.text") })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "relative aspect-4/3 overflow-hidden rounded-xl bg-neutral-100 shadow-xl",
        initial: { opacity: 0, scale: 0.95 },
        transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
        viewport: { once: true },
        whileInView: { opacity: 1, scale: 1 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            alt: t("about.regionFocus.mapHighlight"),
            className: "h-full w-full object-cover",
            height: 800,
            src: operatingImage,
            title: t("about.regionFocus.mapHighlight"),
            width: 1200
          }
        )
      }
    )
  ] }) }) });
};
const SafetyCommitment = () => {
  const { t } = useTranslation();
  const ref = reactExports.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const [showPopup, setShowPopup] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      className: "relative overflow-hidden bg-primary py-24 text-white",
      ref,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=2574&auto=format&fit=crop')] bg-center bg-cover opacity-10 mix-blend-overlay",
            style: { y }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-linear-to-r from-primary/90 via-primary/80 to-primary/90" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container relative mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            className: "mx-auto max-w-4xl text-center",
            initial: { opacity: 0, y: 30 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            whileInView: { opacity: 1, y: 0 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-6 font-bold font-heading text-3xl md:text-5xl", children: t("about.safetyCommitment.headline") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mb-10 max-w-2xl text-white/80 text-xl leading-relaxed", children: t("about.safetyCommitment.text") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  transition: { type: "spring", stiffness: 400, damping: 10 },
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      className: "h-14 border-white/20 bg-white/5 px-10 font-bold text-lg text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:shadow-lg hover:shadow-white/5",
                      size: "lg",
                      variant: "outline",
                      onClick: () => setShowPopup(true),
                      children: t("about.safetyCommitment.ctaButton.text")
                    }
                  )
                }
              )
            ]
          }
        ) }),
        showPopup && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-[10px]",
            style: { background: "rgba(0,0,0,0.60)" },
            onClick: () => setShowPopup(false),
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "relative rounded-2xl p-8 w-full max-w-2xl shadow-2xl border border-white/20 text-white",
                style: {
                  background: "rgba(20, 20, 30, 0.85)",
                  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid rgba(255,255,255,0.18)"
                },
                onClick: (e) => e.stopPropagation(),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-4 font-bold text-2xl text-white", children: "Mining Safety Policy & Best Practices" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row gap-6 mb-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: sa1, alt: "Safety in Mining 1", className: "rounded-lg w-full md:w-1/2 object-cover max-h-60" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: sa2, alt: "Safety in Mining 2", className: "rounded-lg w-full md:w-1/2 object-cover max-h-60" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mb-4 space-y-2 text-white text-base text-left", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Comprehensive Training:" }),
                      " All personnel must undergo rigorous safety training before entering mining sites."
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Personal Protective Equipment (PPE):" }),
                      " Mandatory use of helmets, gloves, boots, high-visibility vests, and respiratory protection."
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Hazard Identification:" }),
                      " Continuous risk assessment and hazard identification to prevent accidents."
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Equipment Safety:" }),
                      " Regular inspection and maintenance of all machinery and vehicles."
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Emergency Preparedness:" }),
                      " Clear evacuation plans, regular drills, and accessible first-aid kits."
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Environmental Protection:" }),
                      " Measures to prevent contamination and protect local ecosystems."
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Health Monitoring:" }),
                      " Ongoing health checks for all workers to detect and address issues early."
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Communication:" }),
                      " Reliable communication systems for reporting hazards and emergencies."
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Compliance:" }),
                      " Adherence to all local and international mining safety regulations and standards."
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      className: "mt-2 rounded-lg bg-white/10 px-6 py-2 font-semibold text-white hover:bg-white/20 border border-white/30",
                      onClick: () => setShowPopup(false),
                      type: "button",
                      children: "Close"
                    }
                  )
                ]
              }
            )
          }
        )
      ]
    }
  );
};
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CompanyProfile, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MissionVisionValues, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CompanyAttributes, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SafetyCommitment, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RegionFocus, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AboutCta, {})
  ] });
}
export {
  About as component
};
