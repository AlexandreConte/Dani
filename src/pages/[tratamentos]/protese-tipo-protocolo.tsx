import Header from "@/components/Header";
import Page from "@/components/Shared/Page";
import Image from "next/image";
import proteseProtocolo1 from "@/../public/images/articles/protese-tipo-protocolo/protese-protocolo.webp";
import proteseProtocolo2 from "@/../public/images/articles/protese-tipo-protocolo/protese-protocolo-1.webp";
import proteseProtocolo3 from "@/../public/images/articles/protese-tipo-protocolo/protese-protocolo-2.webp";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FixedMenu from "@/components/FixedMenu";

export default function ProteseTipoProtocolo() {
  return (
    <div>
      <SEO
        canonicalPath="tratamentos/protese-tipo-protocolo"
        article
        headline="Prótese Protocolo sobre Implantes"
        title="Prótese Protocolo em Floripa | Anima Odontologia"
        keywords="prótese protocolo, protocolo de brânemark, implantes dentários fixos, dentadura fixa, dentista"
      />
      <Page className="flex flex-col items-center">
        <FixedMenu />
        <Header />
        <main className="flex flex-col items-center max-w-4xl">
          <div className="flex flex-col items-center mb-12">
            <div className="bg-[#2D4F40] w-screen py-12 mb-12">
              <h1 className="text-3xl md:text-5xl font-medium text-center text-[#A8C8B6] max-w-4xl mx-auto px-4">
                Prótese tipo Protocolo sobre Implantes
              </h1>
            </div>
            <div className="mx-6 max-w-4xl">
              <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-zinc-100 mb-12">
                <h2 className="text-2xl text-[#2D4F40] font-bold mb-4">
                  Recupere seu Sorriso e sua Qualidade de vida
                </h2>
                <p className="text-lg text-zinc-600 leading-relaxed space-y-4">
                  A perda de todos os dentes de uma arcada pode afetar muito
                  mais do que a estética. A mastigação, a fala, a autoestima e
                  até mesmo a qualidade de vida podem ser comprometidas.
                  <br />
                  <br />
                  A prótese tipo Protocolo de Brânemark, popularmente conhecida
                  apenas como prótese protocolo, é uma solução moderna e segura
                  para pacientes que perderam todos os dentes ou possuem dentes
                  com comprometimento severo e sem possibilidade de recuperação.
                  <br />
                  <br />
                  Trata-se de uma prótese fixa parafusada sobre implantes
                  dentários, proporcionando estabilidade, conforto e segurança
                  muito superiores às próteses removíveis convencionais.
                </p>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 px-2">
                O que é uma prótese protocolo?
              </h2>
              <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-zinc-100 mb-12">
                <p className="text-lg text-zinc-600 leading-relaxed space-y-4 mb-6">
                  A prótese protocolo é uma reabilitação fixa apoiada sobre
                  implantes dentários instalados no osso maxilar ou mandibular.
                  São necessários 4, 5 ou 6 implantes bem distribuídos na arcada
                  para confecção desse tipo de prótese.
                </p>
                <p className="text-lg text-zinc-600 leading-relaxed space-y-4 mb-6">
                  Após a integração dos implantes ao osso, uma prótese completa
                  é confeccionada e parafusada sobre eles, devolvendo ao
                  paciente a capacidade de sorrir, falar e mastigar com
                  confiança.
                </p>
                <p className="text-lg text-zinc-600 leading-relaxed space-y-4 mb-6">
                  Diferentemente da dentadura tradicional, a prótese protocolo
                  não fica solta, não necessita de adesivos e não precisa ser
                  removida diariamente, ela fica fixa na boca.
                </p>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 px-2">
                Quem pode fazer esse tratamento?
              </h2>
              <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-zinc-100 mb-12">
                <p className="text-lg text-zinc-600 leading-relaxed space-y-4 mb-6">
                  O protocolo é indicado para pacientes que:
                </p>
                <ul className="list-disc list-inside text-zinc-600 mb-6">
                  <li>Perderam todos os dentes de uma arcada;</li>
                  <li>
                    Possuem dentes com doença periodontal avançada (dentes com
                    mobilidade e perda óssea);
                  </li>
                  <li>
                    Apresentam múltiplos dentes comprometidos sem possibilidade
                    de recuperação;
                  </li>
                  <li>
                    Utilizam dentaduras e desejam maior estabilidade e conforto;
                  </li>
                  <li>Procuram uma solução fixa e de longa duração.</li>
                </ul>
                <p className="text-lg text-zinc-600 leading-relaxed space-y-4">
                  Cada caso é avaliado individualmente através de exame clínico
                  e tomografia computadorizada para determinar a melhor opção de
                  tratamento.
                </p>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 px-2">
                Benefícios da Prótese Protocolo
              </h2>
              <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-zinc-100 mb-12">
                <ul className="list-disc list-inside text-zinc-600">
                  <li>Mais segurança para sorrir;</li>
                  <li>Melhora significativa da mastigação;</li>
                  <li>Maior conforto ao falar;</li>
                  <li>Maior estabilidade quando comparada à dentadura;</li>
                  <li>Recuperação da autoestima;</li>
                  <li>Solução fixa e duradoura.</li>
                </ul>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 px-2">
                Como funciona o tratamento?
              </h2>
              <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-zinc-100 mb-12">
                <h3 className="text-xl font-bold text-[#2D4F40] mb-4">
                  1. Planejamento
                </h3>
                <p className="text-lg text-zinc-600 leading-relaxed space-y-4 mb-6">
                  Realizamos exames clínicos, fotografias, escaneamento digital
                  ou moldagem e tomografia para avaliar a quantidade e qualidade
                  óssea disponível.
                </p>
                <h3 className="text-xl font-bold text-[#2D4F40] mb-4">
                  2. Instalação dos implantes
                </h3>
                <p className="text-lg text-zinc-600 leading-relaxed space-y-4 mb-6">
                  Nessa fase é necessário fazer as extrações de dentes
                  comprometidos e os implantes são posicionados cirurgicamente
                  no osso, funcionando como raízes artificiais que sustentarão a
                  prótese.
                </p>
                <h3 className="text-xl font-bold text-[#2D4F40] mb-4">
                  3. Prótese provisória (quando indicada)
                </h3>
                <p className="text-lg text-zinc-600 leading-relaxed space-y-4 mb-6">
                  Em muitos casos é possível instalar uma prótese provisória
                  fixa poucos dias após a cirurgia ou no dia da cirurgia,
                  permitindo que o paciente não fique sem dentes durante o
                  período de cicatrização dos implantes.
                </p>
                <h3 className="text-xl font-bold text-[#2D4F40] mb-4">
                  4. Prótese definitiva
                </h3>
                <p className="text-lg text-zinc-600 leading-relaxed space-y-4">
                  Após a integração dos implantes ao osso (3 ou 4 meses após a
                  instalação), confeccionamos a prótese definitiva, planejada
                  para oferecer estética, conforto e durabilidade.
                </p>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 px-2">
                Protocolo em Resina ou Zircônia: Qual a diferença?
              </h2>
              <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-zinc-100 mb-12">
                <p className="text-lg text-zinc-600 leading-relaxed space-y-4 mb-6">
                  Uma das dúvidas mais frequentes dos pacientes é sobre o
                  material utilizado na prótese.
                </p>
                <h3 className="text-xl font-bold text-[#2D4F40] mb-4">
                  Prótese Protocolo em Resina
                </h3>
                <p className="text-lg text-zinc-600 leading-relaxed space-y-4 mb-6">
                  É uma excelente opção para muitos pacientes e apresenta ótimo
                  custo-benefício.
                </p>
                <h4 className="text-lg font-semibold text-[#2D4F40] mb-3">
                  Vantagens
                </h4>
                <ul className="list-disc list-inside text-zinc-600 mb-6">
                  <li>Menor investimento inicial;</li>
                  <li>Excelente resultado estético;</li>
                  <li>Reparos mais simples quando necessários;</li>
                  <li>Menor peso da prótese.</li>
                </ul>
                <h4 className="text-lg font-semibold text-[#2D4F40] mb-3">
                  Considerações
                </h4>
                <p className="text-lg text-zinc-600 leading-relaxed space-y-4 mb-6">
                  A resina pode sofrer desgaste ao longo dos anos e demandar
                  manutenções periódicas para manter a estética e a função.
                </p>
                <h3 className="text-xl font-bold text-[#2D4F40] mb-4">
                  Prótese Protocolo em Zircônia
                </h3>
                <p className="text-lg text-zinc-600 leading-relaxed space-y-4 mb-6">
                  A zircônia é um tipo de cerâmica, é considerada uma opção
                  premium devido à sua elevada estabilidade estética e
                  resistência ao desgaste.
                </p>
                <h4 className="text-lg font-semibold text-[#2D4F40] mb-3">
                  Vantagens
                </h4>
                <ul className="list-disc list-inside text-zinc-600 mb-6">
                  <li>Estética extremamente natural;</li>
                  <li>Maior estabilidade de cor;</li>
                  <li>Menor desgaste ao longo do tempo;</li>
                  <li>Excelente longevidade clínica.</li>
                </ul>
                <h4 className="text-lg font-semibold text-[#2D4F40] mb-3">
                  Considerações
                </h4>
                <p className="text-lg text-zinc-600 leading-relaxed space-y-4">
                  A indicação depende de diversos fatores, como padrão de
                  mordida, quantidade de implantes, hábitos do paciente e
                  planejamento individual. O ponto negativo da zircônia é a
                  incapacidade de se realizar reparos.
                </p>
              </div>
              <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-zinc-100 mb-12">
                <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-[#2D4F40]">
                  Resultados
                </h2>
                <div className="flex justify-center gap-4 flex-wrap">
                  <Image
                    alt="Prótese tipo Protocolo"
                    src={proteseProtocolo1}
                    className="w-auto object-contain max-h-[500px]"
                  />
                  <Image
                    alt="Prótese tipo Protocolo"
                    src={proteseProtocolo2}
                    className="w-auto object-contain max-h-[500px]"
                  />
                </div>
                <br />
                <Image
                  alt="Prótese tipo Protocolo"
                  src={proteseProtocolo3}
                  className="max-h-[349px] flex mx-auto w-[222.4px] min-[621px]:w-auto"
                />
              </div>
              <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-zinc-100 mb-12">
                <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-[#2D4F40]">
                  Perguntas Frequentes
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
                    <h3 className="text-xl text-[#2D4F40] mb-3 font-bold">
                      A prótese protocolo é removível?
                    </h3>
                    <p className="text-zinc-600 leading-relaxed">
                      Não. A prótese é fixa e parafusada aos implantes. Apenas o
                      dentista a remove durante consultas de manutenção, que
                      devem ser feitas com uma periodicidade, semelhante a
                      profilaxia dental.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
                    <h3 className="text-xl text-[#2D4F40] mb-3 font-bold">
                      Vou ficar sem dentes durante o tratamento?
                    </h3>
                    <p className="text-zinc-600 leading-relaxed">
                      Em muitos casos, não. Dependendo das condições clínicas e
                      da estabilidade dos implantes, é possível realizar carga
                      imediata, instalando uma prótese provisória fixa logo após
                      a cirurgia.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
                    <h3 className="text-xl text-[#2D4F40] mb-3 font-bold">
                      A prótese protocolo parece natural?
                    </h3>
                    <p className="text-zinc-600 leading-relaxed">
                      Sim. Atualmente, utilizamos técnicas de planejamento
                      digital que permitem criar sorrisos harmoniosos,
                      respeitando as características faciais de cada paciente.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
                    <h3 className="text-xl text-[#2D4F40] mb-3 font-bold">
                      Quanto tempo dura uma prótese protocolo?
                    </h3>
                    <p className="text-zinc-600 leading-relaxed">
                      Com acompanhamento profissional adequado e boa higiene
                      bucal, os implantes podem durar muitos anos. A prótese
                      também apresenta excelente longevidade, podendo necessitar
                      apenas de manutenções periódicas ao longo do tempo.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
                    <h3 className="text-xl text-[#2D4F40] mb-3 font-bold">
                      Preciso fazer manutenção?
                    </h3>
                    <p className="text-zinc-600 leading-relaxed">
                      Sim. Assim como dentes naturais precisam de consultas
                      preventivas, as próteses sobre implantes também exigem
                      acompanhamento periódico para avaliação dos implantes,
                      parafusos, adaptação da prótese e higiene profissional.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
                    <h3 className="text-xl text-[#2D4F40] mb-3 font-bold">
                      É possível mastigar normalmente?
                    </h3>
                    <p className="text-zinc-600 leading-relaxed">
                      Sim. A prótese protocolo devolve grande parte da
                      eficiência mastigatória, permitindo ao paciente voltar a
                      se alimentar com muito mais conforto e segurança.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
                    <h3 className="text-xl text-[#2D4F40] mb-3 font-bold">
                      O tratamento dói?
                    </h3>
                    <p className="text-zinc-600 leading-relaxed">
                      O procedimento é realizado com anestesia local e, quando
                      indicado, pode ser associado a técnicas de sedação. A
                      maioria dos pacientes relata um pós-operatório mais
                      tranquilo do que imaginava.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow md:col-span-2">
                    <h3 className="text-xl text-[#2D4F40] mb-3 font-bold">
                      Tenho pouco osso. Ainda posso fazer implantes?
                    </h3>
                    <p className="text-zinc-600 leading-relaxed">
                      Muitas vezes sim. Atualmente existem técnicas de enxertia
                      óssea e planejamentos específicos que permitem tratar
                      diversos casos de perda óssea. Uma avaliação individual é
                      fundamental para determinar as possibilidades de
                      tratamento.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#2D4F40] text-white p-8 rounded-3xl shadow-md">
                <h3 className="text-2xl font-semibold mb-6">Nosso Objetivo</h3>
                <p className="text-zinc-300 mb-4">
                  A prótese protocolo vai muito além da substituição dos dentes.
                  O objetivo é devolver qualidade de vida, função mastigatória,
                  conforto e confiança para sorrir novamente.
                </p>
                <p className="text-zinc-300">
                  Por meio de um planejamento cuidadoso e personalizado,
                  buscamos oferecer uma reabilitação previsível, segura e
                  duradoura, respeitando as necessidades e expectativas de cada
                  paciente. 🦷✨
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
