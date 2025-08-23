import './Card.css';

const Card = ({ combo, onOpenModal }) => {
  return (
    <div className="card">
      <img src={combo.image} alt={combo.name} />
      <h3>{combo.name}</h3>
      <p>Preço: R$ {combo.price}</p>
      <button onClick={() => onOpenModal(combo)}>Ver mais</button>
    </div>
  );
};

export default Card;