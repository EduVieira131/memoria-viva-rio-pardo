import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { fadeIn } from "@/lib/variants";

export function HistoryCitySection() {
  return (
    <motion.section
      variants={fadeIn({ delay: 0.5, direction: "up" })}
      initial="hidden"
      whileInView={"show"}
      className="flex flex-col md:flex-row items-center gap-7 lg:gap-0 md:justify-between w-full h-fit md:h-[500px] md:bg-sand-100 p-6 py-20 md:py-40"
    >
      <Image
        src={"/historic-build.png"}
        width={400}
        height={350}
        alt="Imagem da catedral da cidade"
        className="w-full md:w-[40%]"
      />

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3 w-full md:max-w-[500px]">
          <h1 className="font-display text-xl md:text-2xl text-green-800 leading-[135%] font-bold">
            Um prédio restaurado, uma história renovada
          </h1>
          <p className="text-base text-pretty text-green-800">
            Cada prédio possui um marco na história, contando fatos de sua época
            ou representando o dia a dia das pessoas que ali viveram.
          </p>
        </div>

        <div className="space-x-3">
          <Button asChild>
            <Link href={"/history"}>Ler história de Rio Pardo</Link>
          </Button>
        </div>
      </div>
    </motion.section>
  );
}
