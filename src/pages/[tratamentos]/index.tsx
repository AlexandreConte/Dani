import Header from "@/components/Header";
import Page from "@/components/Shared/Page";
import WhatsAppContact from "@/components/WhatsAppContact";
import ArticlePreview from "@/components/ArticlePreview";
import Link from "next/link";
import Footer from "@/components/Footer";
import zirconiaImg from "@/../public/images/articles/zirconia-1.webp"
import zirconiaTitanio from "@/../public/images/articles/zirconia_titanio.webp"
import cariesInfiltracoes from "@/../public/images/articles/caries.webp"
// import profilaxia from "@/../public/images/articles/profilaxia.webp" //TODO: AJUSTAR IMAGEM DE PROFILAXIA
import botox from "@/../public/images/articles/botox.webp"
import facetas from "@/../public/images/articles/facetas-lentes-ceramica.webp"
import SEO from "@/components/SEO";

export default function Treatments() {
  return (
    <div>
      <SEO keywords="tratamentos odontológicos, tratamento, odontologia, dentista, dentista especializada, sorriso bonito" />
      <Page className="flex flex-col items-center">
        <Header />
        <WhatsAppContact />
        <main className="container px-4 flex flex-col items-center">
          <div className="max-w-4xl flex flex-col items-center mb-12">
            <div className="bg-[#2D4F40] w-screen py-12">
              <h1 className="text-3xl md:text-5xl font-bold text-center text-white">
                Tratamentos
              </h1>
            </div>

            <div className="flex justify-center items-center gap-2 py-12 flex-wrap">
              <Link href="/">
                Início
              </Link>
              &gt;
              <Link href={"/tratamentos"} className="underline">Tratamentos</Link>
            </div>

            {/* LISTA DE TRATAMENTOS */}
            <div className="grid gap-8 md:grid-cols-2 px-2 sm:px-4 md:px-8">
              <ArticlePreview
                link="tratamentos/zirconia"
                alt="Implante de Zircônia"
                image={zirconiaImg}
                textPreview="Você perdeu um dente e não sabe qual o melhor implante para repô-lo? Os implantes de zircônia são uma alternativa moderna e altamente..."
                title="Implantes de Zircônia"
              />

              <ArticlePreview
                link="tratamentos/zirconiaoutitanio"
                alt="Implante de Zircônia ou de titânio"
                image={zirconiaTitanio}
                textPreview="Os implantes dentários podem ser realizados com diferentes materiais, sendo os mais conhecidos o titânio e a zircônia. Ambos possuem..."
                title="Implantes de Titânio e Implantes de Zircônia"
              />

              <ArticlePreview
                link="tratamentos/botox"
                alt="Botox"
                image={botox}
                textPreview="A aplicação de toxina botulínica, popularmente conhecida como “Botox”, é um procedimento moderno, seguro e minimamente..."
                title="Toxina Botulínica"
              />

              <ArticlePreview
                link="tratamentos/facetas"
                alt="Facetas (lentes cerâmicas)"
                image={facetas}
                textPreview="As facetas em cerâmica são laminados ultrafinos confeccionados de forma personalizada para transformar o sorriso com naturalidade..."
                title="Facetas (Lentes Cerâmicas)"
              />

              <ArticlePreview
                link="tratamentos/canal"
                alt="Cáries e infiltrações dentárias"
                image={cariesInfiltracoes}
                textPreview="O tratamento de cáries e infiltrações é fundamental para manter a saúde e a integridade dos dentes. Através de uma avaliação cuidadosa..."
                title="Tratamento de Canal"
              />

            </div>
          </div>
        </main>
        <Footer />
      </Page>
    </div>
  )
}
