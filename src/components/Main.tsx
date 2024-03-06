import AppointmentBanner from "./AppointmentBanner";
import ScrollTop from "./ArrowUp";
import Clinic from "./Clinic";
import Map from "./Map";
import Professional from "./Professional";
import Profile from "./Profile";
import WithBackground from "./common/WithBackground";

// IMAGES
import profileImage from "public/perfil.jpg"

export default function Main() {
  return (
    <WithBackground>
      <main className="pt-32">
        <Profile>
          <Professional
            name={"Dra. Daniela Aline Conte"}
            image={profileImage}
            specialization={"Especialista e mestre em Prótese e Reabilitação Oral."}
            instaUrl={"https://www.instagram.com/dradaniconte/"}
          />
        </Profile>
        <Clinic />
        <AppointmentBanner
          h2="Dentista Especialista e Mestre em Prótese e Reabilitação Oral"
          button={"Agende a sua avaliação"}
          link={"https://wa.me/5548999299977"}
          className={"bg-[#67c3c6f3] p-6 rounded-lg"}
        />
        <Map
          iframeSrc="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d113041.76129952207!2d-48.59312291776405!3d-27.700144213837994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x95273b8f36ffe121%3A0x4fb2ffe5cb349dd7!2sdaniela%20aline%20conte%20ory%20oka!3m2!1d-27.700168599999998!2d-48.5107231!5e0!3m2!1spt-BR!2sbr!4v1690566651036!5m2!1spt-BR!2sbr"
          adressLine="Endereço: Torre Sol - OKA FLORIPA, SC-405, 4397 - Sala 208 - Campeche, Florianópolis - SC, 88065-000"
          gMapsHref="https://maps.app.goo.gl/AJPUmTd9ywrRZ7xt7"
        />
      </main>
      <ScrollTop />
    </WithBackground>
  )
}
