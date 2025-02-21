"use client"

import type React from "react"
import { useState, useRef, useEffect, useCallback } from "react"
import { TestimonialCard } from "./testimonial-card"
import { cn } from "../lib/utils"
import { testimonials } from "../../data/dataTestimonial"

export function TestimonialCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const getVisibleSlides = useCallback(() => {
    if (typeof window === "undefined") return 3
    if (window.innerWidth < 768) return 1
    return 3
  }, [])

  const totalSlides = Math.ceil(testimonials.length / getVisibleSlides())

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0]
    const startX = touch.clientX
    const currentX = carouselRef.current?.scrollLeft || 0

    const handleTouchMove = (e: TouchEvent) => {
      if (!carouselRef.current) return
      const touch = e.touches[0]
      const diff = startX - touch.clientX
      carouselRef.current.scrollLeft = currentX + diff
    }

    const handleTouchEnd = () => {
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("touchend", handleTouchEnd)
      snapToNearestSlide()
    }

    window.addEventListener("touchmove", handleTouchMove)
    window.addEventListener("touchend", handleTouchEnd)
  }

  const snapToNearestSlide = useCallback(() => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.offsetWidth / getVisibleSlides()
      const nearestSlide = Math.round(carouselRef.current.scrollLeft / slideWidth)
      setCurrentSlide(nearestSlide)
      carouselRef.current.scrollTo({
        left: nearestSlide * slideWidth,
        behavior: "smooth",
      })
    }
  }, [getVisibleSlides])

  useEffect(() => {
    const handleResize = () => {
      if (carouselRef.current) {
        const slideWidth = carouselRef.current.offsetWidth / getVisibleSlides()
        carouselRef.current.scrollLeft = currentSlide * slideWidth
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [currentSlide, getVisibleSlides])

  const goToSlide = (index: number) => {
    const newSlide = index * getVisibleSlides()
    setCurrentSlide(newSlide)
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.offsetWidth / getVisibleSlides()
      carouselRef.current.scrollTo({
        left: newSlide * slideWidth,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="w-full">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:-px-20 lg:px-8">
        <div className="relative overflow-hidden pb-5" ref={carouselRef} onTouchStart={handleTouchStart}>
          <div
            className="flex"
            style={{
              width: `${(100 * testimonials.length) / getVisibleSlides()}%`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={cn(
                  "px-3",
                  getVisibleSlides() === 1 ? "w-full" : "w-1/3",
                )}
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 gap-3  ">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-2.5 h-2.5 cursor-pointer transition-colors rounded-full",
                Math.floor(currentSlide / getVisibleSlides()) === index ? "bg-[#0000FF]" : "bg-[#D9D9D9]",
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

