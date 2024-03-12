//  Components
import Professional from "./Professional";

// Lib Animation
import { Slide } from "react-awesome-reveal";

// Images
import profileImage from "public/perfil.jpg";

export default function Profile() {
    return (
        <Slide>
            <div className="
                    flex-col-center mx-auto
                ">
                <Professional
                    name={"Dra. Daniela Aline Conte"}
                    image={profileImage}
                    specialization={"Especialista e mestre em Prótese e Reabilitação Oral."}
                    instaUrl={"https://www.instagram.com/dradaniconte/"}
                />
            </div>
        </Slide>
    )
}