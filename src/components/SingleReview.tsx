import Image, { StaticImageData } from "next/image";

export interface SingleReviewProps {
  name: string;
  comment: string;
  link: string;
  avaliacao: number;
  imageSrc: StaticImageData | string;
  className?: string;
}

export default function SingleReview(props: SingleReviewProps) {
  return (
    <a
      className={`flex flex-wrap max-w-[200px] h-[200px] mx-2 shadow hover:shadow-lg active:shadow-lg rounded-lg transition-shadow`}
      href={props.link}
      target="_blank"
    >
      <div className="flex-col-center flex-wrap">
        <Image
          alt={`Foto de perfil`}
          src={props.imageSrc}
          className="w-[60px]"
          width={120}
          height={120}
        />
        <div className="text-base text-zinc-700 font-bold text-center mt-1">
          {props.name}
        </div>
        <div className="text-zinc-500 text-center text-sm pt-2">{props.comment}...</div>
      </div>
    </a>
  );
}
