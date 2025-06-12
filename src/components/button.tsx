import type { PropsWithChildren, ComponentProps } from "react"

interface ButtonProps {
  onClick?: ComponentProps<'div'>['onClick'];
  className?: string;
}

export default function Button({className, ...props}: PropsWithChildren<ButtonProps>) {
  return (
    <div className={
      "bg-blue-600 px-5 py-2.5 w-fit h-fit \
      rounded cursor-pointer select-none \
      hover:bg-blue-500 transition text-center " + className} {...props} />
  )
}