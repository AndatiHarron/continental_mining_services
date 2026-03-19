import { j as jsxRuntimeExports } from "../_chunks/_libs/react.mjs";
import { W as WG, i as iN, z as ztr, V as VE, a as Vm } from "../_chunks/_libs/@hugeicons/core-free-icons.mjs";
import { L as Link } from "../_chunks/_libs/@tanstack/react-router.mjs";
import { L as Layout, B as Button } from "./layout-Cge3f9-K.mjs";
import { u as useTranslation } from "../_libs/react-i18next.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { H as HugeiconsIcon } from "../_chunks/_libs/@hugeicons/react.mjs";
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
import "./router-C94rKTxU.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/i18next.mjs";
import "../_libs/_jlZyyM7A.mjs";
import "../_libs/i18next-http-backend.mjs";
import "../_libs/use-sync-external-store.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_chunks/_libs/@base-ui/react.mjs";
import "../_libs/tabbable.mjs";
import "../_chunks/_libs/@floating-ui/utils.mjs";
import "../_chunks/_libs/@base-ui/utils.mjs";
import "../_libs/reselect.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function ContactUs() {
  const {
    t
  } = useTranslation();
  const breadcrumbs = t("contactPage.pageHeader.breadcrumbs", {
    returnObjects: true
  });
  const interestOptions = t("contactPage.form.interestOptions", {
    returnObjects: true
  });
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-primary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 z-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 z-10 bg-black/60" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { alt: "Abstract view of a communication tower or office building glass facade", className: "h-full w-full object-cover opacity-60", height: 1080, src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop", title: "Abstract view of a communication tower or office building glass facade", width: 1920 })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container relative z-20 px-4 pt-20 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { className: "mx-auto max-w-4xl text-center", initial: "hidden", variants: containerVariants, viewport: {
        once: true
      }, whileInView: "visible", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.nav, { "aria-label": "Breadcrumb", className: "mb-6 flex items-center justify-center gap-2 text-sm text-white/70", variants: itemVariants, children: breadcrumbs.map((crumb, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          index > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40", children: "/" }),
          index === breadcrumbs.length - 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: crumb }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "transition-colors hover:text-white", to: index === 0 ? "/" : "/contact-us", children: crumb })
        ] }, crumb)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h1, { className: "mb-6 font-bold font-heading text-4xl text-white leading-tight md:text-5xl lg:text-6xl", variants: itemVariants, children: t("contactPage.pageHeader.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { className: "mx-auto max-w-2xl font-light text-lg text-white/80 leading-relaxed md:text-xl", variants: itemVariants, children: t("contactPage.pageHeader.subtitle") })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative bg-neutral-50 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-30 -mt-20 overflow-hidden rounded-3xl bg-white shadow-2xl lg:grid lg:grid-cols-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary px-8 py-12 text-white lg:col-span-2 lg:px-12 lg:py-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-4 font-bold font-heading text-2xl md:text-3xl", children: t("contactPage.contactInfo.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-10 text-white/80 leading-relaxed", children: t("contactPage.contactInfo.description") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { className: "h-5 w-5", icon: WG }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg", children: t("contactPage.contactInfo.headquarters.label") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80", children: t("contactPage.contactInfo.headquarters.location") })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { className: "h-5 w-5", icon: iN }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg", children: t("contactPage.contactInfo.email.label") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "break-all text-white/80 transition-colors hover:text-white", href: "mailto:info@continentalminingservices.com", children: "info@continentalminingservices.com" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { className: "h-5 w-5", icon: ztr }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg", children: t("contactPage.contactInfo.phone.label") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "text-white/80 transition-colors hover:text-white", href: "tel:+23275311632", children: "+232 75 311632" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex gap-4 border-white/10 border-t pt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { "aria-label": "LinkedIn", className: "flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white hover:text-primary", href: "https://www.linkedin.com", rel: "noopener noreferrer", target: "_blank", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { className: "h-5 w-5", icon: VE }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { "aria-label": "Facebook", className: "flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white hover:text-primary", href: "https://www.facebook.com", rel: "noopener noreferrer", target: "_blank", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { className: "h-5 w-5", icon: Vm }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white px-8 py-12 lg:col-span-3 lg:px-12 lg:py-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-8 font-bold font-heading text-2xl text-primary md:text-3xl", children: t("contactPage.form.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "space-y-6", id: "contact-main", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-medium text-gray-700 text-sm", htmlFor: "full_name", children: t("contactPage.form.fields.fullName.label") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary", id: "full_name", name: "full_name", placeholder: t("contactPage.form.fields.fullName.placeholder"), required: true, type: "text" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-medium text-gray-700 text-sm", htmlFor: "email", children: t("contactPage.form.fields.email.label") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary", id: "email", name: "email", placeholder: t("contactPage.form.fields.email.placeholder"), required: true, type: "email" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-medium text-gray-700 text-sm", htmlFor: "phone", children: t("contactPage.form.fields.phone.label") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary", id: "phone", name: "phone", placeholder: t("contactPage.form.fields.phone.placeholder"), type: "tel" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-medium text-gray-700 text-sm", htmlFor: "interest", children: t("contactPage.form.fields.interest.label") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary", id: "interest", name: "interest", required: true, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: t("contactPage.form.fields.interest.placeholder") }),
              interestOptions.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: option, children: option }, option))
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-medium text-gray-700 text-sm", htmlFor: "message", children: t("contactPage.form.fields.message.label") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { className: "min-h-[120px] w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary", id: "message", name: "message", placeholder: t("contactPage.form.fields.message.placeholder"), required: true, rows: 4 })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "w-full bg-primary py-6 font-bold text-lg text-white hover:bg-primary/90", size: "lg", type: "submit", children: t("contactPage.form.submitButton") })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative h-[400px] w-full bg-gray-200", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center gap-4 bg-neutral-200 text-neutral-500", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-full bg-white/50 p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { className: "h-12 w-12 text-[#682A33]", icon: WG }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-neutral-700 text-xl", children: t("contactPage.map.location") }) })
    ] }) })
  ] });
}
export {
  ContactUs as component
};
