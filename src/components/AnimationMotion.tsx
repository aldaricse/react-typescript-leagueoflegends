import { motion } from "framer-motion"

const AnimationMotion = ({ children }: { children: JSX.Element }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    // initial={{ y: 10, opacity: 0 }}
    // animate={{ y: 0, opacity: 1 }}
    // exit={{ y: -10, opacity: 0 }}
    // transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  )
}

export default AnimationMotion