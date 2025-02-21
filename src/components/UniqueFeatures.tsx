"use client"

import { useState } from "react"

export default function UniqueFeatures() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const features = [
    {
      title: "Asesoramiento",
      description:
        "Ponemos a tu disposición nuestra experiencia en desarrollo de carteras y administración de riesgos para ayudarte a gestionar tus clientes de manera integral y fomentar un crecimiento sostenible.",
      icon: "https://res.cloudinary.com/dgx3mbzfr/image/upload/v1738089637/Icono_asesoramiento_kge2z7.png",
    },
    {
      title: "Capacitación continua",
      description:
        "Nuestro equipo de formación te acerca las últimas novedades del mercado. Desarrollamos cursos y capacitaciones actualizadas en todas las ramas del seguro para que estés siempre un paso adelante.",
      icon: "https://res.cloudinary.com/dgx3mbzfr/image/upload/v1738089637/Icono_capacitacion_qfc9t4.png",
    },
    {
      title: "Tecnología y Marketing Estratégico",
      description:
        "Impulsamos tu negocio con inteligencia artificial y herramientas innovadoras que automatizan tu gestión y optimizan tu tiempo. Diseñamos estrategias de marketing que fortalecen la relación con tus clientes actuales y amplían tu alcance hacia nuevos mercados.",
      icon: "https://res.cloudinary.com/dgx3mbzfr/image/upload/v1738089633/Icono_tecnologia_qtee8u.png",
    },
  ]

  return (
    <div className="w-full bg-gray-50 py-8">
      <div className="mx-8">
        <h2 className="text-[#0000FF] text-[17px] font-open-sans font-bold mb-8">¿Qué hace único a Nimbus?</h2>

        <div className="grid grid-cols-1 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`rounded-lg p-6 flex items-center gap-6 shadow-md border border-gray-100 transition-colors duration-300 ${
                hoveredCard === index ? "bg-gray-200" : "bg-white"
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="w-16 h-16 flex-shrink-0">
                <img
                  src={feature.icon || "/placeholder.svg"}
                  alt={`Ícono de ${feature.title}`}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#0000FF] text-xl font-medium mb-2">{feature.title}</h3>
                <p className="text-[#5E5E5E] leading-relaxed font-family-open-sans">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

