import Header from "@/components/Header";
import Page from "@/components/Shared/Page";
import WhatsAppContact from "@/components/WhatsAppContact";
import zirconiaImg from "@/../public/images/articles/zirconia-1.webp"
import zirconiaTitanio from "@/../public/images/articles/zirconia_titanio.webp"
import ArticlePreview from "@/components/ArticlePreview";

export default function Treatments() {
  return (
    <Page>
      <Header />
      <WhatsAppContact />
      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 text-white">
            Sobre Alguns Tratamentos
          </h1>

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

          </div>
        </div>
      </main>
    </Page>
  )
}
