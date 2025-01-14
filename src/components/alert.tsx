import { useEffect } from "react"
import alert from "../assets/warning.svg"

interface Prop {
  message: string
  onClose: () => void
}

export const Alert = ({ onClose, message }: Prop) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 3000)

    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div>
      <div className="flex bg-color-danger px-3 py-2 rounded-xl gap-2">
        <img src={alert} alt="Apagar Item" />
        <h3 className="font-semibold text-white">{message}</h3>
      </div>
    </div>
  )
}
