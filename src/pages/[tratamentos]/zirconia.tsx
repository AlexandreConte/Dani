import Header from "@/components/Header";
import Page from "@/components/Shared/Page";
import Image from "next/image";
import zirconia1 from "@/../public/images/articles/zirconia/zirconia-1.webp";
import zirconia2 from "@/../public/images/articles/zirconia/zirconia-2.webp";
import zirconiaResultado from "@/../public/images/articles/zirconia/resultado-zirconia.webp";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FixedMenu from "@/components/FixedMenu";

export default function Zirconia() {
  return (
    <div>
      <SEO
        canonicalPath="tratamentos/zirconia"
        article
        headline="Implante de Zircônia"
        title="Implantes de zircônia em Floripa | Anima Odontologia"
        keywords="implantes de zircônia, implante de zircônia, implante, dentista"
      />
      <Page className="flex flex-col items-center">
        <FixedMenu />
        <Header />
        <main className="flex flex-col items-center mb-12">
          <div className="flex flex-col items-center max-w-4xl">
            <div className="bg-[#2D4F40] w-screen py-12">
              <h1 className="text-3xl md:text-5xl font-medium text-center text-[#A8C8B6]">
                Implantes de Zircônia
              </h1>
            </div>
            <div className="flex flex-wrap justify-center gap-2 mt-5 mb-10">
              <Image
                alt="Implante de Zircônia"
                src={zirconia1}
                className="h-[250px] w-auto max-[610px]:h-auto max-[610px]:w-[220px] object-cover"
              />
              <Image
                alt="Implante de Zircônia"
                src={zirconia2}
                className="h-[250px] w-auto max-[610px]:h-auto max-[610px]:w-[220px] object-cover"
              />
            </div>
            <div className="mx-6">
              <div className="text-lg text-zinc-600 leading-relaxed space-y-4 bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-zinc-100 mb-12">
                <h1 className="font-bold text-xl text-[#2D4F40]">
                  Você perdeu um dente e não sabe qual o melhor implante para
                  repô-lo?
                </h1>
                <p>
                  Os implantes de zircônia são uma alternativa moderna e altamente
                  estética para a substituição de dentes perdidos. Diferente dos
                  implantes convencionais metálicos, eles são produzidos com
                  zircônia, um material cerâmico branco, biocompatível e
                  extremamente resistente, que proporciona uma aparência mais
                  natural ao sorriso e à gengiva.
                </p>
                <p>
                  Além da estética diferenciada, os implantes de zircônia
                  apresentam excelente integração com os tecidos, baixo acúmulo de
                  placa bacteriana e alta durabilidade. São muito procurados por
                  pacientes que desejam uma solução livre de metal e com foco na
                  naturalidade, especialmente em áreas mais aparentes do sorriso.
                </p>
                <p>
                  Cada caso é planejado de forma individualizada, levando em
                  consideração a saúde bucal, a estrutura óssea e as expectativas
                  do paciente, garantindo um tratamento seguro, funcional e
                  harmonioso.
                </p>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#2D4F40] mb-6 px-2">
                Dúvidas frequentes dos pacientes
              </h2>
              <div className="grid gap-6 md:grid-cols-2 mb-12">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
                  <h3 className="text-xl text-[#2D4F40] mb-3 font-bold">
                    O implante de zircônia é resistente?
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">
                    Sim. A zircônia é um material extremamente resistente e
                    utilizado há muitos anos na Odontologia por sua durabilidade e
                    excelente desempenho clínico.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
                  <h3 className="text-xl text-[#2D4F40] mb-3 font-bold">
                    O resultado fica natural?
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">
                    Sim. Por ser um material branco, o implante de zircônia
                    proporciona uma estética mais natural, principalmente na
                    região da gengiva, evitando o aspecto acinzentado que pode
                    aparecer em alguns casos com implantes metálicos.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
                  <h3 className="text-xl text-[#2D4F40] mb-3 font-bold">
                    O implante dói?
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">
                    O procedimento é realizado com anestesia local e de forma
                    confortável para o paciente. O pós-operatório costuma ser
                    tranquilo quando seguido corretamente os cuidados recomendados
                    pela nossa equipe. Nossos pacientes relatam com frequência que
                    fazer um implante é mais tranquilo do que extrair um dente.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
                  <h3 className="text-xl text-[#2D4F40] mb-3 font-bold">
                    Quem pode fazer implantes de zircônia?
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">
                    A indicação depende de uma avaliação clínica e radiográfica.
                    Pacientes com boa saúde bucal e óssea geralmente podem
                    realizar o procedimento.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow md:col-span-2">
                  <h3 className="text-xl text-[#2D4F40] mb-3 font-bold">
                    Qual a diferença entre implante de zircônia e titânio?
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">
                    O principal diferencial está na estética e no material
                    utilizado. O titânio é um metal, enquanto a zircônia é uma
                    cerâmica branca com proposta mais estética e livre de metal.
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-zinc-100 mb-12">
                <h3 className="font-bold text-xl text-[#2D4F40]">Resultados</h3>
                <br />
                <Image
                  alt="Resultado: Implantes de Zircônia"
                  src={zirconiaResultado}
                  className="object-contain"
                />
              </div>
              <div className="bg-[#2D4F40] text-white p-8 rounded-3xl shadow-md">
                <h3 className="text-2xl font-semibold mb-6">
                  Curiosidades sobre implantes de zircônia
                </h3>
                <ul className="list-disc text-lg list-inside text-zinc-300">
                  <li>
                    A zircônia é considerada um dos materiais mais tecnológicos e
                    estéticos da Odontologia moderna.
                  </li>
                  <li>
                    O material apresenta alta biocompatibilidade com os tecidos
                    gengivais e osso.
                  </li>
                  <li>
                    Implantes de zircônia podem contribuir para um aspecto
                    gengival mais natural em pacientes com gengiva fina.
                  </li>
                  <li>
                    A busca por tratamentos “metal free” tem aumentado nos últimos
                    anos, tornando os implantes de zircônia cada vez mais
                    procurados.
                  </li>
                  <li>
                    Pela sua alta resistência e estética a zircônia também é
                    utilizada em coroas dentais.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </Page>
    </div>
  );
}
