import { Slide } from "react-awesome-reveal"

// COMPONENTS
export type ProfileProps = {
    children: any
}

export default function Profile({ children }: ProfileProps) {
    return (
        <Slide>
            <div
                id="sobre"
                className="
                    flex flex-col items-center gap-4 md:flex-row justify-center
                ">
                {children}
            </div>
        </Slide>
    )
}