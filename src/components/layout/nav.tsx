'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';

const navLinks = [
  { name: '차트', href: '/' },
  { name: 'Whook', href: '/whook' },
  { name: '이벤트', href: '/event' },
  { name: '뉴스', href: '/news' },
  { name: '스토어', href: '/store' },
  { name: '충전소', href: '/charger' },
  { name: '강미정', href: '/snakechickensoup' }
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <ScrollArea className='w-full px-4 whitespace-nowrap'>
      <nav className='space-x-4 overflow-y-hidden'>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={pathname === link.href ? 'p-2 font-bold text-white' : 'p-2 font-bold'}
          >
            {link.name}
          </Link>
        ))}
      </nav>
      <ScrollBar orientation='horizontal' hidden />
    </ScrollArea>
  );
};

export default Nav;
