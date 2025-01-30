"use client"

import { useState } from "react"
import { TestimonialCard } from "./testimonial-card"
import { cn } from "../lib/utils"

const testimonials = [
    {
      name: "Carina P.",
      quote: "Gracias a Nimbus, mi negocio creció más del 50%. Su equipo está siempre a disposición para ayudarme a resolver mis dudas y avanzar.",
    },
    {
      name: "Marcos R.",
      quote: "Lo que más valoro de Nimbus es el acompañamiento constante. Siempre hay alguien para apoyarte y guiarte",
    },
    {
      name: "Claudia B.",
      quote: "Ver",
    },
    {
      name: "Juan D.",
      quote: "Excelente servicio y atención personalizada. Recomiendo ampliamente.",
    },
    {
      name: "María L.",
      quote: "La plataforma es muy intuitiva y fácil de usar. Me ha ayudado mucho.",
    },
    {
      name: "Roberto S.",
      quote: "El soporte técnico es excepcional. Siempre responden rápido.",
    },
  ]
  
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
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
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
                    "w-7 h-2 transition-colors",
                    currentSlide === index ? "bg-blue-600" : "bg-gray-200 rounded-full"
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