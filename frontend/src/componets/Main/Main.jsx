import { useState } from "react";
import { useEffect } from "react";
import PreLoader from "../Preloader/Preloader.jsx";


export default function Main() {
 const [loading, setLoading] = useState(true);
 const [cards] = useState([]);

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
  </main>
 );
}