"use client"

import Link from 'next/link';
import style from './components.module.css'
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname()
  const validPath = ['/recipe', '/kitchen', '/calendar', '/']

  if (validPath.includes(pathname)) {
    return (
      <nav className={style.navbar}>
        <Link href='/' className={pathname === '/' ? style.active : ''}>
          <span className="material-symbols-outlined">home</span>
        </Link>
        <Link href='/recipe' className={pathname === '/recipe' ? style.active : ''}>
          <span className="material-symbols-outlined">menu_book</span>
        </Link>
        <Link href='/kitchen' className={pathname === '/kitchen' ? style.active : ''}>
          <span className="material-symbols-outlined">kitchen</span>
        </Link>
        <Link href='/calendar' className={pathname === '/calendar' ? style.active : ''}>
          <span className="material-symbols-outlined">calendar_month</span>
        </Link>
      </nav>
    )
  } else {
    return <></>
  }
  
}