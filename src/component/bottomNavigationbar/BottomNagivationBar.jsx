import React from 'react'
import "./BottomNagivationBar.css"
import{motion} from "framer-motion"

function BottomNagivationBar() {
  return (
    <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 4,
        }}>
        <h3 className='main'>Home | About | Project | Contact </h3>
    </motion.div>
  )
}

export default BottomNagivationBar