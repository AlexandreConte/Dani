import SpecialItem from "./SpecializationItem";

const specializations = [
  "Prótese",
  "Implante",
  "Clareamento",
  "Restauração",
  "Limpeza",
  "Harmonização",
]

export default function Special() {
  return (
    <div className="
      flex justify-center items-center
      lg:-translate-y-10 gap-4 w-full max-lg:mt-4
    ">
      {specializations.map((it, index) => (
        <SpecialItem key={`${it}-${index}`}>{it}</SpecialItem>
      ))}
    </div>
  )
}