import Link from "next/link";
import AreaWithMarginX from "./Shared/AreaWithMarginX";
import SpecialItem from "./SpecializationItem";

const specializations = [
  // {
  //   id: 0,
  //   specialization: "Prótese",
  //   link: "/tratamentos/" // TODO: AJUSTAR LINK!
  // },
  // {
  //   id: 1,
  //   specialization: "Harmonização",
  //   link: "/tratamentos/" // ajustar link
  // },
  // {
  //   id: 2,
  //   specialization: "Clareamento",
  //   link: "/tratamentos/" // ajustar link
  // },
  {
    id: 3,
    specialization: "Profilaxia",
    link: "/tratamentos/profilaxia"
  },
  {
    id: 4,
    specialization: "Implante",
    link: "/tratamentos/zirconiaoutitanio"
  },
  {
    id: 5,
    specialization: "Botox",
    link: "/tratamentos/botox" // ajustar link
  },
  {
    id: 6,
    specialization: "Facetas",
    link: "/tratamentos/facetas" // ajustar link
  },
]

function renderSpecializations() {
  return specializations.map((it) => (
    <Link href={it.link} key={`${it.id}`}>
      <SpecialItem >{it.specialization}</SpecialItem>
    </Link>
  ))
}

export default function Specializations() {
  return (
    <div>
      <h3 className="text-center pt-8 text-white text-2xl font-semibold">Tratamentos</h3>
      <AreaWithMarginX className="pt-[50px] pb-[25px] gap-y-[25px] w-full">
        <div className="
          gap-[30px]
          grid grid-flow-row grid-cols-3
        ">
          {renderSpecializations()}
        </div>
      </AreaWithMarginX>
    </div>
  )
}
