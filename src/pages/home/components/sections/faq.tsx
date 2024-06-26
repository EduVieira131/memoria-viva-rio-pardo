import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
  return (
    <section className="w-full flex flex-col gap-20 py-20 md:py-40 items-center">
      <h1 className="font-display text-xl md:text-2xl text-green-800 leading-[135%] font-bold">
        Perguntas frequentes
      </h1>

      <div className="w-full flex flex-col gap-6">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem
            value="item-1"
            className="bg-gray text-green-800 font-body border border-green-100 p-6 hover:no-underline rounded-2xl"
          >
            <AccordionTrigger className="hover:no-underline text-left text-base font-body">
              Como ajudo no processo de restauração?
            </AccordionTrigger>
            <AccordionContent className="font-body text-base border-t border-[#1e1e1e]/10 py-5">
              O valor arrecadado com os pacotes acima são direcionados para a
              restauração de pontos históricos na cidade.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
