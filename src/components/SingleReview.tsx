import Image, { StaticImageData } from "next/image";
import Link from "next/link";

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
    <Link
      className={`flex flex-wrap max-w-[200px] h-[200px] mx-6`}
      href={props.link}
      target="_blank"
    >
      <div className="flex-col-center flex-wrap gap-3">
        <Image
          alt={`Foto de perfil`}
          src={props.imageSrc}
          className="w-[60px]"
          width={120}
          height={120}
        />
        <div className="text-base text-black font-bold text-center">
          {props.name}
        </div>
        <div className="text-black text-center text-sm">{props.comment}</div>
      </div>
    </Link>
  );
}