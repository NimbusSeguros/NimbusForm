import { Card, CardContent } from "./card"

interface TestimonialCardProps {
    name: string
    quote: string
  }
  
  interface TestimonialCardProps {
    name: string
    quote: string
  }
  
  export function TestimonialCard({ name, quote }: TestimonialCardProps) {
    return (
      <Card className="relative h-full bg-white rounded-lg shadow-md  border border-gray-100">
        <CardContent className="p-6 lg:p-4 flex flex-col h-full">
          <div className="absolute top-6 right-6 w-8 h-8">
            <img
              src="https://res.cloudinary.com/dgx3mbzfr/image/upload/v1738089633/Icono_opiniones_rvukd1.png"
              alt=""
              width={32}
              height={32}
              className="w-full h-full"
            />
          </div>
          <h3 className="text-[#0051FF] font-medium mb-3 text-lg">
            {name}
          </h3>
          <p className="text-[#6B7280] text-base leading-relaxed">
            {quote}
          </p>
        </CardContent>
      </Card>
    )
  }
  
  