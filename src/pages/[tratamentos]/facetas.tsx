import Header from "@/components/Header";
import Page from "@/components/Shared/Page";
import Image from "next/image";
import WhatsAppContact from "@/components/WhatsAppContact";
import Area from "@/components/Shared/Area";
import Footer from "@/components/Footer";
import Link from "next/link";
import facetas from "@/../public/images/articles/facetas-lentes-ceramica.webp"
import SEO from "@/components/SEO";

export default function Facetas() {
  return (
    <div>
      <SEO canonicalPath="tratamentos/facetas"
        article
        headline="Facetas de Porcelana"
        title="Facetas de Porcelana em Floripa | Anima Odontologia"
        keywords="facetas, faceta, lentes cerâmicas, lente cerâmica, dentista" />
      <Page>
        <WhatsAppContact />
        <Header />
        <Area>
          <main className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 text-white">
              Facetas (Lentes Cerâmicas)
            </h1>
            <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-zinc-100 mb-12 flex justify-center gap-8 items-center max-[768px]:flex-wrap">
              <p className="text-lg text-zinc-600 leading-relaxed space-y-4">
                As facetas em cerâmica são laminados ultrafinos confeccionados de forma personalizada para transformar o sorriso com naturalidade e sofisticação. Indicadas para corrigir formato, cor, tamanho e pequenas imperfeições dos dentes, elas proporcionam um resultado estético harmonioso, resistente e duradouro.
                <br /><br />
                O tratamento é planejado de acordo com as características de cada paciente, permitindo que ele participe e opine durante todo o processo, para que o resultado final fique alinhado às suas expectativas e à naturalidade do sorriso.
              </p>
              <Image alt="Resultado antes e depois: Facetas (Lentes Cerâmicas)" src={facetas} className="h-[250px] w-auto max-[610px]:h-auto max-[610px]:w-[220px] object-cover"></Image>
            </div>
          </main>
        </Area>
        <Footer />
      </Page>
    </div>
  )
}
