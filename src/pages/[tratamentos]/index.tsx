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
      <SEO canonicalPath="tratamentos"
        keywords="tratamentos odontológicos, tratamento, odontologia, dentista, dentista especializada, sorriso bonito" />
      <Page className="flex flex-col items-center">
        <Header />
        <WhatsAppContact />
        <main className="container px-4 flex flex-col items-center">
          <div className="flex flex-col items-center mb-12">
            <div className="bg-[#2D4F40] w-screen py-12">
              <h1 className="text-3xl md:text-5xl font-medium text-center text-[#A8C8B6]">
                Tratamentos
              </h1>
            </div>

            {/* LISTA DE TRATAMENTOS */}
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4 px-2 sm:px-4 md:px-8">
              <ArticlePreview
                link="tratamentos/zirconia"
                alt="Implante de Zircônia"
                image={zirconiaImg}
                title="Implantes de Zircônia"
              />

              <ArticlePreview
                link="tratamentos/zirconiaoutitanio"
                alt="Implante de Zircônia ou de titânio"
                image={zirconiaTitanio}
                title="Comparação entre Implantes"
              />

              <ArticlePreview
                link="tratamentos/botox"
                alt="Botox"
                image={botox}
                title="Botox"
              />

              <ArticlePreview
                link="tratamentos/facetas"
                alt="Facetas (lentes cerâmicas)"
                title="Facetas / Lentes Cerâmicas"
                image={facetas}
              />

              <ArticlePreview
                link="tratamentos/canal"
                alt="Cáries e infiltrações dentárias"
                image={cariesInfiltracoes}
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
