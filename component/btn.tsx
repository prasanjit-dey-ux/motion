'use client'
import React from 'react'
import { easeInOut, motion } from 'motion/react' 

export const Btn1 = () => {
  return (
    <div className="perspective-[1000px]">
      <motion.button
      whileHover={{
        rotateX:20,
        rotateY:20,
      }}
      transition={{
        duration:0.3,
        ease:easeInOut,
      }}
      whileTap={{
       y:10,
      }}
      style={{
        translateZ: 100,
      }}
      className="relative bg-neutral-950 outline-none border border-neutral-800 px-8 py-2 rounded-lg cursor-pointer hover:text-orange-50 transition-shadow hover:drop-shadow-[0_0_25px_5px_#3b82f6/50] text-white">
        Click me
        <span className="absolute inset-x-0 -bottom-px  bg-linear-to-r from-transparent via-orange-500 to-transparent h-px w-3/5 mx-auto">
        </span>
      </motion.button>
    </div>
  )
}
