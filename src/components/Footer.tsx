export default function Footer() {
  return (
    <footer className="w-full bg-white font-open-sans">
      <div className="container mx-auto 2xl:px-0 px-8 py-12">
        {/* Logo Section - Left aligned on mobile */}
        <div className="flex justify-start mb-12 -ml-5">
          <a href="https://www.nimbusseguros.com" target="_blank" rel="noreferrer">
            <img
              src="https://res.cloudinary.com/dgx3mbzfr/image/upload/v1738162992/Logo_azul_sinbajada_bhygiq.png"
              alt="Nimbus Logo"
              className="h-20 w-auto"
            />
          </a>
        </div>

        {/* Three Column Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Social Media Links - Left aligned on mobile */}
          <div className="text-left flex flex-col items-start">
            <h3 className="text-lg font-semibold mb-4 text-[#5E5E5E] font-bold font-open-sans">Seguinos:</h3>
            <div className="flex justify-start gap-4">
              <a
                href="https://www.facebook.com/NimbusBroker/
              "
                className="hover:opacity-80"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dgx3mbzfr/image/upload/v1738089633/Icono_facebook_xz35lv.png"
                  alt="Facebook"
                  className="w-10 h-10"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/nimbus-seguros/"
                className="hover:opacity-80"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dgx3mbzfr/image/upload/v1738089633/Icono_linkedin_bzjhru.png"
                  alt="LinkedIn"
                  className="w-10 h-10"
                />
              </a>
              <a
                href="https://www.instagram.com/nimbusseguros/
              "
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-80"
              >
                <img
                  src="https://res.cloudinary.com/dgx3mbzfr/image/upload/v1738089633/Icono_instagram_ivd4fd.png"
                  alt="Instagram"
                  className="w-10 h-10"
                />
              </a>
            </div>
          </div>

          {/* Contact Links - Left aligned on mobile */}
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-4 text-[#5E5E5E] font-bold font-open-sans">Contactanos</h3>
            <div className="flex justify-start gap-4">
              <a href="https://wa.me/5491158031184" target="_blank" rel="noreferrer" className="hover:opacity-80">
                <img
                  src="https://res.cloudinary.com/dgx3mbzfr/image/upload/v1738089636/Icono_Whatsapp_xzlduf.png"
                  alt="WhatsApp"
                  className="w-10 h-10"
                />
              </a>
              <a href="mailto:marketing@nimbusseguros.com" className="hover:opacity-80">
                <img
                  src="https://res.cloudinary.com/dgx3mbzfr/image/upload/v1738089635/Icono_mail_t4rxcu.png"
                  alt="Email"
                  className="w-10 h-10"
                />
              </a>
            </div>
          </div>

          {/* Links Section - Left aligned on mobile */}
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-4 text-[#5E5E5E] font-bold">Links:</h3>
            <nav className="flex flex-col gap-2">
              <a href="https://nimbusseguros.com/novedades/" className="text-[#5E5E5E] font-medium font-open-sans">
                → Institucional
              </a>
              <a href="#" className="text-[#5E5E5E] font-medium font-open-sans">
                → Servicios PAS
              </a>
              <a href="#" className="text-[#5E5E5E] font-medium font-open-sans">
                → Alta PAS
              </a>
              <a href="https://nimbusseguros.com/capacitaciones/" className="text-[#5E5E5E] font-medium font-open-sans">
                → Capacitación
              </a>
            </nav>
          </div>
        </div>

        {/* SSN Information */}
        <div className="pt-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 2xl:gap-15 text-gray-600 text-sm">
              <span className="text-left font-open-sans text-[#8D8B8E] font-normal">
                N° de inscripción SSN
                <br />
                1647
              </span>
              <div className="hidden md:block w-px h-12 bg-gray-300"></div>
              <span className="text-left font-open-sans text-[#8D8B8E] font-normal">
                Departamento de
                <br />
                Orientación y Asistencia
                <br />
                al Asegurado
              </span>
              <div className="hidden md:block w-px h-12 bg-gray-300"></div>
              <a className="text-blue-600 font-open-sans">0800-666-8400</a>
              <div className="hidden md:block w-px h-12 bg-gray-300"></div>
              <a
                href="https://www.argentina.gob.ar/ssn"
                target="_blank"
                className="text-blue-600 hover:underline font-open-sans"
                rel="noreferrer"
              >
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
            <div className="bg-[#D9D9D966] p-6 rounded-lg text-sm text-[#8D8B8E]">
              <p className="mb-4 font-open-sans text-left">
                La entidad aseguradora dispone de un{" "}
                <span className="font-bold font-open-sans">Servicio de Atención al Asegurado</span> que atenderá las
                consultas y reclamos que presenten los tomadores de seguros, asegurados, beneficiarios y/o
                derechohabientes.
              </p>
              <p className="text-left">
                En caso de que existiera un reclamo ante la entidad aseguradora y que el mismo no haya sido resuelto o
                haya sido desestimado, total o parcialmente, o que haya sido denegada su admisión, podrá comunicarse con
                la Superintendencia de Seguros de la Nación por teléfono al 0800-666-8400, correo electrónico a{" "}
                <a href="mailto:consultas@ssn.gob.ar" className="font-open-sans font-bold">
                  consultas@ssn.gob.ar
                </a>{" "}
                o formulario disponible en la página{" "}
                <a href="https://argentina.gob.ar/ssn" className="font-bold font-open-sans">
                  argentina.gob.ar/ssn
                </a>
              </p>
            </div>

            {/* Right Column */}
            <div className="text-sm text-[#8D8B8E]">
              <p className="mb-4 font-open-sans font-normal text-left">
                El Servicio de Atención al Asegurado está integrado por:
              </p>
              <div className="space-y-4">
                <div>
                  <p className="mb-1 font-open-sans text-left">
                    <span className="font-open-sans">Responsable:</span> <strong>Felipe Ricardo Luis Perdomo</strong>
                  </p>
                  <p className="text-left">
                    <span className="font-open-sans">Teléfono:</span> <strong>+54 9 3442 57-1384</strong>
                  </p>
                </div>
                <div>
                  <p className="mb-1 font-open-sans text-left">
                    <span className="font-open-sans">Suplente:</span> <strong>Guillermo Jose Joannas</strong>
                  </p>
                  <p className="text-left">
                    <span className="font-open-sans">Teléfono:</span> <strong>+54 9 3442 46-1715</strong>
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

