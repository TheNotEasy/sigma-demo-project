import React from "react";

import { products } from "../meta.json";

import { ChatsCircleIcon, ChartLineIcon, HeadsetIcon } from "@phosphor-icons/react";

interface ProductProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function Product({ title, description, icon }: ProductProps) {
  return (
    <div className="relative border border-gray-800 rounded-2xl p-10 w-full flex flex-col gap-5 -z-1">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-gray-400">{description}</p>

      <div className="text-3xl absolute top-0 left-0 -translate-1/2 p-4 bg-gray-800 rounded-2xl">{icon}</div>
    </div>
  )
}

const PRODUCTS_ICONS = [
  <ChatsCircleIcon />,
  <HeadsetIcon />,
  <ChartLineIcon />,
]

export default function Products() {
  return (
    <div className="border-t-2 border-dotted border-gray-800">
      <div className="container flex flex-col items-center py-20 gap-15">
        <h1 className="text-3xl md:text-5xl text-center">AI-решения для вашего роста</h1>
        <div className="flex flex-col gap-15 w-[90%]">
          {products.map((product, index) => <Product {...product} icon={PRODUCTS_ICONS[index]} />)}
        </div>
      </div>
    </div>
  )
}