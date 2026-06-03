import { Slide, SlideProps } from "react-awesome-reveal";

interface SliderProps {
  children: any
  direction?: SlideProps["direction"]
  cascade?: SlideProps["cascade"]
  className?: string
}

export default function Slider({ children, direction, cascade, className }: SliderProps) {
  const animationTimer = 350;
  return (
    <Slide
      className={className}
      triggerOnce
      direction={direction}
      cascade={cascade}
      duration={animationTimer}
    >
      {children}
    </Slide>
  )
}
