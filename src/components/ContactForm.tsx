"use client"

import * as React from "react"
import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import { db, collection, addDoc } from "../firebase/firebaseConfig"
import { Alert, Snackbar } from "@mui/material"

const cn = (...classes: string[]) => classes.filter(Boolean).join(" ")

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null)

  interface dataForm {
    nombreApellido?: string
    email?: string
    telefono?: string
    provincia?: string
    consulta?: string
  }

  interface FormErrors {
    nombreApellido?: string
    email?: string
    telefono?: string
    provincia?: string
  }

  const dataform: dataForm = {
    nombreApellido: "",
    email: "",
    telefono: "",
    provincia: "",
    consulta: "",
  }

  const [formData, setFormData] = useState<dataForm>({
    ...dataform,
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState("")
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">("success")

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    let isValid = true

    if (!formData.nombreApellido?.trim()) {
      newErrors.nombreApellido = "Campo requerido"
      isValid = false
    }

    if (!formData.email?.trim()) {
      newErrors.email = "Campo requerido"
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email inválido"
      isValid = false
    }

    if (!formData.telefono?.trim()) {
      newErrors.telefono = "Campo requerido"
      isValid = false
    }

    if (!formData.provincia?.trim()) {
      newErrors.provincia = "Campo requerido"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    if (!form.current) {
      console.error("El formulario no está disponible")
      return
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
      })

      console.log("Datos guardados en Firebase")

      // Enviar email con EmailJS
      await emailjs.sendForm("service_ssef2qd", "template_wfqsfxq", form.current, {
        publicKey: "712q0EHzd1qeNzBv3",
      })

      console.log("Correo enviado con éxito")

      // Mostrar mensaje de éxito
      setSnackbarMessage("Formulario enviado con éxito")
      setSnackbarSeverity("success")
      setOpenSnackbar(true)

      // Limpiar formulario
      setFormData({ ...dataform })
      setErrors({})
    } catch (error) {
      console.error("Error al enviar el formulario:", error)
      // Mostrar mensaje de error
      setSnackbarMessage("Error al enviar el formulario. Por favor, intente nuevamente.")
      setSnackbarSeverity("error")
      setOpenSnackbar(true)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error for this field when user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }


  const handleCloseSnackbar = (_event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <div
      id="contacto"
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center p-4"
      style={{
        backgroundImage: `url('${window.innerWidth < 768 ? 'https://res.cloudinary.com/dgx3mbzfr/image/upload/v1738163784/Fondo_contacto_Cel_bkzews.jpg' : 'https://res.cloudinary.com/dgx3mbzfr/image/upload/v1738089633/Fondo_degrade_wse41g.png'}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
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
            <div>
              <label htmlFor="nombreApellido" className="block text-white">
                Nombre y Apellido
              </label>
              <Input
                id="nombreApellido"
                name="nombreApellido"
                placeholder=""
                value={formData.nombreApellido}
                onChange={handleChange}
                error={errors.nombreApellido}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder=""
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="telefono" className="block text-white">
                  Teléfono
                </label>
                <Input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  placeholder=""
                  value={formData.telefono}
                  onChange={handleChange}
                  error={errors.telefono}
                  required
                />
              </div>

              <div>
                <label htmlFor="provincia" className="block text-white">
                  Provincia
                </label>
                <Select
                  id="provincia"
                  name="provincia"
                  value={formData.provincia}
                  onChange={handleChange}
                  className="w-full p-2 rounded-md max-h-48 overflow-auto"
                  error={errors.provincia}
                  required
                >
                  <option value="" disabled>
                    Seleccione
                  </option>
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
            </div>

            <div>
              <label htmlFor="consulta" className="block text-white">
                Consulta
              </label>
              <Textarea
                id="consulta"
                name="consulta"
                placeholder="Escriba su mensaje"
                value={formData.consulta}
                onChange={handleChange}
                maxLength={250}
              />
            </div>

            <div className="flex justify-end">
              <Button type="submit">Enviar</Button>
            </div>
          </form>
        </div>
      </div>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  )
}

// Input component
const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement> & { error?: string }>(
  ({ className = "", error, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          className={cn(
            "flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
            error ? "border-red-500" : "border-input bg-white",
            className,
          )}
          ref={ref}
          {...props}
        />
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      </div>
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
const Select = React.forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement> & { error?: string }>(
  ({ className = "", children, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <select
          className={cn(
            "flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
            error ? "border-red-500" : "border-input bg-white",
            className,
          )}
          ref={ref}
          {...props}
        >
          {children}
        </select>
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      </div>
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
