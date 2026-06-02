import Header from "@/components/Header";
import Page from "@/components/Shared/Page";
import Image from "next/image";
import WhatsAppContact from "@/components/WhatsAppContact";
import Area from "@/components/Shared/Area";
import Footer from "@/components/Footer";
import Link from "next/link";
import BotoxImg from "@/../public/images/articles/botox.webp"
import BotoxImg1 from "@/../public/images/articles/botox1.webp"

export default function Botox() {
  return (
    <Page>
      <WhatsAppContact />
      <Header />
      <Area>
        <main className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">

          <div className="flex justify-center gap-2 mb-12">
            <Link href={"/"}>Início</Link>
            &gt;
            <Link href={"/tratamentos"}>Tratamentos</Link>
            &gt;
            <Link href={"/tratamentos/botox"} className="underline">Toxina Botulínica</Link>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 text-white">
            Toxina Botulínica
          </h1>

          <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-zinc-100 mb-12 flex justify-center gap-8 items-center max-[768px]:flex-wrap">
            <p className="text-lg text-zinc-600 leading-relaxed space-y-4">
              A aplicação de toxina botulínica, popularmente conhecida como “Botox”, é um procedimento
              moderno, seguro e minimamente invasivo, indicado para suavizar linhas de expressão e
              proporcionar um aspecto mais leve, descansado e natural ao rosto. <br /><br /> A toxina botulínica atua
              relaxando temporariamente a musculatura responsável pelas rugas dinâmicas, como as da
              testa, glabela (“linhas de preocupação”) e região dos olhos. Além de suavizar marcas já
              existentes, o tratamento também possui um importante efeito preventivo, ajudando a evitar
              que essas rugas se aprofundem e se tornem permanentes ao longo do tempo.
              <br /><br />
              O procedimento é rápido, realizado em consultório e geralmente permite retorno imediato às
              atividades do dia a dia.
              <br /><br />
              Cada aplicação é planejada de forma individualizada, respeitando as características faciais,
              expressões e objetivos de cada paciente, buscando sempre resultados harmônicos, naturais
              e equilibrados.
            </p>
          </div>

          <div className="bg-[#2D4F40] rounded-3xl p-6 my-12">
            <span className="text-white text-2xl flex flex-col items-center">Resultados Antes e Após Aplicação da Toxina Botulínica</span><br /><br />
            <div className="flex justify-center items-center flex-wrap gap-12">
              <Image alt="Toxina Botulínica" src={BotoxImg} className="h-[250px] w-auto max-[610px]:h-auto max-[610px]:w-[220px] object-cover"></Image>
              <Image alt="Toxina Botulínica" src={BotoxImg1} className="h-[250px] w-auto max-[610px]:h-auto max-[610px]:w-[220px] object-cover"></Image>
            </div>
          </div>
        </main>
      </Area>
      <Footer />
    </Page>
  )
}
