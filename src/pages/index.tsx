"use client";

import "keen-slider/keen-slider.min.css";

import { motion } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import { Map, User } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { fadeIn } from "@/lib/variants";

import Avatar from "../../public/avatar.svg";
import CheckIcon from "../../public/check-icon.svg";

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 28,
    },
  });

  return (
    <>
      <Head>
        <title>Início | Memória Viva Rio Pardo</title>
      </Head>
      <main>
        <motion.section
          variants={fadeIn({ delay: 0.4, direction: "up" })}
          initial="hidden"
          whileInView={"show"}
          id="hero"
          className="flex items-center justify-between w-full py-40"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3 max-w-[500px]">
              <h1 className="font-display text-3xl text-green-800 leading-[135%] font-bold">
                Descubra pontos históricos restaurados
              </h1>
              <p className="text-base text-pretty text-green-800">
                Conheça Rio Pardo enquanto ajuda na restauração de prédios
                históricos e aprenda sobre esta que é uma cidade de extrema
                importância histórica para o Rio Grande do Sul.
              </p>
            </div>

            <div className="space-x-3">
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
            alt="Imagem da catedral da cidade"
            className="w-[40%]"
          />
        </motion.section>

        <motion.section
          variants={fadeIn({ delay: 0.5, direction: "up" })}
          initial="hidden"
          whileInView={"show"}
          className="mx-auto py-40 w-[780px] flex flex-col gap-10"
        >
          <h2 className="font-display leading-[135%] text-2xl text-green-800 font-bold">
            “Uma das melhores experiências que já tive. Locais magníficos,
            passeios interessantes e equipe atenciosa!”
          </h2>

          <div className="flex items-center gap-4">
            <Image
              src={Avatar}
              alt="Avatar de um homem de barba e chapéu"
              width={70}
              height={70}
            />

            <div className="flex flex-col gap-1">
              <span className="text-sm text-green-600">João Silva</span>
              <span className="text-sm text-green-600">Empresário</span>
            </div>
          </div>
        </motion.section>

        <motion.section
          variants={fadeIn({ delay: 0.5, direction: "up" })}
          initial="hidden"
          whileInView={"show"}
          id="about"
          className="py-40 flex flex-col gap-16"
        >
          <div className="w-full flex justify-between items-center">
            <div className="flex flex-col gap-4 max-w-[620px]">
              <h2 className="font-display leading-[135%] text-2xl text-green-800 font-bold">
                Aproveite um passeio relaxante enquanto restaura a história
              </h2>
              <p className="text-base text-pretty text-green-800">
                Relembrar histórias a muito perdidas através de experiências
                relaxantes e informativas, esse é o objetivo da Memória Viva Rio
                Pardo.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <Map color="#475645" />{" "}
                <span className="text-base text-pretty text-green-800">
                  Passeie pela cidade com um guia
                </span>
              </div>

              <div className="flex items-center gap-2">
                <User color="#475645" />{" "}
                <span className="text-base text-pretty text-green-800">
                  Tenha palestras com historiadores renomados
                </span>
              </div>
            </div>
          </div>

          <div ref={sliderRef} className="keen-slider h-[320px]">
            <div className="keen-slider__slide">
              <Image
                src="/tourist-spot-1.png"
                alt="Foto de um ponto turístico da cidade"
                width={400}
                height={320}
              />
            </div>

            <div className="keen-slider__slide">
              <Image
                src="/tourist-spot-2.png"
                alt="Foto de um ponto turístico da cidade"
                width={400}
                height={320}
              />
            </div>

            <div className="keen-slider__slide">
              <Image
                src="/tourist-spot-3.png"
                alt="Foto de um ponto turístico da cidade"
                width={400}
                height={320}
              />
            </div>
          </div>
        </motion.section>

        <motion.section
          variants={fadeIn({ delay: 0.5, direction: "up" })}
          initial="hidden"
          whileInView={"show"}
          className="flex items-center justify-between w-full h-[500px] bg-sand-100 p-6 py-40"
        >
          <Image
            src={"/historic-build.png"}
            width={400}
            height={350}
            alt="Imagem da catedral da cidade"
            className="w-[40%]"
          />

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3 max-w-[500px]">
              <h1 className="font-display text-3xl text-green-800 leading-[135%] font-bold">
                Um prédio restaurado, uma história renovada
              </h1>
              <p className="text-base text-pretty text-green-800">
                Cada prédio possui um marco na história, contando fatos de sua
                época ou representando o dia a dia das pessoas que ali viveram.
              </p>
            </div>

            <div className="space-x-3">
              <Button asChild>
                <Link href={"/history"}>Ler história de Rio Pardo</Link>
              </Button>
            </div>
          </div>
        </motion.section>

        <section
          id="pricing"
          className="w-full flex flex-col gap-20 py-40 items-center"
        >
          <h1 className="font-display text-3xl text-green-800 leading-[135%] font-bold">
            Pacotes Disponíveis
          </h1>

          <div className="w-full flex items-center gap-7">
            <motion.div
              variants={fadeIn({ delay: 0.3, direction: "up" })}
              initial="hidden"
              whileInView={"show"}
              className="border border-green-300 p-10 rounded-md flex flex-col gap-1 text-green-800"
            >
              <span className="font-display font-bold text-lg">Básico</span>
              <h3 className="font-bold text-2xl my-2">R$ 59,90</h3>
              <p>
                Plano para aqueles que gostam de relaxar e possuem curiosidade
                de aprender algo novo.
              </p>

              <div className="w-full h-px bg-green-800 my-6"></div>

              <ul className="flex flex-col gap-3 mb-8">
                <li className="flex gap-3 text-pretty items-center">
                  <Image src={CheckIcon} alt="" width={26} height={26} />
                  <span>Visita por diversos locais históricos</span>
                </li>
                <li className="flex gap-3 text-pretty items-center">
                  <Image src={CheckIcon} alt="" width={26} height={26} />
                  <span>Tuor acompanhado por guia turístico</span>
                </li>
                <li className="flex gap-3 text-pretty items-center">
                  <Image src={CheckIcon} alt="" width={26} height={26} />
                  <span>Transporte fornecido pela associação</span>
                </li>
                <li className="flex gap-3 text-pretty items-center">
                  <Image src={CheckIcon} alt="" width={26} height={26} />
                  <span>Turmas grandes</span>
                </li>
                <li className="flex gap-3 text-pretty items-center">
                  <Image src={CheckIcon} alt="" width={26} height={26} />
                  <span>Datas e horários pré-definidos</span>
                </li>
              </ul>

              <Button>Adquirir pacote</Button>
            </motion.div>

            <motion.div
              variants={fadeIn({ delay: 0.9, direction: "up" })}
              initial="hidden"
              whileInView={"show"}
              className="border border-green-300 p-10 rounded-md flex flex-col gap-1 text-green-800 bg-sand-100"
            >
              <span className="font-display font-bold text-lg">Plus</span>
              <h3 className="font-bold text-2xl my-2">R$ 109,90</h3>
              <p>
                Plano para os dedicados a história que buscam conhecer mais
                sobre a cidade.
              </p>

              <div className="w-full h-px bg-green-800 my-6"></div>

              <ul className="flex flex-col gap-3 mb-8">
                <li className="flex gap-3 text-pretty items-center">
                  <Image src={CheckIcon} alt="" width={26} height={26} />
                  <span>Visita por diversos locais históricos</span>
                </li>
                <li className="flex gap-3 text-pretty items-center">
                  <Image src={CheckIcon} alt="" width={26} height={26} />
                  <span>Tuor acompanhado por guia turístico</span>
                </li>
                <li className="flex gap-3 text-pretty items-center">
                  <Image src={CheckIcon} alt="" width={26} height={26} />
                  <span>Transporte fornecido pela associação</span>
                </li>
                <li className="flex gap-3 text-pretty items-center">
                  <Image src={CheckIcon} alt="" width={26} height={26} />
                  <span>Turmas menores</span>
                </li>
                <li className="flex gap-3 text-pretty items-center">
                  <Image src={CheckIcon} alt="" width={26} height={26} />
                  <span>Palestras em uma casa histórica</span>
                </li>
              </ul>

              <Button>Adquirir pacote</Button>
            </motion.div>

            <motion.div
              variants={fadeIn({ delay: 0.6, direction: "up" })}
              initial="hidden"
              whileInView={"show"}
              className="border border-green-300 p-10 rounded-md flex flex-col gap-1 text-green-800"
            >
              <span className="font-display font-bold text-lg">Premium</span>
              <h3 className="font-bold text-2xl my-2">R$ 209,90</h3>
              <p>
                Plano focado em pessoas que atuam na área de história a
                arquitetura.
              </p>

              <div className="w-full h-px bg-green-800 my-6"></div>

              <ul className="flex flex-col gap-3 mb-8">
                <li className="flex gap-3 text-pretty items-center">
                  <Image src={CheckIcon} alt="" width={26} height={26} />
                  <span>Palestras exclusivas</span>
                </li>
                <li className="flex gap-3 text-pretty items-center">
                  <Image src={CheckIcon} alt="" width={26} height={26} />
                  <span>Grupos fechados</span>
                </li>
                <li className="flex gap-3 text-pretty items-center">
                  <Image src={CheckIcon} alt="" width={26} height={26} />
                  <span>Almoço/jantar em uma casa histórica</span>
                </li>
                <li className="flex gap-3 text-pretty items-center">
                  <Image src={CheckIcon} alt="" width={26} height={26} />
                  <span>Personalização de horários</span>
                </li>
                <li className="flex gap-3 text-pretty items-center">
                  <Image src={CheckIcon} alt="" width={26} height={26} />
                  <span>Tudo que os outros planos oferecem</span>
                </li>
              </ul>

              <Button>Adquirir pacote</Button>
            </motion.div>
          </div>
        </section>

        <section
          id="pricing"
          className="w-full flex flex-col gap-20 py-40 items-center"
        >
          <h1 className="font-display text-3xl text-green-800 leading-[135%] font-bold">
            Perguntas frequentes
          </h1>

          <div className="w-full flex flex-col gap-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="bg-gray text-green-800 font-body border border-green-100 p-6 hover:no-underline rounded-2xl"
              >
                <AccordionTrigger className="hover:no-underline">
                  Como ajudo no processo de restauração?
                </AccordionTrigger>
                <AccordionContent>
                  O valor arrecadado com os pacotes acima são direcionados para
                  a restauração de pontos históricos na cidade.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>
    </>
  );
}
