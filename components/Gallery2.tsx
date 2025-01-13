import Link from 'next/link'
import React from 'react'

const Gallery2 = () => {
  return (
    <div className='h-screen bg-zinc-100 relative'>
        <div>
            <div className='p-20'>
                <h1 className='text-2xl font-sans font-light tracking-wide text-black'>pocket operator</h1>
                <Link href="/"><div className='inline-block mt-4 text-blue-600 text-lg tracking-wide font-sans hover:underline'>explore</div>
                </Link>
            </div>
            <div className='flex justify-center'>
                <img src='/images/guitar.svg' className='w-[54vw] saturate-0 contrast-125 absolute bottom-0' />
            </div>
        </div>
    </div>
  )
}

export default Gallery2


