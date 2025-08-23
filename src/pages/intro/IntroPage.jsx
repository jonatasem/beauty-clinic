import './index.scss';

import imgLogo from '/images/intro/intro-logo.jpg';

import imgPhotoOne from '/images/intro/photo01.jpg';
import imgPhotoTwo from '/images/intro/photo02.jpg';
import imgPhotoTree from '/images/intro/photo03.jpg';

export default function IntroPage(){
    return (
        <section className="intro-page">
            <article className='intro-head'>
                <div className="intro-logo">
                    <img src={imgLogo} alt="modelo" />
                </div>
                <div className="layout-head-intro">
                    <div className="social-media">
                        <div className="layout-title">
                            <h1>We Style & You Smile Brigth</h1>
                            <button>Book Appointment</button>
                        </div>
                        <div className="layout-photos">
                            <ul>
                                <li><img src={imgPhotoOne} alt="foto modelo"/></li>
                                <li><img src={imgPhotoTwo} alt="foto modelo"/></li>
                                <li><img src={imgPhotoTree} alt="foto modelo"/></li>
                            </ul>
                        </div>
                    </div>
                    <div className="redes-sociais">
                        <ul>
                            <li>+55 18 0000 00000</li>
                            <li>empresabeauty@gmail.com</li>
                            <li>rua nove de novembro, 96</li>
                        </ul>
                    </div>
                </div>
            </article>
            <article className="intro-main">
                <div className="item-main">
                    <div className="item-main">

                    </div>
                    <div className="item-main">

                    </div>
                    <div className="item-main">

                    </div>
                </div>
                <div className="item-main">
                    <div className="item-main">

                    </div>
                    <div className="item-main">

                    </div>
                    <div className="item-main">

                    </div>
                </div>
            </article>
        </section>
    )
}