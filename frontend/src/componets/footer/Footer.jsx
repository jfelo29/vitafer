import whatsapp from "../../../images/whatsapporange.png"
import mailImg from "../../../images/mail.png"
import locationImg from "../../../images/location.png"
import clockImg from "../../../images/clockorange.png"
import phone from "../../../images/phone.png"
export default function Footer() {
 return (
  <footer>
   <div className="footer__container">
    <div className="footer__name">
     <h2 className="footer__title-vitafer">
      VITAFER-L
     </h2>
     <p className="footer__name-subtitle">
      El suplemento de hierro más confiable y efectivo del mercado. Recupera tu energía y vitalidad con calidad premium
     </p>

    </div>
    <div className="footer__product">
     <h2 className="footer__title">
      Productos
     </h2>
     <p className="footer__product-subtitle">
      VITAFER-L Líquido 500ml
     </p>
     <p className="footer__product-subtitle">Sachets x15 unidades</p>
     <p className="footer__product-subtitle">Combos familiares</p>
     <p className="footer__product-subtitle">Pack x3 sachets</p>
    </div>
    <div className="footer__soport">

     <h2 className="footer__title">
      Soporte
     </h2>
     <p className="footer__name-subtitle">
      Preguntas frecuentes
     </p>
     <p className="footer__name-subtitle">
      Guía de uso
     </p>





    </div>
    <div className="footer__contact">

     <h2 className="footer__title">
      Contacto
     </h2>
     <div className="footer__info">
      <img src={whatsapp} alt="horario" className="footer__image" />
      <p className="footer__name-subtitle">
       +54 9 11 23933206
      </p>
     </div>
     <div className="footer__info">
      <img src={phone} alt="horario" className="footer__image" />
      <p className="footer__name-subtitle">
       +54 9 11 66465694
      </p>
     </div>

     <div className="footer__info">
      <img src={locationImg} alt="ubicacion" className="footer__image" />
      <p className="footer__name-subtitle">
       Buenos Aires, Argentina
      </p>
     </div>
     <div className="footer__info">
      <img src={clockImg} alt="horario" className="footer__image" />
      <p className="footer__name-subtitle">
       Lun-sab 8AM-6PM
      </p>
     </div>

    </div>
   </div>

  </footer>
 );
}