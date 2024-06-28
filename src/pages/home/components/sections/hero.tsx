import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { fadeIn } from "@/lib/variants";

export function HeroSection() {
  return (
    <motion.section
      variants={fadeIn({ delay: 0.4, direction: "up" })}
      initial="hidden"
      whileInView={"show"}
      id="hero"
      className="flex items-center gap-10 md:justify-between w-full flex-col md:flex-row py-20 md:py-40"
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3 w-full md:max-w-[500px]">
          <h1 className="font-display text-2xl md:text-3xl text-green-800 leading-[135%] font-bold">
            Descubra pontos históricos restaurados
          </h1>
          <p className="text-base text-pretty text-green-800">
            Conheça Rio Pardo enquanto ajuda na restauração de prédios
            históricos e aprenda sobre esta que é uma cidade de extrema
            importância histórica para o Rio Grande do Sul.
          </p>
        </div>

        <div className="md:space-x-3 flex flex-col gap-4 md:gap-0 md:flex-row">
          <Button asChild>
            <Link href={"#pricing"}>Ver pacotes</Link>
          </Button>
          <Button variant={"outline"} asChild>
            <a href="mailto:memoriavivariopardo@gmail.com" target="_blank">
              Entrar em contato
            </a>
          </Button>
        </div>
      </div>

      <Image
        src={"/hero-image.png"}
        width={400}
        height={350}
        quality={100}
        priority
        alt="Imagem da catedral da cidade"
        className="w-full md:w-[40%]"
      />
    </motion.section>
  );
}
