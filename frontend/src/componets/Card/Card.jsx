export default function Card(props) {
 const { image, name, price, info, items, href } = props.card;

 return (<div className="card cardS__list">
  <a target="_blank" className="name__product"
   href={href}>
   <div className="card_portada">
    <img src={image} alt="card" className="card__image" />
   </div>
   <div className="card__info">

    <h3 className="card__name">
     {name}
    </h3 >
    <div className="card__price">
     <span>{price}
     </span>
     <p className="card__price-subtitle">
      {info}
     </p>
     <ul className="card__list">

      {items.map(item => (
       <li>{item}</li>
      ))}
     </ul>
    </div>



   </div>
  </a>
 </div >
 )
}