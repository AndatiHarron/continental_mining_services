import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

export const RegionToggle = () => {
  const { i18n } = useTranslation();
  const [region, setRegion] = useState<string>(i18n.language);

  useEffect(() => {
    setRegion(i18n.language);
  }, [i18n.language]);

  const handleLanguageChange = (lang: string) => {
    if (lang !== region) {
      i18n.changeLanguage(lang);
    }
  };

  return (
    <div className="flex items-center rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-sm">
      <button
        aria-label="Switch to English"
        aria-pressed={region === "en"}
        className={cn(
          "relative rounded-full px-3 py-1.5 font-bold font-heading text-xs uppercase tracking-wider transition-all duration-300",
          region === "en"
            ? "bg-secondary text-white shadow-md shadow-secondary/20"
            : "text-white/50 hover:bg-white/5 hover:text-white"
        )}
        onClick={() => handleLanguageChange("en")}
        type="button"
      >
        En
      </button>
      <button
        aria-label="Switch to French"
        aria-pressed={region === "fr"}
        className={cn(
          "relative rounded-full px-3 py-1.5 font-bold font-heading text-xs uppercase tracking-wider transition-all duration-300",
          region === "fr"
            ? "bg-secondary text-white shadow-md shadow-secondary/20"
            : "text-white/50 hover:bg-white/5 hover:text-white"
        )}
        onClick={() => handleLanguageChange("fr")}
        type="button"
      >
        Fr
      </button>
    </div>
  );
};
