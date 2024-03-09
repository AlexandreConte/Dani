//Components
import Image from "next/image"
import { useEffect, useState } from "react"

// Image
import backgroundImage from "public/backgrounds/dani-bg.jpg"

export default function BackgroundImage() {

    const [scrollOffset, setScrollOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollOffset(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`
            flex-center
            bg-[#bebebe54] bg-cover 
            w-full min-h-[30vh] md:min-h-[50vh] lg:h-screen
            z-20 
            shadow-2xl
        `}>
            <Image
                src={backgroundImage}
                alt="Dra. Daniela Aline Conte trabalhando na sua clínica odontológica em Florianópolis"
                className={`fixed -z-20 object-center w-full h-auto`}
                style={{ transform: `translateY(${scrollOffset * .4}px)` }}
            />
        </div>
    )
}