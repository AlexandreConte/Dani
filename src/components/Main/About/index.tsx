//  Components
import ProfessionalCard from "./ProfessionalCard";

// Images
import profileImage from "public/images/perfil.jpg";

// Library
import Slider from "@/components/common/Slider";

export default function About() {
  return (
    <Slider>
      <div className="
        flex-col-center mx-auto
      ">
        <ProfessionalCard
          name={"Dra. Daniela Aline Conte"}
          image={profileImage}
          specialization={"Dentista Especialista e Mestre em Prótese e Reabilitação Oral"}
          instaUrl={"https://www.instagram.com/dradaniconte/"}
          local="Santa Catarina, Florianópolis - Campeche"
        />
      </div>
    </Slider>
  )
}