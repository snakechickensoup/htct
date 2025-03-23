'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '../ui/carousel';
import { getIndexPathname, getPathnameIndex } from '@/lib/utils';
import { NAV_LINKS } from '@/lib/constants';

const MainCarousel = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [api, setApi] = useState<CarouselApi>();
  const pathnameIndex = getPathnameIndex(pathname);
  const [current, setCurrent] = useState(pathnameIndex);

  useEffect(() => {
    if (!api) return;
    if (api.selectedScrollSnap() !== pathnameIndex) {
      api.scrollTo(pathnameIndex);
    }
    setCurrent(pathnameIndex);
  }, [api, pathnameIndex]);

  useEffect(() => {
    if (!api) return;

    const onRouteChange = () => {
      const index = api.selectedScrollSnap();
      if (index !== current) {
        setCurrent(index);
        const path = getIndexPathname(index);
        router.push(path);
      }
    };

    api.on('select', onRouteChange);
    return () => {
      api.off('select', onRouteChange);
    };
  }, [api, current, router]);

  return (
    <Carousel
      className='flex w-full flex-1 flex-col overflow-hidden'
      opts={{
        align: 'start',
        startIndex: pathnameIndex,
        loop: false
      }}
      setApi={setApi}
    >
      <CarouselContent className='flex flex-1 overflow-hidden' style={{ display: 'flex' }}>
        {NAV_LINKS.map((_, index) => (
          <CarouselItem key={index} className='flex basis-full'>
            {current === index && children}
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default MainCarousel;
