import classNames from "classnames";
import { brand } from "../meta.json"
import Button from "./button";


interface HeaderProps {
  variant?: "hero" | "standalone";
}

export default function Header({variant}: HeaderProps) {
  return (
    <div className={classNames("top-0 transition w-full flex z-1", {
      "absolute": variant === 'hero',
      "bg-transparent backdrop-blur-md fixed": variant === 'standalone'
    })}>
      <div className="flex container h-16 items-center justify-between">
        <p className="text-xl">{brand}</p>
        {variant === 'standalone' && <Button className="animate-fadeout">Оставить заявку</Button>}
      </div>
    </div>
  )
}