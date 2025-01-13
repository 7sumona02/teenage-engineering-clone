import React from 'react'

const Hero = () => {
  return (
    <div className='h-[110vh] bg-hero flex justify-center flex-col items-center'>
        <div className='flex justify-center flex-col gap-5 items-center mt-14 cursor-pointer'>
            <div className='text-3xl font-sans font-light font-zinc-300 tracking-wide'>XY</div>
            <div className='text-5xl font-sans font-light'>Ich liebe den albernen dazai.</div>
            <div className='text-red-600 text-2xl tracking-wide font-sans hover:underline'>explore</div>
        </div>
        <div className='mt-20'>
            <img src='/images/Button.svg' className='w-[80vw]' />
        </div>
    </div>
  )
}

export default Hero