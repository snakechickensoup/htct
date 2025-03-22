'use client';

import Link from 'next/link';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { BANNERS } from '@/lib/constants';

const Banner = () => {
  return (
    <Carousel
      className='w-full py-4'
      plugins={[
        Autoplay({
          delay: 2000
        })
      ]}
      opts={{
        loop: true
      }}
    >
      <CarouselContent className='-ml-2.5'>
        {BANNERS.map((banner) => (
          <CarouselItem key={banner.id} className='basis-11/12 pl-2.5'>
            <Link href={banner.link} target='_blank'>
              <AspectRatio ratio={16 / 9} className='relative'>
                <Image
                  src={banner.image}
                  alt={banner.sub}
                  className='rounded-sm object-cover'
                  priority={banner.id === 1}
                  fill
                />
              </AspectRatio>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Banner;
