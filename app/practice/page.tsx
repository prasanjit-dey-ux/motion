'use client'
import { useState } from "react"

export default function Practice() {

    const [count, setCount] = useState(0);

    return <div className="bg-zinc-100 h-screen flex justify-center items-center">
        <div className="grid-col-4 col-span-2 outline-yellow-200">
        <button onClick={() => {
            setCount(count + 1);
        }}
        className="outline-none bg-neutral-50 px-4 py-2 rounded-lg border border-zinc-200 border-t-2 border-t-white  text-base drop-shadow-xs drop-shadow-orange-300 hover:drop-shadow-sm hover:drop-shadow-orange-300"
        >
            Count {count}
        </button>



        </div>
    </div>
}