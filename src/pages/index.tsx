// next components
import Head from 'next/head'

// tabler icons
import { IconDental, IconHome, IconMapPinFilled, IconPhone } from '@tabler/icons-react'

// components
import Appointment from '@/components/Appointment'
import Header from '@/components/Header'
import { IconsAndDescriptionsNavbarItems } from '@/components/Navbar'
import Page from '@/components/common/Page'

// images
import backgroundImage from "public/backgrounds/dani-bg.jpg"
import Main from '@/components/Main'

export default function Home() {
    return (
        <Page>
            <Head>
                <title>Dra. Daniela Conte | Dentista especializada em Prótese</title>
            </Head>
            <Header
                navbarItens={navbarItens}
            />
            <Appointment
                backgroundImage={backgroundImage}
                altImage="Dra. Daniela Aline Conte trabalhando na sua clínica odontológica em Florianópolis"
            >
            </Appointment>
            <Main />
        </Page>
    )
}

const navbarItens: IconsAndDescriptionsNavbarItems[] = [
    { image: <IconHome />, description: "Início", url: "/#", alwaysAvailable: false },
    { image: <IconDental />, description: "Sobre", url: "/#sobre", alwaysAvailable: false },
    { image: <IconMapPinFilled />, description: "Endereço", url: "/#endereco", alwaysAvailable: false },
    { image: <IconPhone />, description: "Contato", url: "/#contatos", alwaysAvailable: true },
]