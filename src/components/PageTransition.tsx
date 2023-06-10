import { AnimatePresence, motion } from "framer-motion"

const PageTransition = ({ children }: { children: JSX.Element }): JSX.Element => (
  <AnimatePresence mode="wait">
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 2 }}
    >
      {children}
    </motion.div>
  </AnimatePresence>
)

export default PageTransition
