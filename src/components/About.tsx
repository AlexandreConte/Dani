import ProfessionalCard from "./ProfessionalCard";
import Slider from "@/components/Shared/Slider";
import profileImage from "@/../public/images/perfil.jpg";

export default function About() {
  return (
    <div className="w-full flex justify-center items-center px-8 text-base lg:text-lg pt-24" id="sobre">
      <Slider>
        <div className="
          py-[25px]
        ">
          <ProfessionalCard
            name={"Dra. Daniela Conte"}
            image={profileImage}
            instaUrl={"https://www.instagram.com/dradaniconte/"}
            local="Clínica Odontológica em Florianópolis, Campeche - Santa Catarina"
          />
        </div>
      </Slider>
    </div>
  )
}