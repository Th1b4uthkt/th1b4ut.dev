"use client";

import { testimonials } from "../../../Data/Testimonials";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import Image from 'next/image';

export function Testimonials() {
  return (
    <div className="mb-16">
      <div className="flex flex-col items-center space-y-4 text-center mb-8">
        <div className="inline-flex items-center justify-center rounded-full bg-muted p-1">
          <span className="rounded-full px-4 py-1 text-sm font-medium bg-primary/10 text-primary animate-shimmer bg-[length:200%_100%] bg-[linear-gradient(110deg,transparent_25%,rgba(var(--primary-rgb),0.1)_50%,transparent_75%)]">
            Ce que disent mes clients
          </span>
        </div>
        
        <h2 className="text-3xl font-bold tracking-tighter">Témoignages</h2>
        <p className="max-w-[700px] text-muted-foreground md:text-lg">
          Des retours d&apos;expérience sur nos collaborations
        </p>
        
        <div className="flex items-center gap-1 mt-1">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-yellow-400 h-4 w-4 md:h-5 md:w-5" />
          ))}
          <span className="text-xs md:text-sm text-muted-foreground ml-2">5.0 / 5 en moyenne</span>
        </div>
      </div>

      <div className="mt-6 md:mt-8 w-full mx-auto overflow-hidden">
        {/* Horizontal Marquee for testimonials - fully responsive */}
        <Marquee
          speed={30}
          pauseOnHover={true}
          gradient={true}
          gradientColor={"#ffffff"}
          gradientWidth={60}
          className="overflow-hidden"
        >
          <div className="flex gap-4 py-2">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="mx-2 w-[280px] sm:w-[320px] md:w-[350px] lg:w-[380px]">
                <div className="h-full rounded-xl border bg-background/80 backdrop-blur-sm p-4 md:p-5 shadow-md hover:shadow-glow transition-all duration-300">
                  <div className="mb-2 flex justify-between items-start">
                    <div className="h-7 w-7 md:h-8 md:w-8 rounded-full flex items-center justify-center bg-primary/10 text-primary">
                      <FaQuoteLeft className="h-3 w-3 md:h-4 md:w-4" />
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="h-3 w-3 md:h-4 md:w-4 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="flex-grow text-muted-foreground mb-3 italic text-xs sm:text-sm md:text-base relative line-clamp-4">
                    <span className="text-xl font-serif text-primary opacity-20 absolute -left-1 -top-3">&quot;</span>
                    {testimonial.text}
                    <span className="text-xl font-serif text-primary opacity-20 absolute -right-1 bottom-0">&quot;</span>
                  </p>
                  
                  <div className="flex items-center pt-2 border-t border-muted/30">
                    <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-muted mr-3 overflow-hidden shadow-sm relative group">
                      <div className="absolute inset-0 bg-gradient-conic from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity animate-rotate-slow"></div>
                      {testimonial.image ? (
                        <Image 
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="rounded-full"
                        />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center bg-primary/10 text-primary font-medium">
                          {testimonial.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-semibold text-xs sm:text-sm md:text-base">{testimonial.name}</h4>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        {testimonial.role}, <span className="text-accent">{testimonial.company}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
      
      {/* Ajout d'un CTA au milieu des témoignages */}
      <div className="mt-10 md:mt-12 p-6 bg-muted/30 rounded-lg text-center relative">
        <div className="absolute inset-x-0 h-px -top-5 bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
        <p className="font-medium mb-4">
          Rejoignez nos clients satisfaits et transformez votre projet en réalité
        </p>
        <a 
          href="/contact" 
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          Discuter de votre projet
        </a>
        <p className="text-muted-foreground text-xs md:text-sm max-w-md mx-auto mt-4">
          Découvrez comment mes <span className="text-primary">solutions personnalisées</span> ont aidé des entreprises à atteindre leurs objectifs et à développer leur activité.
        </p>
      </div>
    </div>
  );
} 