import { useState } from "react";
import { useEffect } from "react";
import PreLoader from "../Preloader/Preloader.jsx";
import Card from "../Card/Card.jsx";
import CallToAction from "../CallToAction/callToAction.jsx";
import WhyUs from "../WhyUS/WhyUs.jsx";


export default function Main() {
 const [cards,] = useState([{ image: "/images/vitafer.png", name: "Vitafer x 500ML ", price: "75.000", info: "Fórmula líquida de absorción inmediata. Ideal para tratamientos intensivos y recuperación rápida de niveles de hierro.", items: ["Absorción inmediata", "Formato líquido 500m", "dosificador", "mejor precio"], href: "https://www.google.com.ar/" }, { image: "/images/vitafercaja.png", name: "Vitafer caja x 15 sachets ", price: "25.000", info: "Presentación práctica en sachets individuales de 10ml. Perfecto para llevar contigo y mantener tu rutina diaria.", items: ["25 sachets de 10ml", "Prácticos y portátiles", "Dosificación precisa", "Ideal para viajes"], href: "https://www.google.com.ar/" }, { image: "/images/vitafersachetx3.png", name: "Vitafer x3 sachets ", price: "12.000", info: "Pack de prueba con 3 sachets individuales. Conoce los beneficios de VITAFER-L antes de hacer tu compra completa.", items: ["3 sachets de 10ml", "Perfecto para probar", "Económico", "Tamaño individual"], href: "https://www.google.com.ar/" },]);
 const [loading, setLoading] = useState(true);


 useEffect(() => {
  setTimeout(() => {
   setLoading(false);

  }, 2000);

 }, []);


 return (
  <main className="main">
   <div className="main text">
    <h2 className="main__title">Nuestros Productos</h2>
    <p className="main__subtitle">Descubre nuestra línea completa de suplementos VITAFER-L, diseñados para satisfacer todas tus necesidades de hierro y energía.</p>
   </div>
   <div className="main__container">
    <div className="main__cards">
     {loading ? (<PreLoader />) : cards.map(card => (
      <Card
       card={card}

      />
     ))}
    </div>

   </div>
   <div className="main__scores">
    <div className="main__sold">
     <h2 className="main__sold-title">1000+ </h2>
     <p className="main__sold-subtitle">vendidos</p>
    </div>
    <div className="main__sold-middle">
     <h2 className="main__sold-title">4.9 </h2>
     <p className="main__sold-subtitle">Calificación Promedio</p>
    </div>
    <div className="main__sold">
     <h2 className="main__sold-title">98% </h2>
     <p className="main__sold-subtitle">recomendaciones</p>
    </div>


   </div>
   <WhyUs />
   <CallToAction />

  </main>
 );
}