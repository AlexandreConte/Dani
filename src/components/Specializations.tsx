import Link from "next/link";
import AreaWithMarginX from "./Shared/AreaWithMarginX";
import SpecialItem from "./SpecializationItem";

const specializations = [
  // {
  //   id: 0,
  //   specialization: "Prótese",
  //   link: "/tratamentos/protese" // TODO: AJUSTAR LINK!
  // },
  // {
  //   id: 1,
  //   specialization: "Harmonização",
  //   link: "/tratamentos/harmonizacao" // ajustar link
  // },
  // {
  //   id: 2,
  //   specialization: "Clareamento",
  //   link: "/tratamentos/clareamento" // ajustar link
  // },
  // {
  //   id: 3,
  //   specialization: "Profilaxia",
  //   link: "/tratamentos/profilaxia"
  // },
  {
    id: 4,
    specialization: "Implante",
    link: "/tratamentos/zirconia-ou-titanio"
  },
  {
    id: 5,
    specialization: "Botox",
    link: "/tratamentos/toxina-botulinica"
  },
  {
    id: 6,
    specialization: "Faceta",
    link: "/tratamentos/facetas"
  },
  {
    id: 7,
    specialization: "Prótese",
    link: "/tratamentos/protese-tipo-protocolo"
  },
]

function renderSpecializations() {
  return specializations.map((it) => (
    <Link href={it.link} key={`${it.id}`} className="p-2">
      <SpecialItem className="bg-neutral-100 text-zinc-700 border-zinc-300">{it.specialization}</SpecialItem>
    </Link>
  ))
}

export default function Specializations() {
  return (
    <div>
      {/* <h3 className="text-center mt-4 px-20 min-[425px]:w-[280px] lg:w-[588px] text-[#2d4f40] text-base lg:text-lg font-semibold rounded-sm bg-white">Tratamentos</h3> */}
      <AreaWithMarginX className="pb-6 w-full">
        <div className="
          gap-[20px]
          grid grid-flow-row lg:grid-cols-4 min-[425px]:grid-cols-2
        ">
          {renderSpecializations()}
        </div>
      </AreaWithMarginX>
      <div className="w-full flex items-center justify-center text-center">
        <Link href="/tratamentos">
          <SpecialItem className="lg:w-[588px] min-[425px]:w-[280px] bg-[#2d4f40] text-zinc-300 border-zinc-400 hover:border-zinc-300 active:border-zinc-300">Ver mais tratamentos...</SpecialItem>
        </Link>
      </div>
    </div>
  )
}
