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
          instaUrl={"https://www.instagram.com/dradaniconte/"}
          local="Clínica Odontológica em Florianópolis, Campeche - Santa Catarina"
        />
      </div>
    </Slider>
  )
}