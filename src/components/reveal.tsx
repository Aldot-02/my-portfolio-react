import React, {useEffect, useRef} from 'react';
import {motion, useAnimation, useInView} from 'framer-motion'


interface Props {
    children: JSX.Element;
    width?: "fit-content" | "100%";
}

const Reveal = ({children, width = "fit-content"}: Props) => {

  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  const controls = useAnimation();

  useEffect(() => {
    if(isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);
  return (
    <div ref={ref} style={{position: "relative", width, overflow: "hidden"}}>
        <motion.div
            variants={{
              hidden: {opacity: 0, y: 75},
              visible: {opacity: 1, y: 0}
            }}
            initial="hidden"
            animate={controls}
            transition={{
              duration: 0.5
            }}
        >
            {children}
        </motion.div>
    </div>
  )
}

export default Reveal