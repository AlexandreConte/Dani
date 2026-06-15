import Header from "@/components/Header";
import Page from "@/components/Shared/Page";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Image from "next/image";
import denteQuebrado from "@/../public/images/articles/dente-quebrado/dente-quebrado.webp";
import FixedMenu from "@/components/FixedMenu";

export default function DenteQuebrado() {
  return (
    <div>
      <SEO
        canonicalPath="tratamentos/dente-quebrado"
        article
        headline="Tratamento para Dente Quebrado"
        title="Tratamento para Dente Quebrado em Floripa | Anima Odontologia"
        keywords="dente quebrado, fratura dental, tratamento dental, restauração dental, dentista"
      />
      <Page className="flex flex-col items-center">
        <FixedMenu />
        <Header />
        <main className="flex flex-col items-center max-w-4xl">
          <div className="flex flex-col items-center mb-12">
            <div className="bg-[#2D4F40] w-screen py-12 mb-12">
              <h1 className="text-3xl md:text-5xl font-bold text-center mx-auto text-[#A8C8B6] max-w-4xl px-4">
                Meu dente quebrou, quais são as opções de tratamento?
              </h1>
            </div>
            <div className="mx-6 max-w-4xl">
              <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-zinc-100 mb-12">
                <p className="text-lg text-zinc-600 leading-relaxed space-y-4">
                  Um dente pode fraturar por diversos motivos, como mastigação
                  de alimentos duros, acidentes, bruxismo (apertamento dos
                  dentes), restaurações antigas extensas, infiltrações, cáries,
                  desgaste natural ao longo dos anos. A boa notícia é que, na
                  maioria dos casos, é possível recuperar a estética, a função e
                  a resistência do dente através de tratamentos modernos e
                  minimamente invasivos.
                  <br />
                  <br />A melhor opção depende da quantidade de estrutura
                  dentária remanescente, da localização da fratura e das
                  necessidades individuais de cada paciente.
                </p>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 px-2">
                Quais são as opções para restaurar um dente fraturado?
              </h2>
              {/* Restaurações diretas em Resina Composta */}
              <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-zinc-100 mb-12">
                <h3 className="text-xl font-bold text-[#2D4F40] mb-4">
                  Restaurações diretas em Resina Composta
                </h3>
                <p className="text-lg text-zinc-600 leading-relaxed space-y-4 mb-6">
                  São realizadas diretamente no consultório, geralmente em uma
                  única sessão.
                </p>
                <h4 className="text-lg font-semibold text-[#2D4F40] mb-3">
                  Indicadas para:
                </h4>
                <ul className="list-disc list-inside text-zinc-600 mb-6">
                  <li>Pequenas e médias fraturas;</li>
                  <li>Troca de restaurações antigas;</li>
                  <li>
                    Reconstrução estética de dentes anteriores e posteriores.
                  </li>
                </ul>
                <h4 className="text-lg font-semibold text-[#2D4F40] mb-3">
                  Vantagens:
                </h4>
                <ul className="list-disc list-inside text-zinc-600">
                  <li>Tratamento rápido;</li>
                  <li>Conserva maior quantidade de estrutura dental;</li>
                  <li>Excelente resultado estético;</li>
                  <li>
                    Menor custo quando comparado a restaurações indiretas.
                  </li>
                </ul>
              </div>
              {/* Onlays, Inlays, Overlays */}
              <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-zinc-100 mb-12">
                <h3 className="text-xl font-bold text-[#2D4F40] mb-4">
                  Onlays, Inlays, Overlays (resina ou cerâmica)
                </h3>
                <p className="text-lg text-zinc-600 leading-relaxed space-y-4 mb-6">
                  Quando a perda de estrutura é maior, mas ainda existe
                  quantidade suficiente de dente saudável, pode ser indicada uma
                  restauração indireta, confeccionada em laboratório ou por
                  sistemas digitais.
                </p>
                <h4 className="text-lg font-semibold text-[#2D4F40] mb-3">
                  Indicados para:
                </h4>
                <ul className="list-disc list-inside text-zinc-600 mb-6">
                  <li>Médias e grandes fraturas;</li>
                  <li>Troca de restaurações antigas amplas;</li>
                  <li>Reconstrução estética de dentes posteriores;</li>
                  <li>Dentes que já possuem tratamento de canal.</li>
                </ul>
                <h4 className="text-lg font-semibold text-[#2D4F40] mb-3">
                  Vantagens:
                </h4>
                <p className="text-lg text-zinc-600 leading-relaxed space-y-4 mb-6">
                  Essas peças recobrem a parte perdida do dente, reforçando sua
                  estrutura, sem desgaste excessivos da estrutura dental.
                </p>
                <ul className="list-disc list-inside text-zinc-600">
                  <li>Maior resistência mecânica;</li>
                  <li>Excelente adaptação;</li>
                  <li>Estética superior;</li>
                  <li>Preservação da estrutura dentária saudável.</li>
                </ul>
              </div>
              {/* Coroas Dentárias */}
              <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-zinc-100 mb-12">
                <h3 className="text-xl font-bold text-[#2D4F40] mb-4">
                  Coroas Dentárias
                </h3>
                <p className="text-lg text-zinc-600 leading-relaxed space-y-4 mb-6">
                  Quando o dente apresenta grande perda estrutural ou risco
                  elevado de novas fraturas, a coroa pode ser a melhor
                  alternativa. A coroa recobre completamente a parte visível do
                  dente, devolvendo sua forma, função e resistência.
                </p>
                <h4 className="text-lg font-semibold text-[#2D4F40] mb-3">
                  Indicada para:
                </h4>
                <ul className="list-disc list-inside text-zinc-600 mb-6">
                  <li>Dentes muito destruídos;</li>
                  <li>
                    Dentes que já possuem tratamento de canal e com grande perda
                    de estrutura;
                  </li>
                  <li>
                    Casos em que restaurações convencionais não oferecem
                    previsibilidade a longo prazo, ou seja, uma restauração
                    direta pode fraturar com facilidade.
                  </li>
                </ul>
                <h4 className="text-lg font-semibold text-[#2D4F40] mb-3">
                  Vantagens:
                </h4>
                <ul className="list-disc list-inside text-zinc-600">
                  <li>Alta resistência;</li>
                  <li>Excelente durabilidade;</li>
                  <li>Proteção contra novas fraturas;</li>
                  <li>Resultado estético natural.</li>
                </ul>
              </div>
              {/* Cerâmica ou Resina: Qual é a melhor opção? */}
              <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-zinc-100 mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#2D4F40]">
                  Cerâmica ou Resina: Qual é a melhor opção?
                </h2>
                <p className="text-lg text-zinc-600 leading-relaxed space-y-4 mb-6">
                  Não existe uma resposta única para todos os casos, cada caso
                  deve ser avaliado individualmente.
                </p>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-xl font-semibold text-[#2D4F40] mb-4">
                      Cerâmica
                    </h3>
                    <ul className="list-disc list-inside text-zinc-600">
                      <li>Maior estabilidade de cor;</li>
                      <li>
                        Excelente estética, muito semelhante ao um dente
                        natural;
                      </li>
                      <li>Alta resistência ao desgaste;</li>
                      <li>
                        Maior longevidade do polimento e brilho de superfície;
                      </li>
                      <li>Maior longevidade clínica da restauração.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#2D4F40] mb-4">
                      Resina
                    </h3>
                    <ul className="list-disc list-inside text-zinc-600">
                      <li>Menor custo;</li>
                      <li>Pode ser reparada com facilidade;</li>
                      <li>Excelente alternativa em casos selecionados;</li>
                    </ul>
                  </div>
                </div>
                <p className="text-lg text-zinc-600 leading-relaxed space-y-4 mt-6">
                  Durante a avaliação clínica, analisamos qual material oferece
                  o melhor equilíbrio entre estética, função, durabilidade e
                  preservação da estrutura dental.
                </p>
              </div>
              {/* Perguntas Frequentes */}
              <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-zinc-100 mb-12">
                <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-[#2D4F40]">
                  Perguntas Frequentes
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
                    <h3 className="text-xl text-[#2D4F40] mb-3 font-bold">
                      Um dente fraturado sempre precisa de canal?
                    </h3>
                    <p className="text-zinc-600 leading-relaxed">
                      Não. Muitas fraturas atingem apenas esmalte e dentina,
                      permitindo a restauração sem tratamento endodôntico. O
                      canal é indicado apenas quando a polpa (nervo) está
                      comprometida ou apresenta sinais de inflamação
                      irreversível ou lesão periapical.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
                    <h3 className="text-xl text-[#2D4F40] mb-3 font-bold">
                      Posso deixar um dente fraturado sem tratamento?
                    </h3>
                    <p className="text-zinc-600 leading-relaxed">
                      Não é recomendado. Mesmo pequenas fraturas podem aumentar
                      com o tempo, favorecer infiltrações, sensibilidade e até
                      levar à perda de estrutura adicional, além de favorecer
                      trincas radiculares.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
                    <h3 className="text-xl text-[#2D4F40] mb-3 font-bold">
                      A restauração fica visível?
                    </h3>
                    <p className="text-zinc-600 leading-relaxed">
                      Os materiais atuais permitem reproduzir cor, brilho e
                      textura muito semelhantes aos dentes naturais. Em muitos
                      casos, é difícil perceber onde termina o dente e começa a
                      restauração.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
                    <h3 className="text-xl text-[#2D4F40] mb-3 font-bold">
                      Qual tratamento dura mais?
                    </h3>
                    <p className="text-zinc-600 leading-relaxed">
                      A durabilidade depende de diversos fatores, incluindo
                      extensão da fratura, qualidade da higiene bucal, hábitos
                      alimentares e presença de bruxismo. De forma geral:
                      Restaurações diretas possuem ótima longevidade quando bem
                      indicadas; Onlays e coroas costumam oferecer maior
                      resistência em casos de perda estrutural extensa.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
                    <h3 className="text-xl text-[#2D4F40] mb-3 font-bold">
                      Se eu apertar ou ranger os dentes, a restauração pode
                      quebrar?
                    </h3>
                    <p className="text-zinc-600 leading-relaxed">
                      Sim. Pacientes com bruxismo apresentam maior risco de
                      desgaste e fraturas. Nesses casos, pode ser indicada uma
                      placa de proteção noturna para aumentar a longevidade do
                      tratamento.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
                    <h3 className="text-xl text-[#2D4F40] mb-3 font-bold">
                      O tratamento dói?
                    </h3>
                    <p className="text-zinc-600 leading-relaxed">
                      Normalmente não. Quando necessário,ğimiz anestesia local
                      para garantir conforto durante todo o procedimento.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 mb-12 rounded-2xl border-zinc-100">
                <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#2D4F40]">
                  Resultados
                </h3>
                <Image
                  alt="Tratamento para dente quebrado"
                  src={denteQuebrado}
                />
              </div>
              {/* Nosso Objetivo */}
              <div className="bg-[#2D4F40] text-white p-8 rounded-3xl shadow-md">
                <h3 className="text-2xl font-semibold mb-6">Nosso Objetivo</h3>
                <p className="text-zinc-300">
                  Cada dente é único. Por isso, antes de indicar qualquer
                  tratamento, realizamos uma avaliação detalhada para
                  identificar a melhor solução para restaurar a função
                  mastigatória, preservar a estrutura dental e proporcionar um
                  resultado estético natural e duradouro. Preservar o máximo
                  possível do seu dente natural é sempre a nossa prioridade.
                  🦷✨
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
