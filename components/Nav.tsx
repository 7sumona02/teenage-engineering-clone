import React from 'react'

const Nav = () => {
  return (
    <div>
        <div className='flex gap-6'>
            <div><NavItem /></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
  )
}

const NavItem = () => {
    return (
        <div className='flex items-center gap-4'>
            <div><img src='/images/dazai.jpg' className='w-14' /></div>
            <div>
                <div className='text-2xl font-sans font-extralight text-first tracking-tight leading-8'>
                    <div>teenage</div>
                    <div>engineering</div>
                </div>
                <div className='mt-2 text-xs font-sans font-extralight text-first'>2025 january</div>
            </div>
        </div>
    )
}

export default Nav