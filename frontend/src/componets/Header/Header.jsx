import vitafer from "../../../images/vitafer.png";
import cart from "../../../images/shopIcon.png";
import Certificado from "../../../images/Certificado.png";
import shipping from "../../../images/shipping.png";


export default function Header() {
 return (
  <header>
   <div className="header__container">
    <div className="header__left">

     <div className="header__text">
      <h1 className="header__title">
       VITAFER
      </h1>
      <h2 className="header__subtitle">
       Energía y Vitalidad Natural
      </h2>
      <p className="header__description">El suplemento de hierro más efectivo y fácil de absorber. Combate la anemia y recupera tu energía con nuestra fórmula premium desarrollada por especialistas.</p>
      <div className="header__buttons">
       <a target="_blank" href=" https://mpago.la/2H3aPqC">
        <button className="header__button"  >
         <img src={cart} alt="imagen vitafer" className="header__image-button" />
         Comprar ahora
        </button>
       </a>
       <a target="_blank" href="https://api.whatsapp.com/send?phone=5491123933206 ">
        <button className="header__button"  >
         <img src={cart} alt="imagen vitafer" className="header__image-button" />
         Mas información
        </button>
       </a>
      </div>

      <div className="header__promotion">
       <div className="header__certification">
        <img src={Certificado} alt="imagen vitafer" className="header__image-certification" />
        <p>Certificado</p>

       </div>
       <div className="header__shipping">
        <img src={shipping} alt="imagen vitafer" className="header__image-shipping" />
        <p>envios a todo el pais </p>
       </div>
      </div>
     </div>



    </div>
    <div className="header__right">
     <div className="header__img">
      <img src={vitafer} alt="imagen vitafer" className="header__image" />
     </div>
    </div>
   </div>
  </header>
 );
}