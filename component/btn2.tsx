'use client'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Bell, X } from 'lucide-react'


export const Btn2 = () => {

    const [open, setOpen] = useState(true);

  return (
    <>
        <div className='flex flex-col justify-center items-center gap-4 w-94 h-42 border border-neutral-200 rounded-xl bg-neutral-50 shadow-xs'>
            <div className='h-24'>
            <AnimatePresence>
            {open && (
            <motion.div 
            initial={{
                opacity: 0,
                scale: 0.98,
                filter: 'blur(10px)'
            }}
            animate={{
                opacity: 1,
                scale: 1,
                filter: 'blur(0px)'
            }}

            exit={{
                opacity: 0,
                scale: 0.98,
                filter: "blur(10px)",
            }}
            transition={{
                duration:0.5,
                ease:"easeInOut",
                
            }}


            className='bg-neutral-100 border border-neutral-200 rounded-lg p-2 flex items-center justify-between gap-2'>
            <div className='size-12 bg-neutral-900 rounded-md border-neutral-700 border flex justify-center items-center' >
                < Bell className='text-white'/>
            </div>  
            <div className='flex flex-col gap-1 flex-1'>
                <h2 className='font-medium'>Enable Notifications</h2>
                <p className='text-neutral-400'>Never miss an important update again.</p>
            </div>
            </motion.div>

        )
        }
            </AnimatePresence>

            </div>
        <button onClick={() => setOpen(!open)} className='flex w-fit gap-1 bg-neutral-100 border border-neutral-200 rounded-sm px-2 py-1 items-center justify-between cursor-pointer hover:scale-102 outline-none transition-all hover:bg-neutral-200'>
            {open ? (
                <>
                  Close     <X className='size-5'/>
                </>

            ) : (
                "Open"
            )}
     
        </button>
        </div>
    </>
  )
}
