export default function FeaturesSection() {
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
              {/* Trust Card */}
              <div className="bg-white hover:bg-blue-600 rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300 group cursor-pointer">
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <img
                    src="https://res.cloudinary.com/dgx3mbzfr/image/upload/v1738089633/Icono_confianza_fckbog.png"
                    alt="Ícono de confianza"
                    className="w-16 h-16 object-contain block group-hover:hidden"
                  />
                  <img
                    src="https://res.cloudinary.com/dgx3mbzfr/image/upload/v1738089633/Icono_opiniones_rvukd1.png"
                    alt="Ícono de confianza hover"
                    className="w-16 h-16 object-contain hidden group-hover:block"
                  />
                </div>
                <h4 className="text-blue-600 group-hover:text-white text-lg font-medium mb-2">Confianza</h4>
                <p className="text-gray-600 group-hover:text-white">
                  Acuerdos comerciales con compañías líderes del mercado.
                </p>
              </div>
  
              {/* Support Card */}
              <div className="bg-white hover:bg-blue-600 rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300 group cursor-pointer">
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <img
                    src="https://res.cloudinary.com/dgx3mbzfr/image/upload/v1738089637/Icono_acompañamiento_jzewwa.png"
                    alt="Ícono de acompañamiento"
                    className="w-16 h-16 object-contain block group-hover:hidden"
                  />
                  <img
                    src="https://res.cloudinary.com/dgx3mbzfr/image/upload/v1738089633/Icono_opiniones_rvukd1.png"
                    alt="Ícono de acompañamiento hover"
                    className="w-16 h-16 object-contain hidden group-hover:block"
                  />
                </div>
                <h4 className="text-blue-600 group-hover:text-white text-lg font-medium mb-2">Acompañamiento</h4>
                <p className="text-gray-600 group-hover:text-white">
                  Un equipo dedicado para apoyarte en la gestión diaria de tu actividad.
                </p>
              </div>
  
              {/* Growth Card */}
              <div className="bg-white hover:bg-blue-600 rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300 group cursor-pointer">
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <img
                    src="https://res.cloudinary.com/dgx3mbzfr/image/upload/v1738089633/Icono_crecimiento_wupmmo.png"
                    alt="Ícono de crecimiento"
                    className="w-16 h-16 object-contain block group-hover:hidden"
                  />
                  <img
                    src="https://res.cloudinary.com/dgx3mbzfr/image/upload/v1738089633/Icono_opiniones_rvukd1.png"
                    alt="Ícono de crecimiento hover"
                    className="w-16 h-16 object-contain hidden group-hover:block"
                  />
                </div>
                <h4 className="text-blue-600 group-hover:text-white text-lg font-medium mb-2">Crecimiento</h4>
                <p className="text-gray-600 group-hover:text-white">
                  Acceso a capacitaciones, eventos exclusivos y herramientas digitales para hacer crecer tu negocio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }