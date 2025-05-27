import {
  AnimationControls,
  TargetAndTransition,
  VariantLabels,
  Transition,
} from "framer-motion"

type TOnMountedAnimated = {
  transition?: Transition | undefined
  initial?: boolean | TargetAndTransition | VariantLabels | undefined
  animate?:
    | boolean
    | TargetAndTransition
    | VariantLabels
    | AnimationControls
    | undefined
  exit?: TargetAndTransition | VariantLabels | undefined
}

export const onMountedAnimated: TOnMountedAnimated = {
  transition: {
    duration: 0.5,
    ease: "easeOut",
  },
  animate: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
  },
  exit: { opacity: 0, filter: "blur(10px)" },
  initial: {
    opacity: 0,
    x: 20,
    filter: "blur(10px)",
  },
}
