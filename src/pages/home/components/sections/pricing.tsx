import { motion } from "framer-motion";

import { PricingCard } from "../pricing-card";

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="w-full flex flex-col gap-20 py-40 items-center"
    >
      <h1 className="font-display text-xl md:text-2xl text-green-800 leading-[135%] font-bold">
        Pacotes Disponíveis
      </h1>

      <div className="w-full lg:grid lg:grid-cols-3 flex flex-col gap-7">
        <PricingCard.Root>
          <PricingCard.Header
            title="Básico"
            description="Plano para aqueles que gostam de relaxar e possuem curiosidade de aprender algo novo."
            price={59.9}
          ></PricingCard.Header>
          <PricingCard.Divider />
          <PricingCard.Details
            details={[
              "Visita por diversos locais históricos",
              "Tuor acompanhado por guia turístico",
              "Transporte fornecido pela associação",
              "Turmas grandes",
              "Datas e horários pré-definidos",
            ]}
          />
        </PricingCard.Root>

        <PricingCard.Root popular>
          <PricingCard.Header
            title="Plus"
            description="Plano para os dedicados a história que buscam conhecer mais sobre a cidade."
            price={109.9}
          ></PricingCard.Header>
          <PricingCard.Divider />
          <PricingCard.Details
            details={[
              "Visita por diversos locais históricos",
              "Tuor acompanhado por guia turístico",
              "Transporte fornecido pela associação",
              "Turmas menores",
              "Palestras em uma casa histórica",
            ]}
          />
        </PricingCard.Root>

        <PricingCard.Root>
          <PricingCard.Header
            title="Premium"
            description="Plano focado em pessoas que atuam na área de história a arquitetura."
            price={209.9}
          ></PricingCard.Header>
          <PricingCard.Divider />
          <PricingCard.Details
            details={[
              "Palestras exclusivas",
              "Grupos fechados",
              "Almoço/jantar em uma casa histórica",
              "Personalização de horários",
              "Tudo que os outros planos oferecem",
            ]}
          />
        </PricingCard.Root>
      </div>
    </section>
  );
}
