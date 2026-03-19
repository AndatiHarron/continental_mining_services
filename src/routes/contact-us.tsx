import {
  Facebook01Icon,
  Linkedin01Icon,
  Mail01Icon,
  MapsLocation01Icon,
  SmartPhone01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/ui/layout";
import i18n from "@/i18n/config";
import enTranslation from "@/locales/en/translation.json";
import frTranslation from "@/locales/fr/translation.json";
import { getSEOData } from "@/utils/seo";

export const Route = createFileRoute("/contact-us")({
  component: ContactUs,
  head: () => {
    const currentLang = (i18n.language || "en") as "en" | "fr";
    const translations = currentLang === "fr" ? frTranslation : enTranslation;

    const pageMeta = translations.contactPage?.pageMeta;
    const title = pageMeta?.title || "Contact Us | Continental Mining Services";
    const description =
      pageMeta?.description ||
      "Get in touch with Continental Mining Services in Freetown for quotes on ore haulage, drilling, and equipment rentals.";

    return getSEOData({
      title,
      description,
      keywords:
        "contact, mining services, Sierra Leone, Freetown, ore haulage quote, drilling services, equipment rental",
      path: "/contact-us",
    });
  },
});

function ContactUs() {
  const { t } = useTranslation();
  const breadcrumbs = t("contactPage.pageHeader.breadcrumbs", {
    returnObjects: true,
  }) as string[];
  const interestOptions = t("contactPage.form.interestOptions", {
    returnObjects: true,
  }) as string[];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <Layout>
      {/* Page Header */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10 bg-black/60" />
          <img
            alt="Abstract view of a communication tower or office building glass facade"
            className="h-full w-full object-cover opacity-60"
            height={1080}
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            title="Abstract view of a communication tower or office building glass facade"
            width={1920}
          />
        </div>

        <div className="container relative z-20 px-4 pt-20 md:px-6">
          <motion.div
            className="mx-auto max-w-4xl text-center"
            initial="hidden"
            variants={containerVariants}
            viewport={{ once: true }}
            whileInView="visible"
          >
            <motion.nav
              aria-label="Breadcrumb"
              className="mb-6 flex items-center justify-center gap-2 text-sm text-white/70"
              variants={itemVariants}
            >
              {breadcrumbs.map((crumb, index) => (
                <div className="flex items-center gap-2" key={crumb}>
                  {index > 0 && <span className="text-white/40">/</span>}
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-white">{crumb}</span>
                  ) : (
                    <Link
                      className="transition-colors hover:text-white"
                      to={index === 0 ? "/" : "/contact-us"}
                    >
                      {crumb}
                    </Link>
                  )}
                </div>
              ))}
            </motion.nav>
            <motion.h1
              className="mb-6 font-bold font-heading text-4xl text-white leading-tight md:text-5xl lg:text-6xl"
              variants={itemVariants}
            >
              {t("contactPage.pageHeader.title")}
            </motion.h1>
            <motion.p
              className="mx-auto max-w-2xl font-light text-lg text-white/80 leading-relaxed md:text-xl"
              variants={itemVariants}
            >
              {t("contactPage.pageHeader.subtitle")}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Container - Split Card Design */}
      <section className="relative bg-neutral-50 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative z-30 -mt-20 overflow-hidden rounded-3xl bg-white shadow-2xl lg:grid lg:grid-cols-5">
            {/* Left Panel - Contact Info */}
            <div className="bg-primary px-8 py-12 text-white lg:col-span-2 lg:px-12 lg:py-16">
              <h3 className="mb-4 font-bold font-heading text-2xl md:text-3xl">
                {t("contactPage.contactInfo.title")}
              </h3>
              <p className="mb-10 text-white/80 leading-relaxed">
                {t("contactPage.contactInfo.description")}
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <HugeiconsIcon
                      className="h-5 w-5"
                      icon={MapsLocation01Icon}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">
                      {t("contactPage.contactInfo.headquarters.label")}
                    </h4>
                    <p className="text-white/80">
                      {t("contactPage.contactInfo.headquarters.location")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <HugeiconsIcon className="h-5 w-5" icon={Mail01Icon} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">
                      {t("contactPage.contactInfo.email.label")}
                    </h4>
                    <a
                      className="break-all text-white/80 transition-colors hover:text-white"
                      href="mailto:info@continentalminingservices.com"
                    >
                      info@continentalminingservices.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <HugeiconsIcon
                      className="h-5 w-5"
                      icon={SmartPhone01Icon}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">
                      {t("contactPage.contactInfo.phone.label")}
                    </h4>
                    <a
                      className="text-white/80 transition-colors hover:text-white"
                      href="tel:+23275311632"
                    >
                      +232 75 311632
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex gap-4 border-white/10 border-t pt-8">
                <a
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white hover:text-primary"
                  href="https://www.linkedin.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <HugeiconsIcon className="h-5 w-5" icon={Linkedin01Icon} />
                </a>
                <a
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white hover:text-primary"
                  href="https://www.facebook.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <HugeiconsIcon className="h-5 w-5" icon={Facebook01Icon} />
                </a>
              </div>
            </div>

            {/* Right Panel - Contact Form */}
            <div className="bg-white px-8 py-12 lg:col-span-3 lg:px-12 lg:py-16">
              <h3 className="mb-8 font-bold font-heading text-2xl text-primary md:text-3xl">
                {t("contactPage.form.title")}
              </h3>
              <form className="space-y-6" id="contact-main">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      className="block font-medium text-gray-700 text-sm"
                      htmlFor="full_name"
                    >
                      {t("contactPage.form.fields.fullName.label")}
                    </label>
                    <input
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      id="full_name"
                      name="full_name"
                      placeholder={t(
                        "contactPage.form.fields.fullName.placeholder"
                      )}
                      required
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      className="block font-medium text-gray-700 text-sm"
                      htmlFor="email"
                    >
                      {t("contactPage.form.fields.email.label")}
                    </label>
                    <input
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      id="email"
                      name="email"
                      placeholder={t(
                        "contactPage.form.fields.email.placeholder"
                      )}
                      required
                      type="email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    className="block font-medium text-gray-700 text-sm"
                    htmlFor="phone"
                  >
                    {t("contactPage.form.fields.phone.label")}
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    id="phone"
                    name="phone"
                    placeholder={t("contactPage.form.fields.phone.placeholder")}
                    type="tel"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    className="block font-medium text-gray-700 text-sm"
                    htmlFor="interest"
                  >
                    {t("contactPage.form.fields.interest.label")}
                  </label>
                  <select
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    id="interest"
                    name="interest"
                    required
                  >
                    <option value="">
                      {t("contactPage.form.fields.interest.placeholder")}
                    </option>
                    {interestOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    className="block font-medium text-gray-700 text-sm"
                    htmlFor="message"
                  >
                    {t("contactPage.form.fields.message.label")}
                  </label>
                  <textarea
                    className="min-h-[120px] w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    id="message"
                    name="message"
                    placeholder={t(
                      "contactPage.form.fields.message.placeholder"
                    )}
                    required
                    rows={4}
                  />
                </div>

                <Button
                  className="w-full bg-primary py-6 font-bold text-lg text-white hover:bg-primary/90"
                  size="lg"
                  type="submit"
                >
                  {t("contactPage.form.submitButton")}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative h-[400px] w-full bg-gray-200">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-neutral-200 text-neutral-500">
          <div className="rounded-full bg-white/50 p-8">
            <HugeiconsIcon
              className="h-12 w-12 text-[#682A33]"
              icon={MapsLocation01Icon}
            />
          </div>
          <div className="text-center">
            <h3 className="font-bold text-neutral-700 text-xl">
              {t("contactPage.map.location")}
            </h3>
          </div>
        </div>
        {/* Actual map integration would go here */}
      </section>
    </Layout>
  );
}
