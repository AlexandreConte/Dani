import Header from "@/components/Header";
import Page from "@/components/Shared/Page";
import ArticlePreview from "@/components/ArticlePreview";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FixedMenu from "@/components/FixedMenu";
import zirconiaImg from "@/../public/images/articles/zirconia/zirconia-1.webp";
import zirconiaTitanio from "@/../public/images/articles/zirconia-ou-titanio/zirconia_titanio.webp";
import botox from "@/../public/images/articles/toxina-botulinica/botox.webp";
import facetas from "@/../public/images/articles/facetas/facetas-lentes-ceramica.webp";
import denteQuebrado from "@/../public/images/articles/dente-quebrado/dente-quebrado.webp";
import proteseProtocolo from "@/../public/images/articles/protese-tipo-protocolo/protese-protocolo-2.webp";
import clareamento from "@/../public/images/articles/clareamento/clareamento.webp"

export default function Treatments() {
  return (
    <div>
      <SEO
        canonicalPath="tratamentos"
        keywords="tratamentos odontológicos, tratamento, odontologia, dentista, dentista especializada, sorriso bonito"
      />
      <Page className="flex flex-col items-center">
        <Header />
        <FixedMenu isTreatmentPage />
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
                link="tratamentos/zirconia-ou-titanio"
                alt="Implante de Zircônia ou de titânio"
                image={zirconiaTitanio}
                title="Titânio e Zircônia"
              />

              <ArticlePreview
                link="tratamentos/toxina-botulinica"
                alt="Toxina Botulínica"
                image={botox}
                title="Toxina Botulínica"
              />

              <ArticlePreview
                link="tratamentos/facetas"
                alt="Facetas e lentes"
                image={facetas}
                title="Facetas e Lentes"
              />

              <ArticlePreview
                link="tratamentos/dente-quebrado"
                alt="Meu dente quebrou, e agora?"
                image={denteQuebrado}
                title="Meu dente quebrou, e agora?"
              />

              <ArticlePreview
                link="tratamentos/protese-tipo-protocolo"
                alt="Prótese tipo Protocolo"
                image={proteseProtocolo}
                title="Prótese Tipo Protocolo"
              />

              <ArticlePreview
                link="tratamentos/clareamento"
                alt="Clareamento dental"
                image={clareamento}
                title="Clareamento Dental"
              />
            </div>
          </div>
        </main>
        <Footer />
      </Page>
    </div>
  );
}
