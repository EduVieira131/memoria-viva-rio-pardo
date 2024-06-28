import Image from "next/image";

import CheckIcon from "@/../public/check-icon.svg";

interface PricingCardDetailsProps {
  details: string[];
}

export function PricingCardDetails({ details }: PricingCardDetailsProps) {
  return (
    <ul className="flex flex-col gap-3 mb-8">
      {details.map((value) => {
        return (
          <li className="flex gap-3 text-pretty items-center" key={value}>
            <Image src={CheckIcon} alt="" width={26} height={26} />
            <span>{value}</span>
          </li>
        );
      })}
    </ul>
  );
}
