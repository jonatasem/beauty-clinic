import './Modal.css';

export default function Modal({ combo, onClose }){
  if (!combo) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>
        <img src={combo.image} alt={combo.name} className="modal-image" />
        <h2>{combo.name}</h2>
        <p>
          *Preço:* R$ {combo.price.toFixed(2)}
        </p>
        <p>
          *Detalhes:* {combo.details}
        </p>
      </div>
    </div>
  );
};
