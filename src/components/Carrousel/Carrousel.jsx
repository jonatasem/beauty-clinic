import { useEffect, useState } from 'react';
import EmblaCarousel from '../EmblaCarrousel/EmblaCarrousel';
import { fetchApiData } from '../../data/api';
import './Carrousel.css';

const Carousel = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchApiData();
      setPhotos(data.beforeAfterPhotos);
      setLoading(false);
    };

    getData();
  }, []);

  const OPTIONS = { loop: true };

  return (
    <div className="carousel-container">
      {loading ? (
        <p>Carregando fotos...</p>
      ) : (
        <EmblaCarousel slides={photos} options={OPTIONS} />
      )}
    </div>
  );
};

export default Carousel;
