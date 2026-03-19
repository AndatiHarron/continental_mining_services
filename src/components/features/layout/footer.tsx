import { AiPhoneIcon, MailIcon, MapPinIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import footerBg from "@/assets/home/abstract_topographical_map_pattern_dark_maroon_high_contrast.webp";
import logo from "@/logo.png";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative overflow-hidden border-white/10 border-t bg-primary pt-20 pb-10 text-white">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <img
          alt="Footer background"
          className="h-full w-full object-cover opacity-40 mix-blend-overlay"
          height={100}
          src={footerBg}
          title="Footer background"
          width={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-95" />

<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg_viewBox=%220_0_200_200%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter_id=%22noiseFilter%22%3E%3CfeTurbulence_type=%22fractalNoise%22_baseFrequency=%220.65%22_numOctaves=%223%22_stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23noiseFilter)%22_opacity=%220.05%22/%3E%3C/svg%3E')] opacity-20 mix-blend-overlay" />

<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
      </div>
      <div className="absolute top-0 right-0 -mt-40 -mr-40 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 -mb-40 -ml-40 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link className="inline-block" to="/">
              <img
                src={logo}
                alt="Continental Mining Logo"
                className="h-20 w-auto mb-6"
                height={100}
              />
            </Link>
            <p className="max-w-md text-lg text-white/70 leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="mb-8 font-bold font-heading text-lg text-white uppercase tracking-wide after:mt-2 after:block after:h-1 after:w-12 after:bg-secondary after:content-['']">
              {t("footer.sections.contact")}
            </h4>
            <div className="space-y-6">
              <div className="group flex items-start gap-4 text-white/80 transition-colors hover:text-white">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 transition-colors group-hover:bg-secondary group-hover:text-white">
                  <HugeiconsIcon className="h-5 w-5" icon={MapPinIcon} />
                </div>
                <span className="leading-relaxed">{t("footer.location")}</span>
              </div>

              <a
                className="group flex items-center gap-4 text-white/80 transition-colors hover:text-white"
                href="tel:+23275311632"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 transition-colors group-hover:bg-secondary group-hover:text-white">
                  <HugeiconsIcon className="h-5 w-5" icon={AiPhoneIcon} />
                </div>
                <span className="font-medium">+232 75 311632</span>
              </a>

              <a
                className="group flex items-center gap-4 text-white/80 transition-colors hover:text-white"
                href="mailto:info@continentalminingservices.com"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 transition-colors group-hover:bg-secondary group-hover:text-white">
                  <HugeiconsIcon className="h-5 w-5" icon={MailIcon} />
                </div>
                <span className="break-all font-medium">
                  info@continentalminingservices.com
                </span>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="mb-8 font-bold font-heading text-lg text-white uppercase tracking-wide after:mt-2 after:block after:h-1 after:w-12 after:bg-secondary after:content-['']">
              {t("footer.sections.quickLinks")}
            </h4>
            <div className="flex flex-col gap-4">
              <Link
                className="group flex items-center text-white/70 transition-colors hover:text-white"
                to="/"
              >
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-secondary opacity-0 transition-opacity group-hover:opacity-100" />
                {t("footer.links.home")}
              </Link>
              <Link
                className="group flex items-center text-white/70 transition-colors hover:text-white"
                to="/services"
              >
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-secondary opacity-0 transition-opacity group-hover:opacity-100" />
                {t("footer.links.services")}
              </Link>
              <Link
                className="group flex items-center text-white/70 transition-colors hover:text-white"
                to="/contact-us"
              >
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-secondary opacity-0 transition-opacity group-hover:opacity-100" />
                {t("footer.links.contact")}
              </Link>
              <Link
                className="group flex items-center text-white/70 transition-colors hover:text-white"
                to="/about"
              >
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-secondary opacity-0 transition-opacity group-hover:opacity-100" />
                {t("nav.links.aboutUs")}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-white/10 border-t pt-8 text-sm text-white/40 md:flex-row">
          <p className="font-medium">
            &copy; {new Date().getFullYear()} {t("footer.copyright")}
          </p>
          <div className="flex gap-8">
            <Link className="transition-colors hover:text-white" to="/">
              {t("footer.privacyPolicy")}
            </Link>
            <Link className="transition-colors hover:text-white" to="/">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
