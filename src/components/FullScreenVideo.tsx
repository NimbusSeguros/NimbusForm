import { useState, useEffect, useRef } from "react"
import video from "../video/Video Nimbus.mp4"

export default function FullScreenVideo() {
  const [aspectRatio, setAspectRatio] = useState("16:9")
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const updateAspectRatio = () => {
      const ratio = window.innerWidth / window.innerHeight
      setAspectRatio(ratio > 1 ? "16:9" : "9:16")
    }

    updateAspectRatio()
    window.addEventListener("resize", updateAspectRatio)

    return () => window.removeEventListener("resize", updateAspectRatio)
  }, [])

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && videoRef.current) {
        videoRef.current.pause()
      } else if (!document.hidden && videoRef.current) {
        videoRef.current.play()
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [])

  return (
    <div className="relative w-full h-screen bg-white overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`w-full h-full max-w-[100vw] max-h-[100vh] ${
            aspectRatio === "16:9" ? "aspect-video" : "aspect-[9/16]"
          }`}
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src={video}
            title="Descripción del video"
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
    </div>
  )
}

