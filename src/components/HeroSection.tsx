export default function HeroSection() {

 const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const contactSection = document.getElementById("contacto")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }


    return (
      <div
      className="min-h-[400px] text-left w-full relative px-2 py-10 md:py-20"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dgx3mbzfr/image/upload/v1738089633/Fondo_gris_v3byuq.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-[url('https://res.cloudinary.com/dewcgbpvp/image/upload/v1740668698/fondo_gris_cel_vlklrv.svg')] 2xl:bg-[url('https://res.cloudinary.com/dgx3mbzfr/image/upload/v1738089633/Fondo_gris_v3byuq.png')]"
      />
      <div className="relative z-10 max-w-8x1 mx-auto space-y-10 ml-5">
        <h2 className="text-[#5E5E5E] text-[17px] leading-relaxed font-open-sans 2xl:w-[60vw] w-[87vw] font-normal"> 
          Tenemos el mejor equipo humano para brindarte un apoyo constante y personalizado, para que puedas expandir tu
          cartera de clientes con las mejores opciones del mercado.
        </h2>
    
        <div className="space-y-10">
          <h3 className="text-[#0000FF] font-bold ">Crecemos con vos</h3>
          <a href="#contacto" onClick={handleScrollToContact} className="cursor-pointer">
            <button className="cursor-pointer bg-[#0000FF] hover:bg-[#A2FF86] text-white hover:text-[#0000FF] rounded px-6 py-3 text-lg font-medium transition-colors font-open-sans">
              ¡Quiero formar parte!
            </button>
          </a>
        </div>
      </div>
    </div>
    )
  }
  
  