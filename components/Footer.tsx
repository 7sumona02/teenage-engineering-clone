import React from 'react'

const Footer = () => {
  return (
    <div className='bg-zinc-100 font-extralight font-sans text-zinc-700 text-lg flex justify-between py-9 px-14'>
        <div>
            <p><CountrySelect /></p>
        </div>
        <div className='flex gap-4 translate-x-[6.3vw]'>
            <p className='hover:underline cursor-pointer'>newsletter</p>
            <p className='hover:underline cursor-pointer'>retailers</p>
            <p className='hover:underline cursor-pointer'>store</p>
            <p className='hover:underline cursor-pointer'>terms</p>
            <p className='hover:underline cursor-pointer'>press</p>
            <p className='hover:underline cursor-pointer'>contact</p>
        </div>
        <div>
        &#169;2025 teenage engineering
        </div>
    </div>
  )
}

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"  

const CountrySelect = () => {
    return (
        <DropdownMenu>
        <DropdownMenuTrigger className='rounded-xl'>india</DropdownMenuTrigger>
        <DropdownMenuContent className='p-0'>
            <DropdownMenuItem className='bg-zinc-900'>japan</DropdownMenuItem>
            <DropdownMenuItem className='bg-zinc-900'>china</DropdownMenuItem>
            <DropdownMenuItem className='bg-zinc-900'>korea</DropdownMenuItem>
            <DropdownMenuItem className='bg-zinc-900'>united kingdom</DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default Footer