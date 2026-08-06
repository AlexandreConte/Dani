import Header from "@/components/Header";
import Page from "@/components/Shared/Page";
import Image from "next/image";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FixedMenu from "@/components/FixedMenu";
import clareamento from "@/../public/images/articles/clareamento/clareamento.webp"

export default function Clareamento() {
  return (
    <div>
      <SEO
        canonicalPath="tratamentos/clareamento"
        article
        headline="Clareamento Dental"
        title="Clareamento Dental em Floripa | Anima Odontologia"
        keywords="clareamento dental, clareamento de dentes, dentes brancos, sorriso bonito, dentista"
      />
      <Page className="flex flex-col items-center">
        <FixedMenu />
        <Header />
        <main className="flex flex-col items-center max-w-4xl">
          <div className="flex flex-col items-center mb-12">
            <div className="bg-[#2D4F40] w-screen py-12 mb-12">
              <h1 className="text-3xl md:text-5xl font-medium text-center text-[#A8C8B6] max-w-4xl mx-auto px-4">
                Clareamento Dental: Um sorriso mais claro de forma segura e
                previsível
              </h1>
            </div>
            <div className="mx-6 max-w-4xl">
              <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-zinc-100 mb-12">
                <p className="text-lg text-zinc-600 leading-relaxed space-y-4 mb-6">
                  O clareamento dental é um dos tratamentos estéticos mais
                  procurados na odontologia por proporcionar um sorriso mais
                  claro, iluminado e harmonioso de forma conservadora, sem
                  desgastar a estrutura dos dentes.
                </p>
                <p className="text-lg text-zinc-600 leading-relaxed space-y-4">
                  Com o passar dos anos, é natural que os dentes escureçam
                  devido ao envelhecimento, consumo de café, vinho, chimarrão,
                  refrigerantes, tabagismo e outros fatores. O clareamento
                  dental ajuda a reduzir essas pigmentações, devolvendo mais
                  brilho ao sorriso.
                </p>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 px-2">
                Como funciona o clareamento dental?
              </h2>
              <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-zinc-100 mb-12">
                <p className="text-lg text-zinc-600 leading-relaxed space-y-4 mb-6">
                  O clareamento é realizado através de agentes clareadores que
                  atuam nas moléculas responsáveis pelo escurecimento dos
                  dentes, tornando-as menores e menos perceptíveis.
                </p>
                <p className="text-lg text-zinc-600 leading-relaxed space-y-4 mb-6">
                  O resultado é um sorriso mais claro, mantendo a estrutura
                  dental preservada.
                </p>
                <p className="text-lg text-zinc-600 leading-relaxed space-y-4 mb-6">
                  Antes de iniciar o tratamento, realizamos uma avaliação
                  completa para verificar a saúde bucal e indicar a técnica mais
                  adequada para cada paciente.
                </p>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 px-2">
                Quais são os tipos de clareamento dental?
              </h2>
              <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-zinc-100 mb-12">
                <h3 className="text-xl font-bold text-[#2D4F40] mb-4">
                  Clareamento caseiro supervisionado
                </h3>
                <p className="text-lg text-zinc-600 leading-relaxed space-y-4 mb-6">
                  É uma das técnicas mais utilizadas devido à sua
                  previsibilidade e excelente controle dos resultados.
                </p>
                <p className="text-lg text-zinc-600 leading-relaxed space-y-4 mb-6">
                  Após a confecção de moldeiras personalizadas, o paciente
                  realiza as aplicações do gel clareador em casa, seguindo as
                  nossas orientações.
                </p>
                <h4 className="text-lg font-semibold text-[#2D4F40] mb-4">
                  Vantagens
                </h4>
                <ul className="list-disc list-inside text-zinc-600 mb-6 ml-4">
                  <li>Resultados graduais e naturais;</li>
                  <li>Excelente previsibilidade;</li>
                  <li>Menor incidência de sensibilidade em muitos casos;</li>
                  <li>Controle da intensidade do clareamento;</li>
                  <li>
                    Possibilidade de retoques futuros utilizando as mesmas
                    moldeiras, ao longo dos anos.
                  </li>
                </ul>
                <h3 className="text-xl font-bold text-[#2D4F40] mb-4">
                  Clareamento de consultório
                </h3>
                <p className="text-lg text-zinc-600 leading-relaxed space-y-4 mb-6">
                  Realizado diretamente no consultório com géis clareadores de
                  maior concentração. O procedimento é conduzido pelo dentista
                  em sessões programadas (1 a 4 sessões)
                </p>
                <h4 className="text-lg font-semibold text-[#2D4F40] mb-6">
                  Vantagens
                </h4>
                <ul className="list-disc list-inside text-zinc-600 mb-6">
                  <li>Maior praticidade;</li>
                  <li>
                    Acompanhamento profissional durante todo o procedimento;
                  </li>
                  <li>
                    Excelente alternativa para pacientes que preferem não
                    utilizar moldeiras em casa.
                  </li>
                </ul>
                <h3 className="text-xl font-bold text-[#2D4F40] mb-4">
                  Clareamento associado
                </h3>
                <p className="text-lg text-zinc-600 leading-relaxed space-y-4 mb-6">
                  Muitas vezes, a melhor estratégia é combinar o clareamento de
                  consultório com o clareamento caseiro supervisionado.
                </p>
                <p className="text-lg text-zinc-600 leading-relaxed space-y-4 mb-6">
                  Essa associação permite potencializar os resultados e
                  proporcionar maior estabilidade da cor ao longo do tempo.
                </p>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 px-2">
                O Clareamento estraga os dentes?
              </h2>
              <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-zinc-100 mb-12">
                <p className="text-lg text-zinc-600 leading-relaxed space-y-4 mb-6">
                  Essa é uma das dúvidas mais comuns dos pacientes.
                </p>
                <p className="text-lg text-zinc-600 leading-relaxed space-y-4 mb-6">
                  Quando realizado com diagnóstico adequado e supervisão
                  profissional, o clareamento dental é considerado um
                  procedimento seguro e conservador.
                </p>
                <p className="text-lg text-zinc-600 leading-relaxed space-y-4 mb-6">
                  O tratamento não desgasta o esmalte, não enfraquece os dentes
                  e não aumenta o risco de cáries.
                </p>
                <p className="text-lg text-zinc-600 leading-relaxed space-y-4 mb-6">
                  Por isso, é fundamental evitar produtos vendidos sem
                  orientação profissional ou receitas caseiras encontradas na
                  internet.
                </p>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 px-2">
                O Clareamento funciona para todos?
              </h2>
              <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-zinc-100 mb-12">
                <p className="text-lg text-zinc-600 leading-relaxed space-y-4 mb-6">
                  A maioria dos pacientes apresenta excelente resposta ao
                  tratamento. No entanto, o resultado pode variar de acordo com
                  fatores como:
                </p>
                <ul className="list-disc list-inside text-zinc-600 mb-6 ml-4">
                  <li>Cor inicial dos dentes;</li>
                  <li>Idade do paciente;</li>
                  <li>Hábitos alimentares;</li>
                  <li>Presença de manchas específicas;</li>
                  <li>Histórico de traumas dentários;</li>
                  <li>Espessura de esmalte e dentina.</li>
                </ul>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 px-2">
                Clareamento clareia coroas, facetas ou restaurações?
              </h2>
              <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-zinc-100 mb-12">
                <p className="text-lg text-zinc-600 leading-relaxed space-y-4 mb-6">
                  Não.
                  <br />
                  <br />O clareamento atua apenas sobre a estrutura dental
                  natural.
                  <br />
                  <br />
                  Restaurações em resina, coroas, facetas e lentes de contato
                  não alteram sua cor durante o tratamento. Em alguns casos,
                  pode ser necessário substituir restaurações antigas após o
                  clareamento para harmonizar o sorriso.
                </p>
              </div>
              <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-zinc-100 mb-12">
                <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-[#2D4F40]">
                  Resultado
                </h2>
                <Image
                  className="mx-auto w-auto"
                  alt="Clareamento Dental"
                  src={clareamento}
                />
              </div>
              <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-zinc-100 mb-12">
                <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-[#2D4F40]">
                  Perguntas Frequentes
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
                    <h3 className="text-xl text-[#2D4F40] mb-3 font-bold">
                      Clareamento dental dói?
                    </h3>
                    <p className="text-zinc-600 leading-relaxed">
                      Normalmente não. Alguns pacientes podem apresentar
                      sensibilidade temporária durante ou após o tratamento, mas
                      ela costuma ser leve e transitória.
                      <br />
                      <br />
                      Existem diversas estratégias para minimizar esse
                      desconforto quando necessário.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
                    <h3 className="text-xl text-[#2D4F40] mb-3 font-bold">
                      Quanto tempo dura o resultado?
                    </h3>
                    <p className="text-zinc-600 leading-relaxed">
                      O resultado varia de acordo com os hábitos individuais de
                      cada paciente.
                      <br />
                      <br />
                      Consumo frequente de café, vinho, chimarrão, refrigerantes
                      escuros e cigarro pode acelerar o escurecimento dos
                      dentes.
                      <br />
                      <br />
                      Com manutenção adequada, os resultados podem ser mantidos
                      por muitos anos.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
                    <h3 className="text-xl text-[#2D4F40] mb-3 font-bold">
                      Posso tomar café durante o clareamento?
                    </h3>
                    <p className="text-zinc-600 leading-relaxed">
                      Sim. Depende do tipo de clareamento e do horário de uso do
                      gel. Existem algumas orientações que devem ser seguidas.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
                    <h3 className="text-xl text-[#2D4F40] mb-3 font-bold">
                      Qual clareamento clareia mais: caseiro ou consultório?
                    </h3>
                    <p className="text-zinc-600 leading-relaxed">
                      Quando bem indicados e executados, ambos podem
                      proporcionar excelentes resultados.
                      <br />
                      <br />
                      O mais importante não é a velocidade do clareamento, mas a
                      previsibilidade, estabilidade e segurança do tratamento.
                      <br />
                      <br />
                      Por isso, a escolha da técnica é sempre individualizada.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
                    <h3 className="text-xl text-[#2D4F40] mb-3 font-bold">
                      Existe idade mínima para fazer clareamento?
                    </h3>
                    <p className="text-zinc-600 leading-relaxed">
                      O tratamento deve ser indicado após avaliação clínica,
                      respeitando o estágio de desenvolvimento dentário e as
                      necessidades de cada paciente.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
                    <h3 className="text-xl text-[#2D4F40] mb-3 font-bold">
                      O clareamento deixa os dentes sensíveis para sempre?
                    </h3>
                    <p className="text-zinc-600 leading-relaxed">
                      Não.
                      <br />
                      <br />A sensibilidade, quando ocorre, costuma ser
                      temporária e desaparece após o término do tratamento.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow md:col-span-2">
                    <h3 className="text-xl text-[#2D4F40] mb-3 font-bold">
                      Os dentes voltam a escurecer?
                    </h3>
                    <p className="text-zinc-600 leading-relaxed">
                      Com o passar dos anos, algum grau de escurecimento pode
                      ocorrer naturalmente. Por isso, retoques periódicos podem
                      ser indicados para manter o sorriso sempre claro e
                      harmonioso.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#2D4F40] text-white p-8 rounded-3xl shadow-md">
                <h3 className="text-2xl font-semibold mb-6">Nosso Objetivo</h3>
                <p className="text-zinc-300 mb-4">
                  Mais do que deixar os dentes mais brancos, buscamos um
                  resultado harmonioso, saudável e compatível com as
                  características de cada paciente.
                </p>
                <p className="text-zinc-300">
                  Um sorriso bonito não é apenas mais claro — é um sorriso
                  natural, equilibrado e saudável. ✨🦷
                </p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </Page>
    </div>
  );
}
