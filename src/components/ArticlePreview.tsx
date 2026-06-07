import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";

interface ArticlePreviwProps {
  image: StaticImport
  alt: string
  title: string
  link: string
}

export default function ArticlePreview(props: ArticlePreviwProps) {
  return (
    <Link href={props.link}
      className="
        bg-white px-3 py-2 rounded-lg shadow-md border border-zinc-300 text-zinc-500
        hover:shadow-lg active:shadow-lg flex flex-col justify-center items-center gap-2
        hover:bg-[#2D4F40] active:bg-[#2D4F40] transition-all hover:text-zinc-200 active:text-zinc-200
        hover:border-zinc-400 active:border-zinc-400
        min-w-[220px] min-h-[220px]
        ">
      <h2 className="text-base lg:text-lg py-2 text-center">
        {props.title}
      </h2>
      <div className="flex justify-center items-center">
        <Image alt={props.alt} src={props.image} width={1000} height={1000} className="w-[130px] h-[150px] object-cover rounded-md" />
      </div>
      <span className="text-center mt-2 text-[#cb8157]">Ler Mais</span>
    </Link >
  )
}
