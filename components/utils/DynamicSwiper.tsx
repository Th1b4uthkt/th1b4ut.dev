"use client";

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// Interfaces
interface WhiteLabelApp {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  icon: React.ReactNode;
  color: string;
}

interface DynamicSwiperProps {
  items: WhiteLabelApp[];
}

export default function DynamicSwiper({ items }: DynamicSwiperProps) {
  const [isClient, setIsClient] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  // If not client side yet, show a placeholder
  if (!isClient) {
    return <div className="h-80 flex items-center justify-center">Chargement...</div>;
  }

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
      effect="coverflow"
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 1.5,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 2.5,
        },
        1280: {
          slidesPerView: 3,
        }
      }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      pagination={{ 
        clickable: true,
        dynamicBullets: true,
      }}
      autoplay={{ 
        delay: 5000, 
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      className="!pb-12"
    >
      {items.map((app, index) => (
        <SwiperSlide key={app.id} className="flex justify-center">
          <div className="w-full max-w-[380px] mx-auto">
            <AppCard app={app} priority={index < 2} />
          </div>
        </SwiperSlide>
      ))}

      {/* Navigation buttons avec style underground */}
      <div className="swiper-button-next !text-primary after:!text-2xl !right-2 md:!right-4 lg:!right-8 hover:!text-accent transition-colors"></div>
      <div className="swiper-button-prev !text-primary after:!text-2xl !left-2 md:!left-4 lg:!left-8 hover:!text-accent transition-colors"></div>
    </Swiper>
  );
}

function AppCard({ app, priority = false }: { app: WhiteLabelApp; priority?: boolean }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="underground-card rounded-sm hover-lift w-full h-full"
    >
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${app.color}`} />
      
      <div className="aspect-[4/3] overflow-hidden relative vhs-effect">
        <Image
          src={app.image}
          alt={app.title}
          width={600}
          height={450}
          quality={priority ? 85 : 75}
          loading={priority ? "eager" : "lazy"}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4">
          <div className="industrial-border px-3 py-1 inline-block">
            <span className="underground-text text-sm">{app.title}</span>
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="underground-text text-xl mb-2 group-hover:text-primary transition-colors">
          {app.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">
          {app.description}
        </p>
        
        <div className="space-y-2">
          <p className="text-sm font-medium terminal-underground">Fonctionnalités:</p>
          <ul className="space-y-1">
            {app.features.map((feature, idx) => (
              <li key={idx} className="text-xs text-muted-foreground flex items-start">
                <span className="text-primary mr-2">›</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-4 pt-4 border-t border-primary/10">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="underground-button text-xs w-full py-2 rounded-sm flex items-center justify-center gap-2"
          >
            <span>DÉCOUVRIR</span>
            <FaArrowRight className="h-3 w-3" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
} 