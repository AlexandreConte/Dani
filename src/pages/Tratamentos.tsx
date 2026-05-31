import Header from "@/components/Header";
import Page from "@/components/Shared/Page";
import WhatsAppContact from "@/components/WhatsAppContact";
import ArticlePreview from "@/components/ArticlePreview";
import Link from "next/link";
import Footer from "@/components/Footer";
import zirconiaImg from "@/../public/images/articles/zirconia-1.webp"
import zirconiaTitanio from "@/../public/images/articles/zirconia_titanio.webp"
import cariesInfiltracoes from "@/../public/images/articles/zirconia_titanio.webp"

export default function Treatments() {
  return (
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

          <Link href="/" className="text-center flex justify-center items-center mt-12">
            Início
          </Link>

          <p className="text-lg text-zinc-600 text-center mb-12">
            {/* Aqui você pode inserir uma breve introdução sobre a qualidade dos tratamentos oferecidos. */}
          </p>

          {/* LISTA DE TRATAMENTOS */}
          <div className="grid gap-8 md:grid-cols-2">
            <ArticlePreview
              link="tratamentos/zirconia"
              alt="Implante de Zircônia"
              image={zirconiaImg}
              textPreview="Você perdeu um dente e não sabe qual o melhor implante para repô-lo? Os implantes de zircônia são uma alternativa moderna e altamente..."
              title="Implantes de Zircônia"
            />

            <ArticlePreview
              link="tratamentos/titaniovszirconia"
              alt="Implante de Zircônia ou de titânio"
              image={zirconiaTitanio}
              textPreview="Os implantes dentários podem ser realizados com diferentes materiais, sendo os mais conhecidos o titânio e a zircônia. Ambos possuem..."
              title="Implantes de Titânio versus implantes de Zircônia"
            />

            <ArticlePreview
              link="tratamentos/caries"
              alt="Cáries e infiltrações dentárias"
              image={cariesInfiltracoes}
              textPreview="O tratamento de cáries e infiltrações é fundamental para manter a saúde e a integridade dos dentes. Através de uma avaliação cuidadosa..."
              title="Cáries e infiltrações dentárias"
            />

            <ArticlePreview
              link="tratamentos/profilaxia"
              alt="Profilaxia"
              image={cariesInfiltracoes}
              textPreview="A profilaxia (limpeza dental) é fundamental para a prevenção de doenças bucais e para a manutenção da saúde oral. O procedimento promove a..."
              title="Profilaxia"
            />

          </div>
        </div>
      </main>
      <Footer />
    </Page>
  )
}
