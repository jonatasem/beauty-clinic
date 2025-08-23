import Header from '../../components/Header/Header';
import './Hero.scss';
import Carousel from '../../components/Carrousel/Carrousel';
import Loading from '../../components/Loading/Loading';
import { fetchApiData } from '../../data/api';
import { useState, useEffect } from 'react';
import { FaStar } from "react-icons/fa";

export default function Hero(){

    const [data, setData] = useState({
        beforeAfterPhotos: []
    });
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        fetchApiData()
        .then((apiData) => {
            setData(apiData);
            setIsLoading(false);
        })
        .catch((error) => {
            console.error("Erro ao buscar dados da API:", error);
            setIsLoading(false);
        });
    }, []);

    return (
        <section className="container-hero">
            <Header />
            <div className="layout-hero">
                <article className="hero-head">
                    <h1>Reveal Your Radiance with Our Expert Care</h1>
                    <p>Experience world-class treatments designed to enhance your unique beauty.</p>
                    <button>GetStarted</button>
                    <div className="head-logo">

                    </div>
                </article>
                <article className="hero-main">
                    {isLoading ? ( 
                        <Loading />
                    ) : (
                        <>
                            <Carousel images={data.beforeAfterPhotos} />
                        </>
                    )}
                </article>
                <article className="hero-footer">
                    <div className="clients-happy">
                        <p>img</p>
                        <div className='happy-main'>
                            <div className="happy-center">
                                <h2>+73.K</h2>
                                <p>Happy <br /> Clients</p>
                            </div>
                            <p>Our team of experts is dedicated to providing you with personalized solutions for radiant, healthy skin.</p>
                        </div>
                        <div className="testimonials">
                            <button>
                                4.8
                                <FaStar className='icon'/>
                            </button>
                            <button>Guest Testmonials</button>
                        </div>
                    </div>
                    <div className="number-happy">
                        <h1>1.200+</h1>
                        <p>Unlock the secret to lasting beauty with advanced treatments tailored to your needs.</p>
                    </div>
                </article>
            </div>
        </section>
    )
}