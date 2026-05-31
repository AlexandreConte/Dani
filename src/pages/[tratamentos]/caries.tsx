import Header from "@/components/Header";
import Page from "@/components/Shared/Page";
import Image from "next/image";
import WhatsAppContact from "@/components/WhatsAppContact";
import Area from "@/components/Shared/Area";
import Footer from "@/components/Footer";
import Link from "next/link";
// import cariesImg from "@/../public/images/articles/caries.webp"

export default function Caries() {
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
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 text-white">
            Cáries e Infiltrações Dentárias
          </h1>

          <div className="w-full flex flex-wrap justify-center gap-2 mt-5 mb-10" >
            {/* <Image alt="Implante de zircônia" src={zirconia1} className="h-[250px] w-auto max-[610px]:h-auto max-[610px]:w-[220px] object-cover"></Image>
            <Image alt="Implante de zircônia" src={zirconia2} className="h-[250px] w-auto max-[610px]:h-auto max-[610px]:w-[220px] object-cover"></Image> */}
          </div>
          <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-zinc-100 mb-12">
            <p className="text-lg text-zinc-600 leading-relaxed space-y-4">
              O tratamento de cáries e infiltrações é fundamental para manter a saúde e a integridade dos dentes. Através de uma avaliação cuidadosa, são removidas as áreas comprometidas e realizadas restaurações estéticas que devolvem função, conforto e naturalidade ao sorriso, além de reforçar a estrutura dental. As restaurações podem ser feitas em resina ou cerâmica, de acordo com a necessidade de cada caso. O tratamento ajuda a prevenir dores, fraturas e problemas maiores, preservando os dentes de forma segura, eficiente e duradoura.
            </p>
          </div>
        </main>
      </Area>
      <Footer />
    </Page>
  )
}
