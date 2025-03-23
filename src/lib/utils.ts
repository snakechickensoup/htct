import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { NAV_LINKS } from './constants';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPathnameIndex(pathname: string) {
  return NAV_LINKS.findIndex((navLink) => navLink.href === pathname);
}

export function getIndexPathname(index: number) {
  return NAV_LINKS[index].href;
}
