import { motion } from "framer-motion";
import { Map, User } from "lucide-react";

import { fadeIn } from "@/lib/variants";

import { LocationsCarousel } from "../locations-carousel";

export function DiscoverySection() {
  return (
    <motion.section
      variants={fadeIn({ delay: 0.5, direction: "up" })}
      initial="hidden"
      whileInView={"show"}
      id="about"
      className="py-20 md:py-40 flex flex-col gap-16"
    >
      <div className="w-full flex flex-col gap-6 md:gap-0 md:flex-row justify-between md:items-center items-start">
        <div className="flex flex-col gap-4 w-full md:max-w-[420px] lg:max-w-[620px]">
          <h2 className="font-display leading-[135%] text-xl md:text-2xl text-green-800 font-bold">
            Aproveite um passeio relaxante enquanto restaura a história
          </h2>
          <p className="text-base text-pretty text-green-800">
            Relembrar histórias a muito perdidas através de experiências
            relaxantes e informativas, esse é o objetivo da Memória Viva Rio
            Pardo.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2 w-full md:w-fit">
            <Map color="#475645" className="size-6" />{" "}
            <span className="text-base text-pretty text-green-800">
              Passeie pela cidade com um guia
            </span>
          </div>

          <div className="flex items-center gap-2 w-full lg:w-fit">
            <User color="#475645" className="size-6" />{" "}
            <span className="text-base text-pretty text-green-800 max-w-[260px]">
              Tenha palestras com historiadores renomados
            </span>
          </div>
        </div>
      </div>

      <LocationsCarousel />
    </motion.section>
  );
}
