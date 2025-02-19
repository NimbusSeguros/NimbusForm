import { dataImg } from '../data/dataImagenes';
export const ImgCompanias = () => {
    return (
        <div className="">
        <h2 className="text-[#0051FF] text-[17px] font-bold text-2xl text-left ml-8 mt-10 mb-10">
        Trabajamos con
        </h2>
        <div>
        
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-2
        ">
            {dataImg.map((resp) => {
        return(
            <img key={resp.id} src={resp.foto} 
             className="object-cover w-full h-full grayscale hover:grayscale-0 transition duration-300 
             
             " />
           )
        })}
        </div>
        </div>
        </div>
          )
}