import Header from "@/components/Header";
import Page from "@/components/Shared/Page";
import Image from "next/image";
import ZirconiaETitanio from "@/../public/images/articles/zirconia_titanio.webp"
import WhatsAppContact from "@/components/WhatsAppContact";
import Area from "@/components/Shared/Area";
import Footer from "@/components/Footer";
import Link from "next/link";
import SEO from "@/components/SEO";

export default function Titaniovszirconia() {
  return (
    <div>
      <SEO keywords="implante, implante de zircônia, implante de titânio, dentista" />
      <Page>
        <WhatsAppContact />
        <Header />
        <Area>
          <main className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
            <div className="flex justify-center gap-2 mb-12 flex-wrap">
              <Link href={"/"}>Início</Link>
              &gt;
              <Link href={"/tratamentos"}>Tratamentos</Link>
              &gt;
              <Link href={"/tratamentos/titaniovszirconia"} className="underline">Implante de Titânio ou Implante de Zircônia</Link>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 text-white">
              Implante de Titânio versus implante de Zircônia
            </h1>
            <div className="w-full flex flex-wrap justify-center gap-2 mt-5 mb-10" >
              <Image alt="Implante de zircônia e implante de titânio" src={ZirconiaETitanio} className="h-[250px] w-auto max-[610px]:h-auto max-[610px]:w-[220px] object-cover"></Image>
            </div>
            <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-zinc-100 mb-12">
              <p className="text-lg text-zinc-600 leading-relaxed space-y-4">
                <span className="font-bold text-xl">Uma breve comparação</span><br /><br />Os implantes dentários podem ser realizados com diferentes materiais, sendo os mais conhecidos o titânio e a zircônia. Ambos possuem alta qualidade, excelente resistência e são utilizados para devolver função, conforto e estética ao sorriso. A escolha ideal depende das características de cada paciente, do planejamento do caso e das expectativas em relação ao resultado final.
                <br /><br />Os implantes de titânio são os mais tradicionais da Odontologia e possuem um longo histórico de sucesso clínico, oferecendo excelente estabilidade e previsibilidade. Já os implantes de zircônia representam uma tecnologia mais moderna, desenvolvida para proporcionar uma solução livre de metal e com foco em estética avançada e naturalidade gengival.
              </p>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 px-2">Principais diferenças entre implante de zircônia e titânio</h2>
            <div className="grid gap-6 md:grid-cols-2 mb-12">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl text-zinc-800 mb-3 font-bold">Estética</h3>
                <p className="text-zinc-600 leading-relaxed">A zircônia possui coloração branca, favorecendo um aspecto mais natural principalmente em pacientes com gengiva fina ou em áreas mais aparentes do sorriso. O titânio, por ser metálico, pode apresentar um leve aspecto acinzentado em alguns casos específicos.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl text-zinc-800 mb-3 font-bold">Biocompatibilidade</h3>
                <p className="text-zinc-600 leading-relaxed">Ambos os materiais apresentam ótima biocompatibilidade e integração com o organismo. A zircônia, por ser um material cerâmico livre de metal, é bastante procurada por pacientes que desejam uma abordagem “metal free”.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl text-zinc-800 mb-3 font-bold">Resistência e durabilidade</h3>
                <p className="text-zinc-600 leading-relaxed">Tanto o titânio quanto a zircônia são materiais resistentes e desenvolvidos para suportar as funções mastigatórias do dia a dia, com excelente durabilidade quando bem planejados e cuidados.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl text-zinc-800 mb-3 font-bold">Tecnologia e planejamento</h3>
                <p className="text-zinc-600 leading-relaxed">O sucesso do implante não depende apenas do material, mas também do planejamento adequado, da qualidade óssea, da saúde bucal do paciente e da técnica escolhida.</p>
              </div>
            </div>
            <div className="bg-[#2D4F40] text-white p-8 rounded-3xl shadow-md">
              <h3 className="text-2xl font-semibold mb-6">Qual é o melhor?</h3>
              <p className="text-zinc-300">Não existe um único material ideal para todos os casos. Tanto os implantes de titânio quanto os de zircônia possuem excelentes resultados quando bem indicados. Durante a avaliação clínica, conseguimos entender as necessidades, expectativas estéticas e funcionais de cada paciente para definir a melhor opção de tratamento.
                O mais importante é realizar um planejamento individualizado, buscando um sorriso saudável, funcional, duradouro e naturalmente harmonioso.
              </p>
            </div>
          </main>
        </Area>
        <Footer />
      </Page>
    </div>
  )
}
