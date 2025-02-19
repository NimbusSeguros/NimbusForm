import { useEffect, useState } from "react"
import type { FC } from "react"

const Header: FC = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <header className="relative h-screen overflow-hidden bg-gradient-to-r from-[rgba(0,0,255,1)] to-[rgba(87,197,182,1)] lg:h-[100vh] xl:h-[100vh] 2xl:h-screen">
      <div className="@container max-w-full mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center h-full">
        <div className="max-w-2xl text-white z-10 text-left xl:mb-0 lg:-mb-20 2xl:mb-60 w-full lg:w-1/1 p-6 lg:p-8 lg:pl-[max(2rem,calc((100%-1800px)/2))]">
          <img
            src="https://res.cloudinary.com/dgx3mbzfr/image/upload/v1738089633/Logotipo_Nimbus_rtjadc.png"
            alt="Nimbus Logo"
            className="w-32 md:w-48 mb-4 md:mb-8 lg:mx-0 lg:-mt-10 xl:-mt-35 2xl:-mt-10-0"
          />

          <h1 className="text-3xl sm:text-2xl md:text-4xl lg:text-4xl 2xl:text-5xl font-bold mb-4 md:mb-6 font-open-sans lg:mt-20 2xl:mt-20 whitespace-normal sm:mt-10 mt-15">
            El broker que los productores eligen
          </h1>

          <p className="text-base mt-5 md:text-lg leading-relaxed mb-6 md:mb-4 font-open-sans w-full max-w-[1200px] whitespace-normal text-xl:text-[17px]">
            Conectamos a Productores Asesores de Seguros con las mejores oportunidades del mercado. Crecemos juntos,
            impulsando tu negocio y maximizando tus resultados.
          </p>

          <a
            href="#"
            className="inline-block px-6 py-2 md:px-8 md:py-3 bg-[#98FF98] hover:bg-[#F2F2F2] text-[#0000FF] hover:text-[#0000FF] text-[12px]md:text-base font-semibold rounded transition-colors font-open-sans"
          >
            ¡Quiero formar parte!
          </a>

          <p className="text-xs md:text-sm mt-5 md:mt-8 font-open-sans">
            *Completá el formulario y conocé cómo podemos acompañarte para alcanzar tus metas.
          </p>
        </div>

        <div className="w-full lg:w-1/2 h-[calc(100vh-400px)] md:h-[calc(100vh-450px)] lg:h-full lg:absolute lg:right-0 lg:top-5 2xl:top-10">
          {isMobile ? (
            <img
              src="https://res.cloudinary.com/dgx3mbzfr/image/upload/t_nuevo header celular/v1738163687/Foto_header_cel_f0cj7p.jpg"
              alt="Mobile Background"
              className="w-full h-full object-contain absolute top-71.5"
            />
          ) : (
            <img
              src="https://res.cloudinary.com/dgx3mbzfr/image/upload/v1738089639/Foto_header_fndd5h.png"
              alt="Handshake"
              className="w-100vw h-100vh object-contain lg:absolute lg:right-0 lg:top-25 xl:top-22 lg:left-3"
            />
          )}
        </div>

        {/* Imagen del semicírculo en la esquina superior derecha */}
        <img
          src="https://res.cloudinary.com/dgx3mbzfr/image/upload/v1738089636/Circulo_verde_lv6dvx.png"
          alt="Semicírculo Verde"
          className="hidden lg:block absolute -top-25 -right-25 w-32 lg:w-40 xl:w-48 2xl:w-56"
        />
      </div>
    </header>
  )
}

export default Header