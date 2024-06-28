interface PrincingCardHeaderProps {
  title: string;
  price: number;
  description: string;
}

export function PricingCardHeader({
  description,
  price,
  title,
}: PrincingCardHeaderProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <span className="font-display font-bold text-lg">{title}</span>
      <h3 className="font-bold text-2xl my-2">
        {price.toLocaleString("pr-br", {
          style: "currency",
          currency: "BRL",
        })}
      </h3>
      <p className="min-h-[78px]">{description}</p>
    </div>
  );
}
