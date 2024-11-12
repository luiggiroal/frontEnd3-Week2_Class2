import CardStyles from "../styles/Card.module.css"

const Card = ({ pizza }) => {
  const { nombre, imagen, precio } = pizza
  return (
    <div className={CardStyles.cardContainer}>
      <h2>{nombre}</h2>
      <img className={CardStyles.cardImg} src={imagen} alt={nombre} />
      <h3>{precio}</h3>
    </div>
  )
}

export default Card
