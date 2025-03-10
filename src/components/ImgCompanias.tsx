import { dataImg } from "../data/dataImagenes"

export const ImgCompanias = () => {
  return (
    <div>
      <h2 className="text-[#5E5E5E] text-[17px] font-bold text-2xl text-left ml-4 mt-10 mb-10 2xl:ml-8 lg:ml-8">
        Trabajá con las compañías líderes del mercado
      </h2>
      <div>
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-2">
          {dataImg.map((resp) => {
            return (
              <img
                key={resp.id}
                src={resp.foto || "/placeholder.svg"}
                alt={`Logo compañía ${resp.id}`}
                className="object-cover w-full h-full md:grayscale md:hover:grayscale-0 transition duration-300"
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

