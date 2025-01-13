import trash from "../assets/trash.svg"
// import alert from "../assets/warning.svg"

export const Form = () => {
  return (
    <form>
      <div className="py-10 flex gap-4">
        <input
          type="text"
          placeholder="Adicione um novo item"
          className="flex-1 py-2.5 px-4 border-2 border-border-primary hover:border-border-hover rounded-xl outline-color-brand"
        />

        <button
          type="submit"
          className="py-2.5 px-6 bg-color-brand hover:bg-color-hover rounded-xl font-semibold text-white"
        >
          Adicionar item
        </button>
      </div>

      <div className="space-y-3">


        {/* card item */}
        <div className="flex bg-white px-3 py-2 rounded-xl gap-3">
          <div className="flex flex-1 gap-3 items-center pl-1">
            <input type="checkbox" className="accent-color-brand" />
            <h3 className="font text-content-secondary">Pão de forma</h3>
          </div>

          <button className="p-2">
            <img src={trash} alt="Apagar Item" />
          </button>
        </div>

        {/* card item */}
        <div className="flex bg-white px-3 py-2 rounded-xl gap-3">
          <div className="flex flex-1 gap-3 items-center pl-1">
            <input type="checkbox" className="accent-color-brand" />
            <h3 className="font text-content-secondary">Pão de forma</h3>
          </div>

          <button className="p-2">
            <img src={trash} alt="Apagar Item" />
          </button>
        </div>

        {/* card item */}
        <div className="flex bg-white px-3 py-2 rounded-xl gap-3">
          <div className="flex flex-1 gap-3 items-center pl-1">
            <input type="checkbox" className="accent-color-brand" />
            <h3 className="font text-content-secondary">Pão de forma</h3>
          </div>

          <button className="p-2">
            <img src={trash} alt="Apagar Item" />
          </button>
        </div>

        {/* card item */}
        <div className="flex bg-white px-3 py-2 rounded-xl gap-3">
          <div className="flex flex-1 gap-3 items-center pl-1">
            <input type="checkbox" className="accent-color-brand" />
            <h3 className="font text-content-secondary">Pão de forma</h3>
          </div>

          <button className="p-2">
            <img src={trash} alt="Apagar Item" />
          </button>
        </div>
      </div>

      {/* <div className="mt-9">
        <div className="flex bg-color-danger px-3 py-2 rounded-xl gap-2">
          <img src={alert} alt="Apagar Item" />
          <h3 className="font-semibold text-white">O item foi removido da lista</h3>
        </div>
      </div> */}
    </form>
  )
}
