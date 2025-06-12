import { aboutUs } from "../meta.json";

export default function AboutUs() {
  return (
    <div className="container py-20 text-center flex flex-col gap-10">
      <p className="text-3xl md:text-5xl">{aboutUs.title}</p>
      <p className="text-base text-gray-400">{aboutUs.description}</p>
    </div>
  )
}