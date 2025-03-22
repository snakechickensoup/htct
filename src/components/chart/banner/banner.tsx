'use client';

import Link from 'next/link';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import { useEffect, useState } from 'react';

import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import BannerDots from './banner-dots';
import BannerShadow from './banner-shadow';
import { BANNERS } from '@/lib/constants';

const Banner = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrentSlide(api.selectedScrollSnap());
    api.on('select', () => setCurrentSlide(api.selectedScrollSnap()));
  }, [api]);

  return (
    <Carousel
      className='w-full py-3'
      plugins={[
        Autoplay({
          delay: 3000,
          stopOnInteraction: false
        })
      ]}
      opts={{
        loop: true
      }}
      setApi={setApi}
      suppressHydrationWarning
    >
      <CarouselContent className='-ml-2.5'>
        {BANNERS.map((banner) => (
          <CarouselItem key={banner.id} className='basis-11/12 pl-2.5'>
            <Link href={banner.link} target='_blank'>
              <AspectRatio ratio={16 / 8} className='relative'>
                <Image
                  src={banner.image}
                  alt={banner.sub}
                  className='rounded-sm object-cover'
                  sizes='100%'
                  priority
                  fill
                />
                <BannerShadow title={banner.title} description={banner.sub} />
              </AspectRatio>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <BannerDots length={BANNERS.length} currentSlide={currentSlide} onSelect={api?.scrollTo} />
    </Carousel>
  );
};

export default Banner;
