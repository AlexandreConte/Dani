import {
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconCalendar,
} from "@tabler/icons-react";
import Adress from "./Address";
import Logo from "@/styles/Logo.module.css";
import Area from "./Shared/Area";

export default function Footer() {
  return (
    <div className="w-screen bg-[#2D4F40]">
      <Area>
        <footer className="px-2 text-white pt-16 pb-6 w-full">
          <div className="flex flex-wrap gap-8 justify-center items-start">
            <Adress
              iframeSrc="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d113041.76129952207!2d-48.59312291776405!3d-27.700144213837994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x95273b8f36ffe121%3A0x4fb2ffe5cb349dd7!2sdaniela%20aline%20conte%20ory%20oka!3m2!1d-27.700168599999998!2d-48.5107231!5e0!3m2!1spt-BR!2sbr!4v1690566651036!5m2!1spt-BR!2sbr"
              adressLine="Shopping Oka Floripa, Torre Sol, SC-405, nº 4397, Sala 208, Campeche, Florianópolis, Santa Catarina, CEP 88065-000"
              gMapsHref="https://maps.app.goo.gl/AJPUmTd9ywrRZ7xt7"
            />
            <div className="w-full flex flex-col">
              <span className="text-center w-full mb-4 text-lg lg:text-xl">
                Contato
              </span>
              <div className="flex gap-4 justify-center items-center max-[500px]:flex-col text-[#2D4F40] font-semibold">
                <a
                  rel="noopener noreferrer"
                  className="flex justify-center gap-1 bg px-4 w-[164px] py-2 rounded-md border border-zinc-500 shadow-lg hover:scale-105 active:scale-105 transition-transform"
                  target="_blank"
                  href="https://wa.me/5548999299977"
                >
                  <IconBrandWhatsapp stroke={2} />
                  Whatsapp
                </a>
                <a
                  rel="noopener noreferrer"
                  className="flex justify-center gap-1 bg px-4 w-[164px] py-2 rounded-md border border-zinc-500 shadow-lg hover:scale-105 active:scale-105 transition-transform"
                  target="_blank"
                  href="https://agenda.link/679111"
                >
                  <IconCalendar stroke={2} />
                  Agendar
                </a>
                <a
                  rel="noopener noreferrer"
                  className="flex justify-center gap-1 bg px-4 w-[164px] py-2 rounded-md border border-zinc-500 shadow-lg hover:scale-105 active:scale-105 transition-transform"
                  target="_blank"
                  href="https://www.instagram.com/dradanicontee/"
                >
                  <IconBrandInstagram stroke={2} />
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="max-w-[1250px] flex justify-center items-center pt-20 px-12 mx-auto">
              <div className="flex items-center lg:justify-between flex-wrap w-full max-lg:justify-center gap-4">
                <span className="px-4 text-center">
                  {new Date().getFullYear()} Todos os direitos reservados -
                  Anima Odontologia
                </span>
                <a href="/">
                  <span
                    className={`${Logo.logo} text-2xl text-nowrap text-center px-4`}
                  >
                    Dra Daniela Conte
                  </span>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </Area>
    </div>
  );
}
