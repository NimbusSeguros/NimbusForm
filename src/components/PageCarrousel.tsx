import { TestimonialCarousel } from "../components/ui/testimonial-carousel"


export default function Home() {
    return (
      <main className="py-12">
        <div className="container mx-auto">
          <h2 className="text-[#0051FF] text-[17px] font-bold text-start ml-10 mb-10 2xl:-ml-30 md:-ml-2.5 lg:md:ml-10">
            Ellos nos eligieron y crecieron con Nimbus
          </h2>
          <TestimonialCarousel />
        </div>
      </main>
    )
  }
  
  