import { IconStarFilled } from "@tabler/icons-react";
import SingleReview from "./SingleReview";
import Image from "next/image";
import googleLogo from "@/../public/icons/logo-google.svg";

const reviews = [
  {
    name: "Ana Paula Lima",
    comment: `Dani, é uma profissional Extraordinária. Como queria ter conhecido ela antes...`,
    link: "https://g.co/kgs/NBAqtx9",
    avaliacao: 5,
    imageSrc: "https://lh3.googleusercontent.com/a-/ALV-UjVcvE_olwiHRtjy44oEQwM4Q1cLwRwzbGqsHfu57K4guKg-WP5Z=w75-h75-p-rp-mo-br100",
  },
  {
    name: "Ricardo da Silva",
    comment: `Uma excelente profissional, dedicada e muito atenciosa...`,
    link: "https://g.co/kgs/rcaUDPT",
    avaliacao: 5,
    imageSrc: "https://lh3.googleusercontent.com/a/ACg8ocJGLSdf6o3qyZEZd8bg57yqV2goStik4dECNUohUdnkXQ7QbQ=w75-h75-p-rp-mo-br100",
  },
  {
    name: "Fernanda Costa",
    comment: `Dentista super competente e dedicada. Minuciosa...`,
    link: "https://g.co/kgs/4kvk4nQ",
    avaliacao: 5,
    imageSrc: "https://lh3.googleusercontent.com/a-/ALV-UjWUy3HLym0M0NcOZa6Yt3RpaPrhxjD73yjNi0jtYPQDRMWvKfrEOw=w75-h75-p-rp-mo-ba3-br100",
  },
  {
    name: "Ingrid Vartha",
    comment: `Profissional e pessoa maravilhosa! Super capacitada e...`,
    link: "https://g.co/kgs/XDn2GPG",
    avaliacao: 5,
    imageSrc: "https://lh3.googleusercontent.com/a/ACg8ocJOcWLgxk-95i_SlMJnlkVpcuGRe3i341AXOCjW2ODWJnqJ2g=w75-h75-p-rp-mo-br100",
  },
];

export default function Reviews() {
  return (
    <div className="mt-[50px] mb-[25px] flex-col-center w-full h-auto">
      <div className="bg-neutral-100 py-14 rounded-xl flex-col-center">
        <div className="flex-col-center">
          <div>
            <Image alt="Google brand icon" src={googleLogo} width={100} />
          </div>
          <div className="flex-center flex-wrap gap-x-2 gap-y-8 mx-4 my-8">
            <div className="text-black font-semibold">5,0</div>
            <div className="flex-center">
              <IconStarFilled className="text-yellow-500" />
              <IconStarFilled className="text-yellow-500" />
              <IconStarFilled className="text-yellow-500" />
              <IconStarFilled className="text-yellow-500" />
              <IconStarFilled className="text-yellow-500" />
            </div>
            <div className="text-black flex-center text-center">50+ avaliações</div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">{renderReviews()}</div>
      </div>
    </div>
  );
}

function renderReviews() {
  return reviews.map((review) => (
    <div key={review.name}>
      <SingleReview
        name={review.name}
        comment={review.comment}
        link={review.link}
        avaliacao={5}
        imageSrc={review.imageSrc}
        className="gap-4"
      />
    </div>
  ));
}