import { ComponentProps } from "react";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

type LayoutProps = ComponentProps<"main">;

export default function Layout({ children }: LayoutProps) {
  return (
    <div
      className={
        "min-h-screen mx-auto max-w-7xl px-8 lg:px-16 font-body leading-[160%] bg-gray"
      }
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
