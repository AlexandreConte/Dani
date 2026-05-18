import Slider from "@/components/Shared/Slider";

export default function Quote() {
  const start = new Date(2017, 0);
  const end = new Date(Date.now());
  const duration = end.getFullYear() - start.getFullYear();
  return (
    <Slider>
      <div className="text-white flex flex-center text-xl lg:text-2xl px-8 py-8 text-center">
        <div className="flex-col-center">
          <h1>Transformando sorrisos há mais de {duration} anos.</h1>
          <h2>Ajudo você a ter o sorriso dos seus sonhos!</h2>
        </div>
      </div>
    </Slider>
  )
}