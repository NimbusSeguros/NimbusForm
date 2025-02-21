export default function Footer() {
  return (
    <footer className="w-full bg-white font-open-sans">
      <div className="container mx-auto px-8 py-12">
        {/* Logo Section */}
        <div className="flex 2xl:justify-start lg:justify-start mb-12 2xl:-ml-5 sm:justify-center md:justify-start md:-ml-7">
          <img
            src="https://res.cloudinary.com/dgx3mbzfr/image/upload/v1738162992/Logo_azul_sinbajada_bhygiq.png"
            alt="Nimbus Logo"
            className="h-20 w-auto"
          />
        </div>

        {/* Three Column Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Social Media Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Seguinos:</h3>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="#" className="hover:opacity-80">
                <img
                  src="https://res.cloudinary.com/dgx3mbzfr/image/upload/v1738089633/Icono_facebook_xz35lv.png"
                  alt="Facebook"
                  className="w-10 h-10"
                />
              </a>
              <a href="#" className="hover:opacity-80">
                <img
                  src="https://res.cloudinary.com/dgx3mbzfr/image/upload/v1738089633/Icono_linkedin_bzjhru.png"
                  alt="LinkedIn"
                  className="w-10 h-10"
                />
              </a>
              <a href="#" className="hover:opacity-80">
                <img
                  src="https://res.cloudinary.com/dgx3mbzfr/image/upload/v1738089633/Icono_instagram_ivd4fd.png"
                  alt="Instagram"
                  className="w-10 h-10"
                />
              </a>
            </div>
          </div>

          {/* Contact Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Contactanos</h3>
            <div className="flex justify-center gap-4">
              <a href="#" className="hover:opacity-80">
                <img
                  src="https://res.cloudinary.com/dgx3mbzfr/image/upload/v1738089636/Icono_Whatsapp_xzlduf.png"
                  alt="WhatsApp"
                  className="w-10 h-10"
                />
              </a>
              <a href="#" className="hover:opacity-80">
                <img
                  src="https://res.cloudinary.com/dgx3mbzfr/image/upload/v1738089635/Icono_mail_t4rxcu.png"
                  alt="Email"
                  className="w-10 h-10"
                />
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Links:</h3>
            <nav className="flex flex-col gap-2">
              <a href="#" className="hover:text-blue-600 text-gray-600">
                → Institucional
              </a>
              <a href="#" className="hover:text-blue-600 text-gray-600">
                → Servicios PAS
              </a>
              <a href="#" className="hover:text-blue-600 text-gray-600">
                → Alta PAS
              </a>
              <a href="#" className="hover:text-blue-600 text-gray-600">
                → Clientes
              </a>
            </nav>
          </div>
        </div>

        {/* SSN Information */}
        <div className="pt-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <div className="flex flex-col md:flex-row items-center gap-4 text-gray-600 text-sm">
              <span className="text-center">
                N° de inscripción SSN
                <br />
                1647
              </span>
              <div className="hidden md:block w-px h-12 bg-gray-300"></div>
              <span className="text-center">
                Departamento de
                <br />
                Orientación y Asistencia
                <br />
                al Asegurado
              </span>
              <div className="hidden md:block w-px h-12 bg-gray-300"></div>
              <a href="tel:0800-666-8400" className="text-blue-600 hover:underline">
                0800-666-8400
              </a>
              <div className="hidden md:block w-px h-12 bg-gray-300"></div>
              <a href="https://www.argentina.gob.ar/ssn" className="text-blue-600 hover:underline">
                www.argentina.gob.ar/ssn
              </a>
            </div>
            <img
              src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1722608965/SSN_afnmvf.png"
              alt="SSN Logo"
              className="h-10 md:h-5 w-auto mt-4 md:mt-0 md:ml-2"
            />
          </div>

          {/* Two Column Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column with gray background */}
            <div className="bg-gray-100 p-6 rounded-lg text-sm text-gray-600">
              <p className="mb-4">
                La entidad aseguradora dispone de un{" "}
                <span className="font-bold">Servicio de Atención al Asegurado</span> que atenderá las consultas y
                reclamos que presenten los tomadores de seguros, asegurados, beneficiarios y/o derechohabientes.
              </p>
              <p>
                En caso de que existiera un reclamo ante la entidad aseguradora y que el mismo no haya sido resuelto o
                haya sido desestimado, total o parcialmente, o que haya sido denegada su admisión, podrá comunicarse con
                la Superintendencia de Seguros de la Nación por teléfono al 0800-666-8400, correo electrónico a{" "}
                <a href="mailto:consultas@ssn.gob.ar" className="text-blue-600 hover:underline">
                  consultas@ssn.gob.ar
                </a>{" "}
                o formulario disponible en la página{" "}
                <a href="https://argentina.gob.ar/ssn" className="text-blue-600 hover:underline">
                  argentina.gob.ar/ssn
                </a>
              </p>
            </div>

            {/* Right Column */}
            <div className="text-sm text-gray-600">
              <p className="font-semibold mb-4">El Servicio de Atención al Asegurado está integrado por:</p>
              <div className="space-y-4">
                <div>
                  <p className="mb-1">
                    <span className="font-bold">Responsable:</span> Felipe Ricardo Luis Perdomo
                  </p>
                  <p>
                    <span className="font-bold">Teléfono:</span> +54 9 3442 57-1384
                  </p>
                </div>
                <div>
                  <p className="mb-1">
                    <span className="font-bold font-open-sans">Suplente:</span> Guillermo Jose Joannas
                  </p>
                  <p>
                    <span className="font-bold">Teléfono:</span> +54 9 3442 46-1715
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
