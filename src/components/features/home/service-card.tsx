import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <Card className="group relative overflow-hidden border border-white/40 bg-white/80 shadow-lg backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 dark:bg-card">
      <div className="absolute inset-0 bg-linear-to-br from-transparent via-transparent to-primary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <CardContent className="relative p-8">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/5 text-primary ring-1 ring-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/20">
          <motion.div
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            {icon}
          </motion.div>
        </div>
        <h3 className="mb-3 font-bold font-heading text-primary text-xl">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};
