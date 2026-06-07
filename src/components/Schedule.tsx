export default function Schedule() {
  return (
    <div className="flex flex-col flex-center text-base lg:text-lg text-center px-2">
      <h3>Agende sua consulta comigo:</h3>
      <a rel="noopener noreferrer" target="_blank" href="https://agenda.link/679111"
        className={`
          bg-[#2D4F40] text-white border border-zinc-400
          px-6 py-1 rounded-md shadow-2xl shadow-[#2D4F40] mt-2
          hover:scale-105 active:scale-105 transition-transform
        `}>
        Agendar
      </a>
    </div>
  )
}
