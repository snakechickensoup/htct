'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';
import { NAV_LINKS } from '@/lib/constants';

const Nav = () => {
  const pathname = usePathname();
  return (
    <ScrollArea className='w-full px-4 whitespace-nowrap'>
      <nav className='space-x-4 overflow-y-hidden'>
        {NAV_LINKS.map((link) => (
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
