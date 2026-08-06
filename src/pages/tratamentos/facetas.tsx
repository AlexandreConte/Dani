import Header from "@/components/Header";
import Page from "@/components/Shared/Page";
import Image from "next/image";
import Footer from "@/components/Footer";
import facetas from "@/../public/images/articles/facetas/facetas.webp";
import facetasCeramicas from "@/../public/images/articles/facetas/facetas-ceramicas.webp";
import SEO from "@/components/SEO";
import FixedMenu from "@/components/FixedMenu";

export default function Facetas() {
  return (
    <div>
      <SEO
        canonicalPath="tratamentos/facetas"
        article
        headline="Facetas Dentárias em Floripa"
        title="Facetas em Floripa | Anima Odontologia"
        keywords="facetas em cerâmica, faceta, lentes cerâmicas, lente cerâmica, faceta em resina composta, dentista"
      />
      <Page className="flex flex-col items-center">
        <FixedMenu />
        <Header />
        <main className="flex flex-col items-center">
          <div className="flex flex-col items-center mb-12 max-w-4xl">
            <div className="bg-[#2D4F40] w-screen py-12 mb-12">
              <h1 className="text-3xl md:text-5xl font-medium text-center text-[#A8C8B6] max-w-4xl mx-auto">
                Facetas Dentárias: Transformando o Sorriso com Naturalidade
              </h1>
            </div>
            <div className="mx-6">
              <div className="bg-white md:p-10 rounded-3xl p-6 shadow-sm border border-zinc-100 mb-12 flex flex-col justify-center gap-8 items-center w-full">
                <p className="text-lg text-zinc-600 leading-relaxed space-y-4">
                  As facetas dentárias também conhecidas como lentes de contato
                  dental ou laminados são uma excelente opção para pacientes que
                  desejam melhorar a estética do sorriso de forma previsível e
                  personalizada. Elas permitem corrigir alterações de cor,
                  formato, tamanho e pequenas imperfeições dentárias,
                  proporcionando um sorriso mais harmonioso e equilibrado.
                </p>
                <p className="text-lg text-zinc-600 leading-relaxed space-y-4">
                  Atualmente, as facetas podem ser confeccionadas em resina
                  composta ou cerâmica, e a escolha do material depende das
                  características de cada caso, dos objetivos estéticos e das
                  expectativas do paciente.
                </p>
              </div>
              <div className="bg-white p-6 pt-8 md:p-10 rounded-3xl shadow-sm border border-zinc-100 mb-12 flex justify-center gap-4 items-center max-[768px]:flex-wrap">
                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold text-[#2D4F40] px-2">
                    O que são facetas dentárias?
                  </h2>
                  <br />
                  <p className="text-lg text-zinc-600 leading-relaxed space-y-4 pb-2">
                    As facetas são finas camadas de material aplicadas sobre a
                    superfície frontal dos dentes para melhorar sua aparência.
                    Elas podem ser utilizadas para corrigir:
                  </p>
                  <ul className="list-disc list-inside text-zinc-600 mb-6 pl-2">
                    <li>Dentes escurecidos ou manchados;</li>
                    <li>Dentes desgastados;</li>
                    <li>Pequenas fraturas;</li>
                    <li>Alterações de forma e tamanho;</li>
                    <li>Espaços entre os dentes (diastemas);</li>
                    <li>Desalinhamentos leves;</li>
                    <li>Assimetrias do sorriso;</li>
                  </ul>
                  <p className="text-lg text-zinc-600 leading-relaxed space-y-4">
                    O objetivo é criar um sorriso mais bonito, natural e
                    proporcional às características faciais de cada paciente.
                  </p>
                </div>
              </div>
              {/* Seção de Facetas em Resina Composta */}
              <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-zinc-100 mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#2D4F40]">
                  Facetas em Resina Composta
                </h2>
                <p className="text-lg text-zinc-600 leading-relaxed space-y-4 mb-6">
                  As facetas em resina são confeccionadas diretamente sobre os
                  dentes, geralmente em uma única consulta. O dentista modela
                  cuidadosamente cada dente, esculpindo a forma, textura e
                  proporções desejadas.
                </p>
                <h3 className="text-xl font-semibold text-[#2D4F40] mb-4">
                  Vantagens
                </h3>
                <ul className="list-disc list-inside text-zinc-600 pl-2">
                  <li>Procedimento mais rápido;</li>
                  <li>Menor investimento inicial;</li>
                  <li>Pouco ou nenhum desgaste dental em muitos casos;</li>
                  <li>Possibilidade de reparos simples quando necessário;</li>
                  <li>Excelente resultado estético.</li>
                </ul>
                <h3 className="text-xl font-semibold text-[#2D4F40] mt-6 mb-4">
                  Considerações
                </h3>
                <p className="text-lg text-zinc-600 leading-relaxed space-y-4">
                  A resina pode sofrer desgaste e alteração de brilho e
                  manchamentos ao longo dos anos, exigindo manutenções
                  periódicas para manter sua estética ideal.
                </p>
              </div>
              {/* Seção de Facetas em Cerâmica */}
              <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-zinc-100 mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#2D4F40]">
                  Facetas em Cerâmica
                </h2>
                <p className="text-lg text-zinc-600 leading-relaxed space-y-4 mb-6">
                  As facetas em cerâmica exigem um preparo do dente para
                  recebê-las, são confeccionadas de forma personalizada em
                  laboratório e posteriormente cimentadas nos dentes. São
                  necessárias mais consultas até a finalização do tratamento. A
                  cerâmica é considerada um dos materiais mais sofisticados da
                  odontologia estética devido à sua capacidade de reproduzir as
                  características dos dentes naturais.
                </p>
                <h3 className="text-xl font-semibold text-[#2D4F40] mb-4">
                  Vantagens
                </h3>
                <ul className="list-disc list-inside text-zinc-600 pl-2">
                  <li>Elevada estabilidade de cor;</li>
                  <li>Excelente brilho e translucidez;</li>
                  <li>Alta resistência ao desgaste;</li>
                  <li>Grande previsibilidade estética;</li>
                  <li>Excelente longevidade clínica.</li>
                </ul>
                <h3 className="text-xl font-semibold text-[#2D4F40] mt-6 mb-4">
                  Considerações
                </h3>
                <p className="text-lg text-zinc-600 leading-relaxed space-y-4">
                  Cada caso deve ser cuidadosamente planejado para determinar a
                  indicação mais adequada.
                </p>
              </div>
              {/* Seção: Resina ou Cerâmica: Qual é a melhor opção? */}
              <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-zinc-100 mb-12">
                <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-[#2D4F40]">
                  Resina ou Cerâmica: Qual é a melhor opção?
                </h2>
                <p className="text-lg text-zinc-600 leading-relaxed space-y-4 mb-6">
                  Não existe uma resposta única para todos os pacientes. A
                  melhor escolha depende de fatores como:
                </p>
                <ul className="list-disc list-inside text-zinc-600 mb-6 pl-2">
                  <li>Condição dos dentes;</li>
                  <li>Quantidade de correções necessárias;</li>
                  <li>Hábitos do paciente;</li>
                  <li>Presença de bruxismo;</li>
                  <li>Expectativas estéticas;</li>
                  <li>Planejamento financeiro.</li>
                </ul>
                <p className="text-lg text-zinc-600 leading-relaxed space-y-4">
                  Durante a consulta, avaliamos todos esses aspectos para
                  indicar a alternativa mais adequada ao seu sorriso.
                </p>
              </div>
              {/* Seção: As facetas deixam o sorriso artificial? */}
              <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-zinc-100 mb-12">
                <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-[#2D4F40]">
                  As facetas deixam o sorriso artificial?
                </h2>
                <p className="text-lg text-zinc-600 leading-relaxed space-y-4">
                  Não. Quando o planejamento é realizado de forma
                  individualizada, respeitando a anatomia dental, a face e as
                  características do paciente, o resultado tende a ser
                  extremamente natural. O objetivo não é criar um sorriso igual
                  para todos, mas valorizar a beleza única de cada pessoa.
                </p>
              </div>
              {/* Seção: Como é feito o planejamento? */}
              <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-zinc-100 mb-12">
                <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-[#2D4F40]">
                  Como é feito o planejamento?
                </h2>
                <p className="text-lg text-zinc-600 leading-relaxed space-y-4 mb-6">
                  Antes de iniciar o tratamento, realizamos uma avaliação
                  detalhada que pode incluir:
                </p>
                <ul className="list-disc list-inside text-zinc-600 mb-6 pl-2">
                  <li>Fotografias clínicas;</li>
                  <li>Escaneamento digital;</li>
                  <li>Análise facial;</li>
                  <li>Estudo do sorriso;</li>
                  <li>Simulações estéticas quando indicadas.</li>
                </ul>
                <p className="text-lg text-zinc-600 leading-relaxed space-y-4">
                  Esse planejamento permite que o tratamento seja realizado com
                  maior previsibilidade e segurança.
                </p>
              </div>
              {/* Seção: Perguntas Frequentes */}
              <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-zinc-100 mb-12">
                <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-[#2D4F40]">
                  Perguntas Frequentes
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
                    <h3 className="text-xl text-zinc-800 mb-3 font-bold">
                      Preciso desgastar meus dentes para colocar facetas?
                    </h3>
                    <p className="text-zinc-600 leading-relaxed">
                      Nem sempre. Em muitos casos, especialmente nas facetas em
                      resina e em algumas facetas cerâmicas ultra finas, o
                      desgaste pode ser mínimo. A necessidade de preparo depende
                      da posição dos dentes e do planejamento individual.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
                    <h3 className="text-xl text-zinc-800 mb-3 font-bold">
                      Facetas estragam os dentes?
                    </h3>
                    <p className="text-zinc-600 leading-relaxed">
                      Não. Quando corretamente indicadas e executadas, as
                      facetas têm como objetivo preservar a estrutura dental e
                      melhorar a estética do sorriso. A saúde dos dentes e
                      gengivas é sempre uma prioridade durante o planejamento.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
                    <h3 className="text-xl text-zinc-800 mb-3 font-bold">
                      As facetas podem quebrar?
                    </h3>
                    <p className="text-zinc-600 leading-relaxed">
                      Assim como dentes naturais, as facetas também podem sofrer
                      danos em situações de trauma ou sobrecarga excessiva. Por
                      isso, pacientes com bruxismo podem necessitar de placa de
                      proteção para aumentar a longevidade do tratamento.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
                    <h3 className="text-xl text-zinc-800 mb-3 font-bold">
                      Qual material dura mais?
                    </h3>
                    <p className="text-zinc-600 leading-relaxed">
                      De forma geral, as facetas em cerâmica apresentam maior
                      estabilidade de cor e resistência ao desgaste ao longo dos
                      anos. As facetas em resina também possuem excelente
                      desempenho quando bem indicadas e acompanhadas por
                      manutenções periódicas.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
                    <h3 className="text-xl text-zinc-800 mb-3 font-bold">
                      As facetas mancham?
                    </h3>
                    <p className="text-zinc-600 leading-relaxed">
                      A cerâmica apresenta grande resistência ao manchamento. Já
                      a resina pode sofrer alterações de cor ao longo do tempo
                      devido ao consumo de café, vinho, cigarro e outros
                      pigmentos, podendo necessitar de polimentos, manutenções
                      ou trocas ao longo dos anos.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
                    <h3 className="text-xl text-zinc-800 mb-3 font-bold">
                      Posso escolher a cor dos dentes?
                    </h3>
                    <p className="text-zinc-600 leading-relaxed">
                      Sim. A escolha da cor é realizada em conjunto com o
                      paciente, sempre buscando um resultado harmonioso e
                      compatível com suas características faciais e
                      expectativas. Nem sempre o dente mais branco é o mais
                      bonito ou natural, muitos pacientes hoje em dia buscam por
                      cores de dentes naturais e não o branco do sorriso dos
                      famosos.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow md:col-span-2">
                    <h3 className="text-xl text-zinc-800 mb-3 font-bold">
                      Quanto tempo duram as facetas?
                    </h3>
                    <p className="text-zinc-600 leading-relaxed">
                      A longevidade varia conforme o material utilizado, hábitos
                      do paciente, higiene bucal e acompanhamento profissional.
                      Com manutenção adequada e cuidados diários, tanto as
                      facetas em resina quanto as facetas em cerâmica podem
                      proporcionar excelentes resultados por muitos anos.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-zinc-100 mb-12 flex justify-center gap-8 items-center flex-col">
                <h1 className="text-3xl md:text-5xl font-bold text-center text-[#2D4F40]">
                  Resultados
                </h1>
                <div className="flex flex-col items-center justify-center p-4 text-zinc-600">
                  <Image
                    alt="Resultado antes e depois: Facetas cerâmicas"
                    src={facetas}
                  />
                </div>
                <div className="flex flex-col items-center justify-center p-4">
                  <Image
                    alt="Resultado antes e depois: Facetas Cerâmicas"
                    src={facetasCeramicas}
                  />
                </div>
              </div>
              {/* Seção: Nosso Objetivo */}
              <div className="bg-[#2D4F40] text-white p-8 rounded-3xl shadow-md">
                <h3 className="text-2xl font-semibold mb-6">Nosso Objetivo</h3>
                <p className="text-zinc-300">
                  As facetas dentárias vão muito além da estética. Elas permitem
                  criar sorrisos mais harmoniosos, equilibrados e compatíveis
                  com a personalidade de cada paciente. Por meio de um
                  planejamento individualizado, buscamos resultados naturais,
                  elegantes e duradouros, sempre preservando ao máximo a saúde e
                  a estrutura dos dentes. Um sorriso bonito não é aquele que
                  chama atenção pelos dentes, mas aquele que valoriza todo o seu
                  rosto de forma natural e harmoniosa.
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
