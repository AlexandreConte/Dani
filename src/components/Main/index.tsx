import Contact from "../Contact";
import Clinic from "../Clinic";
import About from "../About";
import BackgroundImage from "../BackgroundImage";
import Quote from "../Quote";
import Specializations from "../Specializations";
import Adress from "../Address";
import Reviews from "../Reviews";

export default function MainContent() {
  return (
    <div className="w-full max-w-[100vw]">
      <BackgroundImage />
      <div className="bg w-full">
        <main className="gap-y-[50px]">
          <About />
          <Quote />
          <Clinic />
          <Specializations />
          <Reviews />
          <Contact />
          <Adress
            iframeSrc="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d113041.76129952207!2d-48.59312291776405!3d-27.700144213837994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x95273b8f36ffe121%3A0x4fb2ffe5cb349dd7!2sdaniela%20aline%20conte%20ory%20oka!3m2!1d-27.700168599999998!2d-48.5107231!5e0!3m2!1spt-BR!2sbr!4v1690566651036!5m2!1spt-BR!2sbr"
            adressLine="Shopping Oka Floripa, Torre Sol, SC-405, nº 4397, Sala 208, Campeche, Florianópolis, Santa Catarina, CEP 88065-000"
            gMapsHref="https://maps.app.goo.gl/AJPUmTd9ywrRZ7xt7"
          />
        </main>
      </div>
    </div>
  )
}