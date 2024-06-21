import { Button } from "@/components/ui/button";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

import Avatar from "../../public/avatar.svg";
import { Map, User } from "lucide-react";

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
        <section
          id="hero"
          className="flex items-center justify-between w-full h-[500px]"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3 max-w-[500px]">
              <h1 className="font-display text-3xl text-green-800 leading-[135%] font-bold">
                Descubra pontos históricos restaurados
              </h1>
              <p className="text-base text-pretty text-green-800">
                Conheça pontos históricos da cidade de Rio Pardo enquanto ajuda
                na restauração de prédios históricos e aprenda sobre esta que é
                uma cidade de extrema importância histórica para o Rio Grande do
                Sul.
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
        </section>

        <section className="mx-auto my-[100px] w-[780px] flex flex-col gap-10">
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
        </section>

        <section id="about" className="my-36 flex flex-col gap-16">
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
        </section>
      </main>
    </>
  );
}
