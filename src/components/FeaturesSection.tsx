"use client"

import { useState } from "react"

export default function FeaturesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const cards = [
    {
      title: "Confianza",
      text: "Acuerdos comerciales con compañías líderes del mercado.",
      img: "https://res.cloudinary.com/dgx3mbzfr/image/upload/v1738089633/Icono_confianza_fckbog.png",
    },
    {
      title: "Acompañamiento",
      text: "Un equipo dedicado para apoyarte en la gestión diaria de tu actividad.",
      img: "https://res.cloudinary.com/dgx3mbzfr/image/upload/v1738089637/Icono_acompañamiento_jzewwa.png",
    },
    {
      title: "Crecimiento",
      text: "Acceso a capacitaciones, eventos exclusivos y herramientas digitales para hacer crecer tu negocio.",
      img: "https://res.cloudinary.com/dgx3mbzfr/image/upload/v1738089633/Icono_crecimiento_wupmmo.png",
    },
  ]

  return (
    <div className="w-full">
      {/* First Section */}
      <div className="bg-white py-8 border-b border-blue-600">
        <div className="mx-8">
          <h2 className=" text-xl text-[#0051FF] text-[17px] font-bold mb-4">Una red diseñada para tu éxito.</h2>
          <p className="text-gray-600 leading-relaxed">
            Somos tu red de asesores en el sector asegurador, transformando desafíos en oportunidades para tu
            crecimiento profesional. Con trayectoria comprobada, aportamos conocimiento profundo del mercado,
            experiencia en todas las ramas del seguro y un enfoque centrado en las mejores prácticas comerciales para
            impulsar tu trabajo.
          </p>
        </div>
      </div>

      {/* Second Section */}
      <div className="bg-[#0000FF] py-8">
        <div className="mx-8">
          <h3 className="text-white text-xl font-medium mb-8">Por qué más de 600 PAS eligen trabajar con Nimbus.</h3>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="group perspective-[1000px]"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`rounded-lg p-6 flex flex-col items-center justify-center text-center h-64 transition-all duration-500 transform-style-3d ${
                    hoveredCard === index ? "bg-[#F2F2F2] [transform:rotateY(180deg)]" : "bg-white"
                  }`}
                >
                  <div
                    className={`transition-transform duration-500 ${
                      hoveredCard === index ? "[transform:rotateY(180deg)]" : ""
                    }`}
                  >
                    <div className="w-20 h-20 mb-4 mx-auto flex items-center justify-center">
                      <img
                        src={card.img || "/placeholder.svg"}
                        alt={`Ícono de ${card.title}`}
                        className="w-16 h-16 object-contain"
                      />
                    </div>
                    <h4 className="text-[#0000FF] text-lg font-medium mb-2">{card.title}</h4>
                    <p className="text-[#5E5E5E] text-sm">{card.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

