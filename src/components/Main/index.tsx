import Contact from "./Contact";
import Clinic from "./Clinic";
import Adress from "./Address";

import About from "./About";
import WithColorBackground from "../common/WithColorBackground";
import BackgroundImage from "./BackgroundImage";
import FullWidth from "../common/FullWidth";
import Specializations from "../Specializations";
import Quote from "./Quote";

export default function MainContent() {
  return (
    <FullWidth>
      <BackgroundImage />
      <WithColorBackground>
        <main className="pt-14">
          <About />
          <Quote />
          <Clinic />
          <Specializations />
          <Contact />
          <Adress
            iframeSrc="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d113041.76129952207!2d-48.59312291776405!3d-27.700144213837994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x95273b8f36ffe121%3A0x4fb2ffe5cb349dd7!2sdaniela%20aline%20conte%20ory%20oka!3m2!1d-27.700168599999998!2d-48.5107231!5e0!3m2!1spt-BR!2sbr!4v1690566651036!5m2!1spt-BR!2sbr"
            adressLine="Shopping Oka Floripa, Torre Sol, SC-405, nº 4397, Sala 208, Campeche, Florianópolis, Santa Catarina, CEP 88065-000"
            gMapsHref="https://maps.app.goo.gl/AJPUmTd9ywrRZ7xt7"
          />
        </main>
      </WithColorBackground>
    </FullWidth>
  )
}