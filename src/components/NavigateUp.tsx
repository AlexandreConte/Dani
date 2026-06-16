import { IconChevronUp } from "@tabler/icons-react";
import { useState, useEffect } from "react";

export default function NavigateUp() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    showScrollTop && (
      <div
        className="fixed bottom-36 right-4 z-10 w-[50px] h-[50px] p-[6px]
        flex-center rounded-full
        hover:scale-105 focus:scale-105 transition-all
        bg-[#fff] border border-zinc-300
      "
      >
        <div onClick={handleScrollToTop} className="flex-center">
          <IconChevronUp size={35} stroke={1.5} color="#000" />
        </div>
      </div>
    )
  );
}
