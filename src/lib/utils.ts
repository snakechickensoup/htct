import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { NAV_LINKS } from './constants';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPathnameIndex(pathname: string) {
  const link = pathname.split('/')[1];
  return NAV_LINKS.findIndex((navLink) => navLink.href === link);
}
