import { useRef, useState } from 'react';
import './App.css'
import Header from "./components/header.tsx";
import Hero from './components/hero.tsx';
import AboutUs from './components/aboutus.tsx';
import Products from './components/products.tsx';
import Cases from './components/case.tsx';
import HowWeWork from './components/howwework.tsx';
import Form from './components/form.tsx';

function App() {
  const [onHero, setOnHero] = useState(true);
  const heroRef = useRef<HTMLDivElement | null>(null);

  window.addEventListener("scroll", () => {
    if (!heroRef.current) return;
    setOnHero(window.scrollY <= heroRef.current?.clientHeight);
  })

  return (
    <div className="flex flex-col">
      <Header variant={onHero ? "hero" : "standalone"} />
      <Hero ref={heroRef} />
      <AboutUs />
      <Products />
      <Cases />
      <HowWeWork />
    </div>
  )
}

export default App
