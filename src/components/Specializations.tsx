import AreaWithMarginX from "./Shared/AreaWithMarginX";
import Slider from "./Shared/Slider";
import SpecialItem from "./SpecializationItem";

const specializations = [
  "Prótese",
  "Harmonização",
  "Clareamento",
]

function renderSpecializations() {
  return (
    <Slider cascade direction="up" className="max-[1024px]:w-full">
      {specializations.map((it, index) => (
        <SpecialItem key={`${it}-${index}`}>{it}</SpecialItem>
      ))}
    </Slider>
  )
}

export default function Specializations() {
  return (
    <AreaWithMarginX className="flex-col-center pt-[50px] pb-[25px] gap-y-[25px] w-full">
      <div className="
        flex justify-center items-center max-[1024px]:flex-col gap-y-[30px]
        w-full
      ">
        {renderSpecializations()}
      </div>
    </AreaWithMarginX>
  )
}