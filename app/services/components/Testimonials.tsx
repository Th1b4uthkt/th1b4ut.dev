"use client";

import { testimonials } from "../../../Data/Testimonials";
import { FaQuoteLeft } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import Image from 'next/image';

export function Testimonials() {
  return (
    <div className="mb-16">
      <div className="flex flex-col items-center space-y-4 text-center mb-8">
        <div className="inline-block industrial-border px-4 py-1 mb-2">
          <span className="underground-text text-sm">TÉMOIGNAGES</span>
        </div>
        
        <h2 className="text-3xl font-bold tracking-tighter underground-gradient-text">
          Ce que disent mes clients
        </h2>
        
        <p className="max-w-[700px] text-muted-foreground md:text-lg">
          Des retours d&apos;expérience sur nos collaborations
        </p>
        
        <div className="flex items-center gap-1 mt-1">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-secondary h-4 w-4 md:h-5 md:w-5">★</span>
          ))}
          <span className="text-xs md:text-sm text-muted-foreground ml-2 font-mono">5.0 / 5 en moyenne</span>
        </div>
      </div>

      <div className="mt-6 md:mt-8 w-full mx-auto overflow-hidden">
        {/* Horizontal Marquee for testimonials - fully responsive */}
        <Marquee
          speed={30}
          pauseOnHover={true}
          gradient={true}
          gradientColor={"#000000"}
          gradientWidth={60}
          className="overflow-hidden"
        >
          <div className="flex gap-4 py-2">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="mx-2 w-[280px] sm:w-[320px] md:w-[350px] lg:w-[380px]">
                <div className="h-full underground-card p-4 md:p-5 vhs-effect">
                  <div className="mb-2 flex justify-between items-start">
                    <div className="industrial-border h-7 w-7 md:h-8 md:w-8 flex items-center justify-center">
                      <FaQuoteLeft className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="h-3 w-3 md:h-4 md:w-4 text-secondary">★</span>
                      ))}
                    </div>
                  </div>
                  
                  <p className="flex-grow text-muted-foreground mb-3 italic text-xs sm:text-sm md:text-base relative line-clamp-4 font-mono">
                    <span className="text-xl font-serif text-primary opacity-20 absolute -left-1 -top-3">&quot;</span>
                    {testimonial.text}
                    <span className="text-xl font-serif text-primary opacity-20 absolute -right-1 bottom-0">&quot;</span>
                  </p>
                  
                  <div className="flex items-center pt-2 border-t border-primary/10">
                    <div className="h-8 w-8 md:h-10 md:w-10 industrial-border mr-3 overflow-hidden relative">
                      {testimonial.image ? (
                        <Image 
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                        />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center text-primary font-mono">
                          {testimonial.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="underground-text text-xs sm:text-sm md:text-base">{testimonial.name}</h4>
                      <p className="text-xs md:text-sm text-muted-foreground font-mono">
                        {testimonial.role}, <span className="text-secondary">{testimonial.company}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
      
      {/* CTA au milieu des témoignages */}
      <div className="mt-10 md:mt-12 p-6 underground-card text-center relative">
        <div className="absolute inset-x-0 h-px -top-5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <p className="underground-text mb-4">
          Rejoignez nos clients satisfaits et transformez votre projet en réalité
        </p>
        <a 
          href="/contact" 
          className="underground-button px-6 py-2 rounded-sm inline-flex items-center justify-center"
        >
          <span className="uppercase tracking-wider text-sm">Discuter de votre projet</span>
        </a>
        <p className="text-muted-foreground text-xs md:text-sm max-w-md mx-auto mt-4 font-mono">
          Découvrez comment mes <span className="text-primary">solutions personnalisées</span> ont aidé des entreprises à atteindre leurs objectifs.
        </p>
      </div>
    </div>
  );
} 