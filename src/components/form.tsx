export default function Form() {
    return (
      <div className="border-t-2 border-dotted border-gray-800">
        <div className="container flex flex-col items-center py-20 gap-15">
          <div className="flex flex-col items-center gap-3">
            <h1 className="text-3xl md:text-5xl text-center font-bold">Готовы автоматизировать бизнес?</h1>
            <p className="text-gray-300">Оставьте заявку — демо-версия за 1 день.</p>
          </div>
          <div className="flex flex-col gap-15 w-full">
            <input type="text" className="w-full p-5 border border-gray-500 rounded" id="" />
          </div>
        </div>
      </div>
    )
}