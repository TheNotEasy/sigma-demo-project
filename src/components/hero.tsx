import type React from "react"
import { mission, product } from "../meta.json"
import Button from "./button"

export default function Hero(props: React.ComponentPropsWithRef<'div'>) {
  return (
    <div {...props} className="flex bg-gray-900 relative overflow-hidden bg-grid">
      <div className="w-full py-50 flex flex-col gap-[40px] container">
        <div className="flex flex-col gap-[30px] text-center">
          <h1 className="text-3xl md:text-5xl font-bold">{mission}</h1>
          <p>{product}</p>
      </div>
        <Button className="font-bold mx-auto">Оставить заявку</Button>
      </div>
    </div>
  )
}