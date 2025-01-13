import logo from "../assets/logo.svg"

export const Header = () => {
  return (
    <div className="flex flex-col items-center gap-20">
      <img src={logo} alt="" className="max-w-36" />

      <h1 className="font-bold text-2xl text-left flex-1">Compras da semana</h1>
    </div>
  )
}
