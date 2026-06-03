
export default function Quote() {
  const start = new Date(2017, 0);
  const end = new Date(Date.now());
  const duration = end.getFullYear() - start.getFullYear();
  return (
    <div className="text-white flex flex-center text-xl lg:text-2xl px-8 py-8 text-center">
      <div className="flex-col-center">
        <h3>Transformando sorrisos há mais de {duration} anos.</h3>
        <h3>Ajudo você a ter o sorriso dos seus sonhos!</h3>
      </div>
    </div>
  )
}
