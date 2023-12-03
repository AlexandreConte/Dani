import { IconArrowUp } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export default function ScrollTop() {

    const [isVisible, setIsVisible] = useState<boolean>(false)

    function handleClick() {
        window?.scrollTo(0, 0)
    }

    useEffect(() => {
        function userScroll() {
            setIsVisible(scrollY > 0)
        }

        window?.addEventListener("scroll", userScroll)

        return () => window.removeEventListener("scroll", userScroll)
    }, [])

    return (
        <>
            {isVisible && (
                <div
                    onClick={handleClick}
                    className="bg-neutral-300 
          rounded-full w-8 h-8 
          fixed bottom-2 right-2 
          cursor-pointer 
          flex items-center justify-center"
                >
                    <IconArrowUp />
                </div>
            )}
        </>
    )
}
