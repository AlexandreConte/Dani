import ProfessionalCard from "./ProfessionalCard";
import Slider from "@/components/Shared/Slider";
import profileImage from "@/../public/images/perfil.jpg";

export default function About() {
  return (
    <Slider>
      <div className="
        flex-col-center mx-auto pt-[50px] pb-[25px]
      ">
        <ProfessionalCard
          name={"Dra. Daniela Aline Conte"}
          image={profileImage}
          specialization={"Especialista e Mestre em Prótese e Reabilitação Oral"}
          instaUrl={"https://www.instagram.com/dradaniconte/"}
          local="Santa Catarina, Florianópolis - Campeche"
        />
      </div>
    </Slider>
  )
}