import SpecialItem from "./SpecializationItem";
import Slider from "../../common/Slider";

const specializations = [
  "Prótese",
  "Harmonização",
  "Clareamento",
]

function renderSpecializations() {
  return (
    <Slider cascade direction="up">
      {specializations.map((it, index) => (
        <SpecialItem key={`${it}-${index}`}>{it}</SpecialItem>
      ))}
    </Slider>
  )
}

export default function Specializations() {
  return (
    <div className="
      flex-center mt-12 flex-wrap
      min-w-[200px]
      gap-4 max-lg:mt-4
    ">
      {renderSpecializations()}
    </div>
  )
}