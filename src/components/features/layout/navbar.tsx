import { AiPhoneIcon, MailIcon, MenuIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { RegionToggle } from "@/components/features/localization/region-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import logo from "@/logo.png";

export const Navbar = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useRouterState({
    select: (state) => state.location.pathname,
  });
  const isHome = location === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClass = cn(
    "fixed top-0 right-0 left-0 z-50 border-transparent border-b transition-all duration-500 ease-in-out",
    {
      "border-white/10 bg-primary/95 py-3 shadow-lg backdrop-blur-md":
        isScrolled || !isHome,
      "bg-transparent py-6": !isScrolled && isHome,
    }
  );

  const linkClass =
    "relative text-white font-heading font-medium tracking-wide text-sm uppercase transition-colors group";

  return (
    <nav className={navClass}>
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <Link
          className="relative z-50 font-bold font-logo text-3xl text-white tracking-tighter transition-transform hover:scale-105 md:text-4xl flex items-center gap-2"
          to="/"
        >
          <img
            src={logo}
            alt="Continental Mining Logo"
            className="h-[88px] w-auto"
            height={88}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          <Link className={linkClass} to="/">
            {t("nav.links.home")}
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-secondary transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link className={linkClass} to="/services">
            {t("nav.links.services")}
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-secondary transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link className={linkClass} to="/contact-us">
            {t("nav.links.contact")}
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-secondary transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link className={linkClass} to="/about">
            {t("nav.links.aboutUs")}
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-secondary transition-all duration-300 group-hover:w-full" />
          </Link>

          <div className="flex items-center gap-4 border-white/20 border-l pl-4">
            <RegionToggle />
            <a
              href="https://wa.me/254710337605?text=Hello%2C%20I%20would%20like%20to%20request%20a%20quote.%20You%20can%20also%20reach%20me%20at%20operations@continental-miningservices.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-secondary font-heading font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-secondary/90 hover:shadow-secondary/20">
                {t("nav.button.quote")}
              </Button>
            </a>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger
              render={
                <Button
                  className="text-white hover:bg-white/10 hover:text-secondary"
                  size="icon"
                  variant="ghost"
                >
                  <HugeiconsIcon className="h-7 w-7" icon={MenuIcon} />
                </Button>
              }
            />
            <SheetContent
              className="w-[300px] border-l-white/10 bg-primary/95 text-white backdrop-blur-xl"
              side="right"
            >
              <div className="flex h-full flex-col justify-between py-6">
                <div className="mt-8 flex flex-col gap-8 px-2">
                  <div className="flex items-center justify-between border-white/10 border-b pb-4">
                    <span className="font-bold font-logo text-2xl">MENU</span>
                    <RegionToggle />
                  </div>

                  <nav className="flex flex-col gap-6">
                    <Link
                      className="font-bold font-heading text-2xl transition-colors hover:text-secondary"
                      to="/"
                    >
                      {t("nav.links.home")}
                    </Link>
                    <Link
                      className="font-bold font-heading text-2xl transition-colors hover:text-secondary"
                      to="/services"
                    >
                      {t("nav.links.services")}
                    </Link>
                    <Link
                      className="font-bold font-heading text-2xl transition-colors hover:text-secondary"
                      to="/contact-us"
                    >
                      {t("nav.links.contact")}
                    </Link>
                    <Link
                      className="font-bold font-heading text-2xl transition-colors hover:text-secondary"
                      to="/about"
                    >
                      {t("nav.links.aboutUs")}
                    </Link>
                  </nav>
                </div>

                <div className="flex flex-col gap-6 px-2">
                  <div className="space-y-4 rounded-xl bg-white/5 p-6">
                    <div className="flex items-center gap-3 text-white/90">
                      <HugeiconsIcon
                        className="h-5 w-5 shrink-0 text-secondary"
                        icon={AiPhoneIcon}
                      />
                      <span className="font-medium text-sm">
                        +232 75 311632
                      </span>
                    </div>
                    <div className="flex items-start gap-3 text-white/90">
                      <HugeiconsIcon
                        className="mt-0.5 h-5 w-5 shrink-0 text-secondary"
                        icon={MailIcon}
                      />
                      <span className="min-w-0 break-words font-medium text-sm">
                        info@continentalminingservices.com
                      </span>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/254710337605?text=Hello%2C%20I%20would%20like%20to%20request%20a%20quote.%20You%20can%20also%20reach%20me%20at%20operations@continental-miningservices.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      className="w-full bg-secondary font-bold text-white shadow-lg shadow-secondary/20 hover:bg-secondary/90"
                      size="lg"
                    >
                      {t("nav.button.quote")}
                    </Button>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
