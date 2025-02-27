
import * as React from "react"
import { useState,useRef } from "react"
import emailjs from '@emailjs/browser';
import { db, collection, addDoc } from "../firebase/firebaseConfig"

const cn = (...classes: string[]) => classes.filter(Boolean).join(" ")


export default function ContactForm() {
  const form = useRef <HTMLFormElement>(null);

  interface dataForm  {
    nombreApellido?: string,
    email?: string,
    telefono?: string,
    provincia?: string,
    consulta?: string,
  }
  
  const dataform: dataForm = {
    nombreApellido: "",
    email: "",
    telefono: "",
    provincia: "",
    consulta: "",
  }

  const [formData, setFormData] = useState<dataForm>({
    ...dataform
  });



  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!form.current) {
      console.error("El formulario no está disponible");
      return;
    }
  
    try {
      // Guardar los datos en Firestore
      await addDoc(collection(db, "contactos"), {
        nombreApellido: formData.nombreApellido,
        email: formData.email,
        telefono: formData.telefono,
        provincia: formData.provincia,
        consulta: formData.consulta,
        fecha: new Date().toISOString(),
      });
  
      console.log("Datos guardados en Firebase");
  
      // Enviar email con EmailJS
      await emailjs.sendForm(
        "service_ssef2qd",
        "template_wfqsfxq",
        form.current,
        {
          publicKey: "712q0EHzd1qeNzBv3",
        }
      );
  
      console.log("Correo enviado con éxito");
  
      // Limpiar formulario
      setFormData({ ...dataform });
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  
  }

  
  return (
    <div
      id="contacto"
      className="2xl:min-h-[100vh] w-full bg-cover bg-center flex items-center justify-center p-4 md:min-h-[65vh]"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dgx3mbzfr/image/upload/v1738089633/Fondo_degrade_wse41g.png')`,
      }}
    >
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-2 p-6">
        {/* Left side - Image */}

        <div className="w-full md:w-1/2">
  <div className="relative w-full aspect-square md:aspect-auto md:h-[600px]">
    <div>
      <h1 className="text-xl text-white lg:text-[17px] 2xl:text-[17px] lg:-ml-10 font-bold mb-4 -ml-1.5 2xl:-ml-92 2xl:-mt-25">
        ¿Sos PAS y querés alcanzar mejores resultados?
      </h1>
      <p className="text-white lg:text-[17px] 2xl:text-[17px] text-lg -ml-1.5 lg:-ml-10 w-full whitespace-normal 2xl:-ml-92 2xl:mb-20">
        Estamos listos para acompañarte. Completá el formulario y empezá a formar parte de nuestra red.
      </p>
    </div>


            <img
              src="https://res.cloudinary.com/dgx3mbzfr/image/upload/v1738089646/Foto_equipo_cojyrv.png"
              alt="Equipo Nimbus"
              className="w-full h-auto object-contain -ml-12 mt-15 
                        2xl:-ml-105 2xl:w-[40vw] 2xl:max-w-none 2xl:h-auto lg:mt-10 lg:-ml-25 2xl:-mt-10"
            />
          </div>
        </div>

        {/* Right side - Form */}
        <div className="w-full md:w-1/2 space-y-6">
          <form ref={form} onSubmit={handleSubmit} className="space-y-7 mt-20">
            <Input
              name="nombreApellido"
              placeholder="Nombre y Apellido"
              value={formData.nombreApellido}
              onChange={handleChange}
            />

            <Input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                name="telefono"
                type="tel"
                placeholder="Teléfono"
                value={formData.telefono}
                onChange={handleChange}
              />

              <Select name="provincia" value={formData.provincia } onChange={handleChange}>
              <option  value="Seleccione">Seleccione</option>
                <option value="buenosaires">Buenos Aires</option>
                <option value="catamarca">Catamarca</option>
                <option value="chaco">Chaco</option>
                <option value="chubut">Chubut</option>
                <option value="cordoba">Córdoba</option>
                <option value="corrientes">Corrientes</option>
                <option value="entre_rios">Entre Ríos</option>
                <option value="formosa">Formosa</option>
                <option value="jujuy">Jujuy</option>
                <option value="lapampa">La Pampa</option>
                <option value="larioja">La Rioja</option>
                <option value="mendoza">Mendoza</option>
                <option value="misiones">Misiones</option>
                <option value="neuquen">Neuquén</option>
                <option value="rio_negro">Río Negro</option>
                <option value="salta">Salta</option>
                <option value="san_juan">San Juan</option>
                <option value="san_luis">San Luis</option>
                <option value="santacruz">Santa Cruz</option>
                <option value="santafe">Santa Fe</option>
                <option value="santiago_estero">Santiago del Estero</option>
                <option value="tierra_fuego">Tierra del Fuego</option>
                <option value="tucuman">Tucumán</option>
              </Select>
            </div>

            <Textarea
              name="consulta"
              placeholder="Escriba su mensaje"
              value={formData.consulta}
              onChange={handleChange}
              maxLength={250}
            />

            <div className="flex justify-end ">
              <Button  type="submit">Enviar</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

// Input component
const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = "Input"

// Textarea component
const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className = "", ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Textarea.displayName = "Textarea"

// Select component
const Select = React.forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>(
  ({ className = "", children, ...props }, ref) => {
    return (
      <select
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </select>
    )
  },
)
Select.displayName = "Select"

// Button component
const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className = "", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-0 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
          "bg-[#0000FF] hover:bg-[#A2FF86] text-white hover:text-[#0000FF] h-10 py-2 px-12 cursor-pointer",
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

