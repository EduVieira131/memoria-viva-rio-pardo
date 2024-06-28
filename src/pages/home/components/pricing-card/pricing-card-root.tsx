import { motion } from "framer-motion";
import { ComponentProps } from "react";

import { Button } from "@/components/ui/button";
import { fadeIn } from "@/lib/variants";

interface PricingCardRootProps extends ComponentProps<"div"> {
  popular?: boolean;
}

export function PricingCardRoot({ children, popular }: PricingCardRootProps) {
  return (
    <motion.div
      variants={fadeIn({ delay: 0.6, direction: "up" })}
      initial="hidden"
      whileInView={"show"}
      className={`border border-green-300 p-10 rounded-md flex flex-col gap-1 text-green-800 md:w-[55%] lg:w-full mx-auto ${
        popular ? "bg-sand-100" : ""
      }`}
    >
      {children}
      <Button className="mt-auto">Adquirir pacote</Button>
    </motion.div>
  );
}
