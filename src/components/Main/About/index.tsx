//  Components
import animationDuration from "@/utils/constants/animation";
import ProfessionalCard from "./ProfessionalCard";

// Images
import profileImage from "public/perfil.jpg";

// Library
import { Slide } from "react-awesome-reveal";

export default function About() {
  return (
    <Slide duration={animationDuration}>
      <div className="
        flex-col-center mx-auto
      ">
        <ProfessionalCard
          name={"Dra. Daniela Aline Conte"}
          image={profileImage}
          specialization={"Especialista e mestre em Prótese e Reabilitação Oral."}
          instaUrl={"https://www.instagram.com/dradaniconte/"}
        />
      </div>
    </Slide>
  )
}