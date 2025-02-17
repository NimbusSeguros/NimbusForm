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
          <h2 className="text-blue-600 text-xl font-medium mb-4">Una red diseñada para tu éxito.</h2>
          <p className="text-gray-600 leading-relaxed">
            Somos tu red de asesores en el sector asegurador, transformando desafíos en oportunidades para tu
            crecimiento profesional. Con trayectoria comprobada, aportamos conocimiento profundo del mercado,
            experiencia en todas las ramas del seguro y un enfoque centrado en las mejores prácticas comerciales para
            impulsar tu trabajo.
          </p>
        </div>
      </div>

      {/* Second Section */}
      <div className="bg-blue-600 py-8">
        <div className="mx-8">
          <h3 className="text-white text-xl font-medium mb-8">Por qué más de 600 PAS eligen trabajar con Nimbus.</h3>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="perspective-1000"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`relative w-full h-64 transition-all duration-500 transform-style-3d ${
                    hoveredCard === index ? "rotate-y-180" : ""
                  }`}
                >
                  {/* Front Side */}
                  <div className="absolute inset-0 bg-white rounded-lg p-6 flex flex-col items-center justify-center text-center transition-all duration-300 backface-hidden">
                    <div className="w-16 h-16 mb-4">
                      <img
                        src={card.img || "/placeholder.svg"}
                        alt={`Ícono de ${card.title}`}
                        className="w-16 h-16 object-contain"
                      />
                    </div>
                    <h4 className="text-blue-600 text-lg font-medium mb-2">{card.title}</h4>
                    <p className="text-gray-600">{card.text}</p>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 bg-gray-200 rounded-lg p-6 flex flex-col items-center justify-center text-center transition-all duration-300 rotate-y-180 backface-hidden">
                    <h4 className="text-blue-600 text-lg font-medium mb-2">{card.title}</h4>
                    <p className="text-gray-600">{card.text}</p>
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