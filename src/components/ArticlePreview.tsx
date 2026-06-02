import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";

interface ArticlePreviwProps {
  image: StaticImport
  alt: string
  textPreview: string
  title: string
  link: string
}

export default function ArticlePreview(props: ArticlePreviwProps) {
  return (
    <Link href={props.link} className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow flex flex-col sm:px-8">
      <h2 className="text-xl font-semibold text-zinc-800 mb-3">
        {props.title}
      </h2>
      <div className="flex gap-4 items-center sm:gap-6">
        <p className="text-zinc-600 leading-relaxed">
          {props.textPreview} <br /><span className="text-[#cb8157]">Ler Mais</span>
        </p>
        <Image alt={props.alt} src={props.image} width={700} height={700} className="w-[100px] h-[100px] object-cover rounded-md" />
      </div>
    </Link >
  )
}
