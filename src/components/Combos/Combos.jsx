import { useState } from 'react';
import Card from '../Card/Card';
import Modal from '../Modal/Modal';

export default function Combos({ combos }) {
  const [selectedCombo, setSelectedCombo] = useState(null);

  const handleOpenModal = (combo) => {
    setSelectedCombo(combo);
  };

  const handleCloseModal = () => {
    setSelectedCombo(null);
  };

  return (
    <div className="combos-container">
      {combos.map((combo) => (
        <Card key={combo.id} combo={combo} onOpenModal={handleOpenModal} />
      ))}
      {selectedCombo && <Modal combo={selectedCombo} onClose={handleCloseModal} />}
    </div>
  );
}