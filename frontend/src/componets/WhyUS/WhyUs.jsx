import Energy from "../../../images/trueno.png"
import Health from "../../../images/heart.png"
import Immune from "../../../images/defense.png"
import Adult from "../../../images/18+.png"
import Absorb from "../../../images/clock.png"
import Premium from "../../../images/premium.png"
export default function WhyUs() {
  return (
    <whyus className="whyus">
      <div className="whyus__container">
        <h2 className="whyus__title">¿Por Qué Elegir VITAFER-L?</h2>
        <p className="whyus__subtitle">
          Más que un suplemento, es tu aliado para una vida plena y energética. Descubre todos los beneficios que VITAFER-L tiene para ti.
        </p>
      </div>
      <div className="whyus__cards">
        <div className="whyus__card">
          <img src={Energy} alt="energia" />

          <h3 className="whyus__card-title">
            Energía Inmediata
          </h3>
          <p className="whyus__card-subtitle">
            Combate el cansancio y la fatiga desde la primera toma. Recupera tu vitalidad natural.
          </p>
        </div>
        <div className="whyus__card">
          <img src={Health} alt="health" />
          <h3 className="whyus__card-title">
            Salud Cardiovascular
          </h3>
          <p className="whyus__card-subtitle">
            Mejora la circulación sanguínea y fortalece tu sistema cardiovascular de forma natural.
          </p>
        </div>
        <div className="whyus__card">
          <img src={Immune} alt="immune" />
          <h3 className="whyus__card-title">
            Sistema Inmune
          </h3>
          <p className="whyus__card-subtitle">
            Fortalece tus defensas naturales y mantén tu organismo protegido todo el año.
          </p>
        </div>
        <div className="whyus__card">
          <img src={Adult} alt="adult" />
          <h3 className="whyus__card-title">
            uso para adultos +18 años
          </h3>
          <p className="whyus__card-subtitle">
            Fortalece tus defensas naturales y mantén tu organismo protegido todo el año.

          </p>
        </div>
        <div className="whyus__card">
          <img src={Absorb} alt="absorb" />
          <h3 className="whyus__card-title">
            Absorción Rápida
          </h3>
          <p className="whyus__card-subtitle">
            Fórmula líquida de última generación que se absorbe 3 veces más rápido que las pastillas.
          </p>
        </div>
        <div className="whyus__card">
          <img src={Premium} alt="premium" />
          <h3 className="whyus__card-title">
            Calidad Premium
          </h3>
          <p className="whyus__card-subtitle">
            produto original, sellado.
          </p>
        </div>



      </div>

    </whyus>
  );
}