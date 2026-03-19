import { j as jsxRuntimeExports, r as reactExports } from "../_chunks/_libs/react.mjs";
import { e as Vz, Y as Yr, i as iN, u as uG, f as fL } from "../_chunks/_libs/@hugeicons/core-free-icons.mjs";
import { u as useRouterState, L as Link } from "../_chunks/_libs/@tanstack/react-router.mjs";
import { c as cn } from "./router-C94rKTxU.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { B as Button$1, D as DialogRoot, a as DialogTrigger, b as DialogPopup, c as DialogClose, d as DialogPortal, e as DialogBackdrop } from "../_chunks/_libs/@base-ui/react.mjs";
import { u as useTranslation } from "../_libs/react-i18next.mjs";
import { H as HugeiconsIcon } from "../_chunks/_libs/@hugeicons/react.mjs";
const buttonVariants = cva(
  "group/button inline-flex shrink-0 cursor-pointer select-none items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-clip-padding font-medium text-sm outline-none transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        outline: "border-border bg-background shadow-xs hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 dark:hover:bg-destructive/30",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 gap-1.5 in-data-[slot=button-group]:rounded-md px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 in-data-[slot=button-group]:rounded-md rounded-[min(var(--radius-md),8px)] px-2 text-xs has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1 in-data-[slot=button-group]:rounded-md rounded-[min(var(--radius-md),10px)] px-2.5 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",
        lg: "h-10 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        icon: "size-9",
        "icon-xs": "size-6 in-data-[slot=button-group]:rounded-md rounded-[min(var(--radius-md),8px)] [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8 in-data-[slot=button-group]:rounded-md rounded-[min(var(--radius-md),10px)]",
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Button$1,
    {
      className: cn(buttonVariants({ variant, size, className })),
      "data-slot": "button",
      ...props
    }
  );
}
const footerBg = "/assets/abstract_topographical_map_pattern_dark_maroon_high_contrast-BGZ3z2na.webp";
const logoImg = "/assets/logo-CLP8R1nX.png";
const Footer = () => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative overflow-hidden border-white/10 border-t bg-primary pt-20 pb-10 text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          alt: "Footer background",
          className: "h-full w-full object-cover opacity-40 mix-blend-overlay",
          height: 100,
          src: footerBg,
          title: "Footer background",
          width: 100
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-95" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg_viewBox=%220_0_200_200%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter_id=%22noiseFilter%22%3E%3CfeTurbulence_type=%22fractalNoise%22_baseFrequency=%220.65%22_numOctaves=%223%22_stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23noiseFilter)%22_opacity=%220.05%22/%3E%3C/svg%3E')] opacity-20 mix-blend-overlay" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 -mt-40 -mr-40 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 -mb-40 -ml-40 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container relative z-10 mx-auto px-4 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "inline-block", to: "/", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: logoImg,
              alt: "Continental Mining Logo",
              className: "h-20 w-auto mb-6",
              height: 100
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-md text-lg text-white/70 leading-relaxed", children: t("footer.description") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-8 font-bold font-heading text-lg text-white uppercase tracking-wide after:mt-2 after:block after:h-1 after:w-12 after:bg-secondary after:content-['']", children: t("footer.sections.contact") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group flex items-start gap-4 text-white/80 transition-colors hover:text-white", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 transition-colors group-hover:bg-secondary group-hover:text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { className: "h-5 w-5", icon: uG }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "leading-relaxed", children: t("footer.location") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                className: "group flex items-center gap-4 text-white/80 transition-colors hover:text-white",
                href: "tel:+23275311632",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 transition-colors group-hover:bg-secondary group-hover:text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { className: "h-5 w-5", icon: Yr }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "+232 75 311632" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                className: "group flex items-center gap-4 text-white/80 transition-colors hover:text-white",
                href: "mailto:info@continentalminingservices.com",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 transition-colors group-hover:bg-secondary group-hover:text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { className: "h-5 w-5", icon: iN }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "break-all font-medium", children: "info@continentalminingservices.com" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-8 font-bold font-heading text-lg text-white uppercase tracking-wide after:mt-2 after:block after:h-1 after:w-12 after:bg-secondary after:content-['']", children: t("footer.sections.quickLinks") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                className: "group flex items-center text-white/70 transition-colors hover:text-white",
                to: "/",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-2 h-1.5 w-1.5 rounded-full bg-secondary opacity-0 transition-opacity group-hover:opacity-100" }),
                  t("footer.links.home")
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                className: "group flex items-center text-white/70 transition-colors hover:text-white",
                to: "/services",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-2 h-1.5 w-1.5 rounded-full bg-secondary opacity-0 transition-opacity group-hover:opacity-100" }),
                  t("footer.links.services")
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                className: "group flex items-center text-white/70 transition-colors hover:text-white",
                to: "/contact-us",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-2 h-1.5 w-1.5 rounded-full bg-secondary opacity-0 transition-opacity group-hover:opacity-100" }),
                  t("footer.links.contact")
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                className: "group flex items-center text-white/70 transition-colors hover:text-white",
                to: "/about",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-2 h-1.5 w-1.5 rounded-full bg-secondary opacity-0 transition-opacity group-hover:opacity-100" }),
                  t("nav.links.aboutUs")
                ]
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-20 flex flex-col items-center justify-between gap-6 border-white/10 border-t pt-8 text-sm text-white/40 md:flex-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-medium", children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " ",
          t("footer.copyright")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "transition-colors hover:text-white", to: "/", children: t("footer.privacyPolicy") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "transition-colors hover:text-white", to: "/", children: "Terms of Service" })
        ] })
      ] })
    ] })
  ] });
};
const RegionToggle = () => {
  const { i18n } = useTranslation();
  const [region, setRegion] = reactExports.useState(i18n.language);
  reactExports.useEffect(() => {
    setRegion(i18n.language);
  }, [i18n.language]);
  const handleLanguageChange = (lang) => {
    if (lang !== region) {
      i18n.changeLanguage(lang);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        "aria-label": "Switch to English",
        "aria-pressed": region === "en",
        className: cn(
          "relative rounded-full px-3 py-1.5 font-bold font-heading text-xs uppercase tracking-wider transition-all duration-300",
          region === "en" ? "bg-secondary text-white shadow-md shadow-secondary/20" : "text-white/50 hover:bg-white/5 hover:text-white"
        ),
        onClick: () => handleLanguageChange("en"),
        type: "button",
        children: "En"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        "aria-label": "Switch to French",
        "aria-pressed": region === "fr",
        className: cn(
          "relative rounded-full px-3 py-1.5 font-bold font-heading text-xs uppercase tracking-wider transition-all duration-300",
          region === "fr" ? "bg-secondary text-white shadow-md shadow-secondary/20" : "text-white/50 hover:bg-white/5 hover:text-white"
        ),
        onClick: () => handleLanguageChange("fr"),
        type: "button",
        children: "Fr"
      }
    )
  ] });
};
function Sheet({ ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DialogRoot, { "data-slot": "sheet", ...props });
}
function SheetTrigger({ ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { "data-slot": "sheet-trigger", ...props });
}
function SheetPortal({ ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DialogPortal, { "data-slot": "sheet-portal", ...props });
}
function SheetOverlay({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    DialogBackdrop,
    {
      className: cn(
        "data-closed:fade-out-0 data-open:fade-in-0 fixed inset-0 z-50 bg-black/10 duration-100 data-closed:animate-out data-open:animate-in data-ending-style:opacity-0 data-starting-style:opacity-0 supports-backdrop-filter:backdrop-blur-xs",
        className
      ),
      "data-slot": "sheet-overlay",
      ...props
    }
  );
}
function SheetContent({
  className,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetPortal, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SheetOverlay, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      DialogPopup,
      {
        className: cn(
          "data-[side=right]:data-closed:slide-out-to-right-10 data-[side=right]:data-open:slide-in-from-right-10 data-[side=left]:data-closed:slide-out-to-left-10 data-[side=left]:data-open:slide-in-from-left-10 data-[side=top]:data-closed:slide-out-to-top-10 data-[side=top]:data-open:slide-in-from-top-10 data-closed:fade-out-0 data-open:fade-in-0 data-[side=bottom]:data-closed:slide-out-to-bottom-10 data-[side=bottom]:data-open:slide-in-from-bottom-10 fixed z-50 flex flex-col gap-4 bg-background bg-clip-padding text-sm shadow-lg transition duration-200 ease-in-out data-[side=bottom]:inset-x-0 data-[side=top]:inset-x-0 data-[side=left]:inset-y-0 data-[side=right]:inset-y-0 data-[side=top]:top-0 data-[side=right]:right-0 data-[side=bottom]:bottom-0 data-[side=left]:left-0 data-[side=bottom]:h-auto data-[side=left]:h-full data-[side=right]:h-full data-[side=top]:h-auto data-[side=left]:w-3/4 data-[side=right]:w-3/4 data-closed:animate-out data-open:animate-in data-[side=bottom]:border-t data-[side=left]:border-r data-[side=top]:border-b data-[side=right]:border-l data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm",
          className
        ),
        "data-side": side,
        "data-slot": "sheet-content",
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            DialogClose,
            {
              "data-slot": "sheet-close",
              render: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  className: "absolute top-4 right-4",
                  size: "icon-sm",
                  variant: "ghost"
                }
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { icon: fL, strokeWidth: 2 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
const Navbar = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = reactExports.useState(false);
  const location = useRouterState({
    select: (state) => state.location.pathname
  });
  const isHome = location === "/";
  reactExports.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navClass = cn(
    "fixed top-0 right-0 left-0 z-50 border-transparent border-b transition-all duration-500 ease-in-out",
    {
      "border-white/10 bg-primary/95 py-3 shadow-lg backdrop-blur-md": isScrolled || !isHome,
      "bg-transparent py-6": !isScrolled && isHome
    }
  );
  const linkClass = "relative text-white font-heading font-medium tracking-wide text-sm uppercase transition-colors group";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: navClass, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto flex items-center justify-between px-4 md:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        className: "relative z-50 font-bold font-logo text-3xl text-white tracking-tighter transition-transform hover:scale-105 md:text-4xl flex items-center gap-2",
        to: "/",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: logoImg,
            alt: "Continental Mining Logo",
            className: "h-[88px] w-auto",
            height: 88
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden items-center gap-8 md:flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { className: linkClass, to: "/", children: [
        t("nav.links.home"),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-1 left-0 h-0.5 w-0 bg-secondary transition-all duration-300 group-hover:w-full" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { className: linkClass, to: "/services", children: [
        t("nav.links.services"),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-1 left-0 h-0.5 w-0 bg-secondary transition-all duration-300 group-hover:w-full" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { className: linkClass, to: "/contact-us", children: [
        t("nav.links.contact"),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-1 left-0 h-0.5 w-0 bg-secondary transition-all duration-300 group-hover:w-full" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { className: linkClass, to: "/about", children: [
        t("nav.links.aboutUs"),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-1 left-0 h-0.5 w-0 bg-secondary transition-all duration-300 group-hover:w-full" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 border-white/20 border-l pl-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(RegionToggle, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "https://wa.me/254710337605?text=Hello%2C%20I%20would%20like%20to%20request%20a%20quote.%20You%20can%20also%20reach%20me%20at%20operations@continental-miningservices.com",
            target: "_blank",
            rel: "noopener noreferrer",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "bg-secondary font-heading font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-secondary/90 hover:shadow-secondary/20", children: t("nav.button.quote") })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Sheet, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SheetTrigger,
        {
          render: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              className: "text-white hover:bg-white/10 hover:text-secondary",
              size: "icon",
              variant: "ghost",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { className: "h-7 w-7", icon: Vz })
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SheetContent,
        {
          className: "w-[300px] border-l-white/10 bg-primary/95 text-white backdrop-blur-xl",
          side: "right",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col justify-between py-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-col gap-8 px-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-white/10 border-b pb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold font-logo text-2xl", children: "MENU" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(RegionToggle, {})
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex flex-col gap-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    className: "font-bold font-heading text-2xl transition-colors hover:text-secondary",
                    to: "/",
                    children: t("nav.links.home")
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    className: "font-bold font-heading text-2xl transition-colors hover:text-secondary",
                    to: "/services",
                    children: t("nav.links.services")
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    className: "font-bold font-heading text-2xl transition-colors hover:text-secondary",
                    to: "/contact-us",
                    children: t("nav.links.contact")
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    className: "font-bold font-heading text-2xl transition-colors hover:text-secondary",
                    to: "/about",
                    children: t("nav.links.aboutUs")
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6 px-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 rounded-xl bg-white/5 p-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-white/90", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    HugeiconsIcon,
                    {
                      className: "h-5 w-5 shrink-0 text-secondary",
                      icon: Yr
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-sm", children: "+232 75 311632" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 text-white/90", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    HugeiconsIcon,
                    {
                      className: "mt-0.5 h-5 w-5 shrink-0 text-secondary",
                      icon: iN
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-0 break-words font-medium text-sm", children: "info@continentalminingservices.com" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "https://wa.me/254710337605?text=Hello%2C%20I%20would%20like%20to%20request%20a%20quote.%20You%20can%20also%20reach%20me%20at%20operations@continental-miningservices.com",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      className: "w-full bg-secondary font-bold text-white shadow-lg shadow-secondary/20 hover:bg-secondary/90",
                      size: "lg",
                      children: t("nav.button.quote")
                    }
                  )
                }
              )
            ] })
          ] })
        }
      )
    ] }) })
  ] }) });
};
function Layout({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "grow", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Button as B,
  Layout as L,
  logoImg as l
};
