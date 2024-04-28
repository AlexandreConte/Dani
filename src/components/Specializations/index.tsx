import { Fragment } from "react";
import SpecialItem from "./SpecializationItem";

const specializations = [
  "Prótese",
  "Harmonização",
  "Clareamento",
]

function renderSpecializations() {
  return (
    <Fragment>
      {specializations.map((it, index) => (
        <SpecialItem key={`${it}-${index}`}>{it}</SpecialItem>
      ))}
    </Fragment>
  )
}

export default function Specializations() {
  return (
    <div className="
      flex justify-center items-center
      lg:translate-y-10 gap-4 w-full max-lg:mt-4
    ">
      {renderSpecializations()}
    </div>
  )
}