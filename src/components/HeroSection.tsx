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
        className="min-h-[400px] text-left w-full relative px-2 py-2 md:py-16"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dgx3mbzfr/image/upload/v1738089633/Fondo_gris_v3byuq.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-8x1 mx-auto space-y-8">
          <h2 className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            Tenemos el mejor equipo humano para brindarte un apoyo constante y personalizado, para que puedas expandir tu
            cartera de clientes con las mejores opciones del mercado.
          </h2>
  
          <div className="space-y-6">
            <h3 className="text-blue-600 font-semibold text-2xl">Crecemos con vos</h3>
            <a href="#contacto" 
            onClick={handleScrollToContact}
            className="cursor-pointer">
            <button  className=" cursor-pointer bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-3 text-lg font-medium transition-colors">
              ¡Quiero formar parte!
            </button>
            </a>
          </div>
        </div>
      </div>
    )
  }
  
  