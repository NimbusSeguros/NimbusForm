export default function UniqueFeatures() {
    return (
      <div className="w-full bg-gray-50 py-8">
        <div className="mx-8">
          <h2 className="text-blue-600 text-2xl font-medium mb-8">¿Qué hace único a Nimbus?</h2>
  
          <div className="grid grid-cols-1 gap-6">
            {/* Asesoramiento Card */}
            <div className="bg-white rounded-lg p-6 flex items-center gap-6 shadow-md border border-gray-100">
              <div className="w-16 h-16 flex-shrink-0">
                <img
                  src="https://res.cloudinary.com/dgx3mbzfr/image/upload/v1738089637/Icono_asesoramiento_kge2z7.png"
                  alt="Ícono de asesoramiento"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-blue-600 text-xl font-medium mb-2">Asesoramiento</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ponemos a tu disposición nuestra experiencia en desarrollo de carteras y administración de riesgos para
                  ayudarte a gestionar tus clientes de manera integral y fomentar un crecimiento sostenible.
                </p>
              </div>
            </div>
  
            {/* Capacitación Card */}
            <div className="bg-white rounded-lg p-6 flex items-center gap-6 shadow-md border border-gray-100">
              <div className="w-16 h-16 flex-shrink-0">
                <img
                  src="https://res.cloudinary.com/dgx3mbzfr/image/upload/v1738089637/Icono_capacitacion_qfc9t4.png"
                  alt="Ícono de capacitación"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-blue-600 text-xl font-medium mb-2">Capacitación continua</h3>
                <p className="text-gray-600 leading-relaxed">
                  Nuestro equipo de formación te acerca las últimas novedades del mercado. Desarrollamos cursos y
                  capacitaciones actualizadas en todas las ramas del seguro para que estés siempre un paso adelante.
                </p>
              </div>
            </div>
  
            {/* Tecnología Card */}
            <div className="bg-white rounded-lg p-6 flex items-center gap-6 shadow-md border border-gray-100">
              <div className="w-16 h-16 flex-shrink-0">
                <img
                  src="https://res.cloudinary.com/dgx3mbzfr/image/upload/v1738089633/Icono_tecnologia_qtee8u.png"
                  alt="Ícono de tecnología"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-blue-600 text-xl font-medium mb-2">Tecnología y Marketing Estratégico</h3>
                <p className="text-gray-600 leading-relaxed">
                  Impulsamos tu negocio con inteligencia artificial y herramientas innovadoras que automatizan tu gestión
                  y optimizan tu tiempo. Diseñamos estrategias de marketing que fortalecen la relación con tus clientes
                  actuales y amplían tu alcance hacia nuevos mercados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  