import type React from "react"

import { PresentationChartIcon, FlaskIcon, TrendUpIcon } from "@phosphor-icons/react";

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function Step({icon, title, description}: StepProps) {
  return (
    <div className="flex gap-5 items-center p-4 w-full flex-col text-center">
      <span className="text-3xl bg-gray-800 p-4 rounded-2xl">
        {icon}
      </span>
      <div className="flex flex-col gap-0.5">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  )
}

export default function HowWeWork() {
  return (
    <div className="border-t-2 border-dotted border-gray-800 py-20 flex flex-col gap-15">
      <h1 className="text-3xl md:text-5xl text-center">Как мы работаем</h1>
      <div className="container flex flex-col md:flex-row gap-15">
        <Step icon={<PresentationChartIcon />} title="Аудит" description="Анализируем ваши процессы за 48 часов" />
        <Step icon={<FlaskIcon />} title="Прототип" description="Тестируем MVP на реальных данных" />
        <Step icon={<TrendUpIcon />} title="Масштабирование" description="Запускаем систему на полную мощность" />
      </div>
    </div>
  )
}