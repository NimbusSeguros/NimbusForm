import { useRef } from "react"
import video from "../video/Video-Nimbus.webm"

export default function TeamVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <div className="max-w-12xl mx-auto px-4 py-8">
      <h2 className="text-xl text-[#5E5E5E] text-[17px] lg:text-[17px] 2xl:text-[17px] font-bold mb-4 ml-0 lg:ml-4">Conocé a nuestro equipo</h2>
      <div className="relative w-full aspect-video bg-gray-100 rounded-lg overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src={video}
          title="Video Institucional"
          controls
          playsInline
          loop
          autoPlay
          muted
          preload="auto"
        >
          Tu navegador no soporta el elemento de video.
        </video>
      </div>
      </div>
  )
}


