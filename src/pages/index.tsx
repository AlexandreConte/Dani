// next components
import Head from 'next/head'

// tabler icons
import { IconDental, IconHome, IconMapPinFilled, IconPhone } from '@tabler/icons-react'

// components
import About from '@/components/About'
import Appointment from '@/components/Appointment'
import AppointmentBanner from '@/components/AppointmentBanner'
import Header from '@/components/Header'
import Map from '@/components/Map'
import { IconsAndDescriptionsNavbarItems } from '@/components/Navbar'
import Professional from '@/components/Professional'
import Profile from '@/components/Profile'
import Page from '@/components/common/Page'
import WithBackground from '@/components/common/WithBackground'

// images
import logoImage from "public/logo.webp"
import profileImage from "public/perfil.avif"
import backgroundImage from "public/backgrounds/dani-bg.avif"
import ScrollTop from '@/components/ArrowUp'

export default function Home() {
    return (
        <>
            <Head>
                <title>Dra. Daniela Conte | Dentista especializada em Prótese</title>
                <meta name="description" content="Doutora Daniela Especialista em prótese | Dentista Oka Florianópolis" />
            </Head>
            <Page>
                <Header
                    logoImage={logoImage}
                    navbarItens={navbarItens}
                />
                <Appointment
                    backgroundImage={backgroundImage}
                    altImage="Dra. Daniela Aline Conte trabalhando na sua clínica odontológica em Florianópolis"
                >
                    <AppointmentBanner
                        h2="Dentista Especialista e Mestre em Prótese e Reabilitação Oral"
                        button={"Agende a sua avaliação"}
                        link={"https://wa.me/5548999299977"}
                        className={"bg-[#67c3c6f3] p-6 rounded-lg"}
                        altImage="Logo da Dra Daniela Aline Conte"
                        image={logoImage}
                    />
                </Appointment>
                <WithBackground>
                    <main className="pt-20">
                        <Profile>
                            <Professional
                                name={"Dra. Daniela Aline Conte"}
                                image={profileImage}
                                specialization={"Especialista e mestre em Prótese e Reabilitação Oral."}
                                instaUrl={"https://www.instagram.com/dradaniconte/"}
                            />
                        </Profile>
                        <About />
                        <Map
                            iframeSrc="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d113041.76129952207!2d-48.59312291776405!3d-27.700144213837994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x95273b8f36ffe121%3A0x4fb2ffe5cb349dd7!2sdaniela%20aline%20conte%20ory%20oka!3m2!1d-27.700168599999998!2d-48.5107231!5e0!3m2!1spt-BR!2sbr!4v1690566651036!5m2!1spt-BR!2sbr"
                            adressLine="Endereço: Torre Sol - OKA FLORIPA, SC-405, 4397 - Sala 208 - Campeche, Florianópolis - SC, 88065-000"
                            gMapsHref="https://maps.app.goo.gl/AJPUmTd9ywrRZ7xt7"
                        />
                    </main>
                    <ScrollTop />
                </WithBackground>
            </Page>
        </>
    )
}

const navbarItens: IconsAndDescriptionsNavbarItems[] = [
    { image: <IconHome />, description: "Início", url: "/#", alwaysAvailable: false },
    { image: <IconDental />, description: "Sobre", url: "/#sobre", alwaysAvailable: false },
    { image: <IconMapPinFilled />, description: "Endereço", url: "/#endereco", alwaysAvailable: false },
    { image: <IconPhone />, description: "Contatos", url: "/#contatos", alwaysAvailable: true },
]