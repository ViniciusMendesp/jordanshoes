import { Content } from "@Aplications/components/Content";
import { Header } from "@Aplications/components/Header";
import { TopFixed } from "@Aplications/components/TopFixed";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-dark-30">
      <TopFixed text="Frete grátis para todo o Brasil" />
      <Header />
      <Content />
    </main>
  );
}
