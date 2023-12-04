import Image from "next/image";
import { IconBrandInstagram, IconUserCircle } from "@tabler/icons-react";

export interface ProfessionalProps {
    name: string
    image: any
    specialization: string
    instaUrl: string
}

export default function Professional({ name, image, specialization, instaUrl }: ProfessionalProps) {
    return (
        <div className={`
            lg:w-[350px] w-auto
            bg-neutral-200 m-2 rounded-xl py-4
            hover:bg-neutral-100
            transition-all duration-300`
        }>
            <h2>
                {image ? (
                    <Image src={image} alt={name} className="w-[200px] m-auto rounded-full border-2 border-[#C1A497]" />
                ) : (
                    <IconUserCircle size={200} className="m-auto" />
                )
                }
            </h2>
            <h2 className="text-center mx-6 my-4 text-lg font-medium text-zinc-900">{name}</h2>
            <h2 className="text-center mx-6 my-2 text-zinc-800">{specialization}</h2>
            <div className="flex justify-center items-center">
                <a href={instaUrl} className="flex justify-center items-center hover:scale-110 transition-transform w-fit">
                    <span className="bg-grandient-to-r from-red-500 to-blue-500 bg-">
                        <IconBrandInstagram size={40} color="#D24E60" />
                    </span>
                    <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">Instagram</span>
                </a>
            </div>
        </div>
    )
}
