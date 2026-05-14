import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Reveal({
  children,
  delay = 0,
  y = 80,
  scale = 0.96,
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  })

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y,
        scale,
        filter: "blur(10px)",
      }}
      animate={
        inView
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            }
          : {}
      }
      transition={{
        duration: 1.2,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
// import { motion } from "framer-motion"
// import { useInView } from "react-intersection-observer"

// export default function Reveal({
//   children,
//   delay = 0,
//   y = 60,
//   scale = 0.96,
// }) {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.2,
//   })

//   return (
//     <motion.div
//       ref={ref}
//       initial={{
//         opacity: 0,
//         y,
//         scale,
//       }}
//       animate={
//         inView
//           ? {
//               opacity: 1,
//               y: 0,
//               scale: 1,
//             }
//           : {}
//       }
//       transition={{
//         duration: 1,
//         delay,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//     >
//       {children}
//     </motion.div>
//   )
// }