import { ComponentProps } from "react";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

type LayoutProps = ComponentProps<"main">;

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
