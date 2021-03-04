import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'

export const useShowUp = () => {
    const controls = useAnimation()
    const [element, view] = useInView()

    view ? controls.start("visible") : controls.start("hidden")

    return [element, controls]
}