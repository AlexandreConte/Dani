import Slider from "@/components/Shared/Slider";
import Schedule from "./Schedule";

export default function Quote() {
  const start = new Date(2017, 0);
  const end = new Date(Date.now());
  const duration = end.getFullYear() - start.getFullYear();
  return (
    <Slider direction="right" className="w-full">
      <div className="flex justify-center mx-8">
        <div className="bg-neutral-100 text-zinc-500 px-8 flex flex-center text-base lg:text-lg py-8 text-center text-pretty rounded-2xl w-[500px]">
          <div className="flex-col-center px-2 gap-1">
            <h3>Transformando sorrisos há mais de <span className="font-semibold">{duration} anos</span>.</h3>
            <h3>Te ajudo a conquistar o sorriso dos seus sonhos!</h3><br />
            <Schedule />
          </div>
        </div>
      </div>
    </Slider>
  )
}
