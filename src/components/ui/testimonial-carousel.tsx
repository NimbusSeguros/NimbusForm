"use client"

import { useState } from "react"
import { TestimonialCard } from "./testimonial-card"
import { cn } from "../lib/utils"
import { testimonials } from "../../data/dataTestimonial"



  export function TestimonialCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0)
    
    // Calculamos el número total de slides basado en el viewport
    const slidesPerView = {
      mobile: 1,    // móvil: 1 card
      tablet: 2,    // tablet: 2 cards
      desktop: 3,   // desktop: 3 cards
    }
    
    // Función para obtener el número de slides según el tamaño de pantalla
    const getVisibleSlides = () => {
      if (typeof window === 'undefined') return slidesPerView.desktop
      if (window.innerWidth < 768) return slidesPerView.mobile
      if (window.innerWidth < 1024) return slidesPerView.tablet
      return slidesPerView.desktop
    }
  
    const totalSlides = Math.ceil(testimonials.length / getVisibleSlides())
  
    return (
      <section className="w-full">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:-px-20 lg:px-8">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] px-3"
                >
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
  
            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 gap-3">
              {[...Array(totalSlides)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={cn(
                    "w-2.5 h-2.5 cursor-pointer transition-colors rounded-full",
                    currentSlide === index ? "bg-[#0000FF]" : "bg-[#D9D9D9]"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }