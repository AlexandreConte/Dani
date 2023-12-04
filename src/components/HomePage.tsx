// IMAGES
import logoImage from "public/logo.png"
import profileImage from "public/perfil.jpg"

// COMPONENTS
import Header from "./Header";
import Appointment from "./Appointment";
import Page from "./common/Page";
import About from "./About";
import Map from "./Map";
import ScrollTop from "./ArrowUp";
import { IconsAndDescriptionsNavbarItems } from "./Navbar";
import { IconDental, IconHome, IconMapPinFilled, IconPhone } from "@tabler/icons-react";
import Profile from "./Profile";
import WithBackground from "./common/WithBackground";
import Professional, { ProfessionalProps } from "./Professional";
import Banner from "./AppointmentBanner";

// NAVBAR DATA
const navbarItens: IconsAndDescriptionsNavbarItems[] = [
    {
        image: <IconHome />,
        description: "Início",
        url: "/",
        alwaysAvailable: false
    },
    {
        image: <IconDental />,
        description: "Sobre",
        url: "/#sobre",
        alwaysAvailable: false
    },
    {
        image: <IconMapPinFilled />,
        description: "Endereço",
        url: "/#endereco",
        alwaysAvailable: false
    },
    {
        image: <IconPhone />,
        description: "Contatos",
        url: "/#contatos",
        alwaysAvailable: true,
    },
]

// PROFILE DATA
const profile: ProfessionalProps = { name: 'Dra. Daniela Aline Conte', specialization: 'Especialista e mestre em Prótese e Reabilitação Oral.', image: profileImage, instaUrl: "https://www.instagram.com/dradaniconte/" }

// MAIN PAGE
export default function HomePage() {
    return (
        <Page>
            <Header
                logoImage={logoImage}
                navbarItens={navbarItens}
            />
            <Appointment>
                <Banner
                    buttonTitle={"Agendar Avaliação"}
                    link={"https://wa.me/5548999299977"}
                    className={"bg-[#67c3c6b2] p-6 rounded-lg"}
                />
            </Appointment>
            <WithBackground>
                <main>
                    <Profile>
                        <Professional
                            name={profile.name}
                            image={profile.image}
                            specialization={profile.specialization}
                            instaUrl={profile.instaUrl}
                        />
                    </Profile>
                    <About />
                    <Map />
                </main>
                <ScrollTop />
            </WithBackground>
        </Page>
    )
}
