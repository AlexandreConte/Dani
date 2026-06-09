import Header from "@/components/Header";
import Page from "@/components/Shared/Page";
import Image from "next/image";
import WhatsAppContact from "@/components/WhatsAppContact";
import Area from "@/components/Shared/Area";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
// import profilaxia from "@/../public/images/articles/profilaxia.webp" TODO: Adicionar imagem de profilaxia

export default function Profilaxia() {
  return (
    <div>
      <SEO canonicalPath="tratamentos/profilaxia"
        article
        headline="Limpeza Dental: Profilaxia"
        title="Limpeza Dental e Profilaxia em Floripa | Anima Odontologia"
        keywords="profilaxia, limpeza dentária, dentista" />
      <Page>
        <WhatsAppContact />
        <Header />
        <Area>
          <main className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 text-white">
              Profilaxia
            </h1>
            <div className="w-full flex flex-wrap justify-center gap-2 mt-5 mb-10" >
              {/* <Image alt="Implante de zircônia" src={zirconia1} className="h-[250px] w-auto max-[610px]:h-auto max-[610px]:w-[220px] object-cover"></Image>
              <Image alt="Implante de zircônia" src={zirconia2} className="h-[250px] w-auto max-[610px]:h-auto max-[610px]:w-[220px] object-cover"></Image> */}
            </div>
            <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-zinc-100 mb-12">
              <p className="text-lg text-zinc-600 leading-relaxed space-y-4">
                A profilaxia (limpeza dental) é fundamental para a prevenção de doenças bucais e para a manutenção da saúde oral. O procedimento promove a remoção de placa e tártaro, melhora a sensação de limpeza e contribui para gengivas mais saudáveis e um sorriso bem cuidado.
              </p>
            </div>
          </main>
        </Area>
        <Footer />
      </Page>
    </div>
  )
}
