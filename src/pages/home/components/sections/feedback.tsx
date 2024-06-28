import { motion } from "framer-motion";
import Image from "next/image";

import Avatar from "@/../public/avatar.svg";
import { fadeIn } from "@/lib/variants";

export function FeedbackSection() {
  return (
    <motion.section
      variants={fadeIn({ delay: 0.5, direction: "up" })}
      initial="hidden"
      whileInView={"show"}
      className="mx-auto py-20 md:py-40 w-full md:w-[780px] flex flex-col gap-10"
    >
      <h2 className="font-display leading-[135%] md:text-2xl text-md text-green-800 font-bold text-pretty w-full">
        “Uma das melhores experiências que já tive. Locais magníficos, passeios
        interessantes e equipe atenciosa!”
      </h2>

      <div className="flex items-center gap-4">
        <Image
          src={Avatar}
          alt="Avatar de um homem de barba e chapéu"
          width={70}
          height={70}
        />

        <div className="flex flex-col gap-1">
          <span className="text-sm text-green-700">João Silva</span>
          <span className="text-sm text-green-700">Empresário</span>
        </div>
      </div>
    </motion.section>
  );
}
