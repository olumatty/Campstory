"use client"
import { NAV_LINKS } from '@/constant'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Button from './Button'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const ToggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
  return (
    <nav className='flexBetween max-container padding-container relative z-30 py-5  '>
      <Link href ="/">
      <Image src = "/TOURR.svg" alt= "logo" width={80} height={36}/>
      </Link>

      <ul className={`${menuOpen ? 'flex' :'hidden'} lg:flex h-auto gap-6  flex-col lg:flex-row lg:static absolute top-full left-0 w-full lg:w-auto bg-green-500 text-white  
      lg:bg-transparent p-3 lg:p-0 transition-all shadow-xl lg:shadow-none ease-in-out`}>
        {NAV_LINKS.map((link) =>(
            <Link href={link.href} key = {link.key} onClick={ToggleMenu} className='regular-14 text-white lg:text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>
                {link.label}
            </Link>
        ))}
      </ul>
      <div className='lg:flexCenter hidden'>
        <Button
            title='Login'
            type='button'
            icon='/user.svg'
            variant='btn_dark_green'
        />
      </div>

      <Image
        src="menu.svg"
        alt= "menu"
        width= {30}
        height={30}
        onClick={ToggleMenu}
        className='inline-block cursor-pointer lg:hidden'/>
       

    </nav>
  )
}

export default Navbar
