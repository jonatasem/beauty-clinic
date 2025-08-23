import { DotButton, useDotButton } from './EmblaCarrouselButton'
import { PrevButton, NextButton, usePrevNextButtons } from './EmblaCarrouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const EmblaCarousel = (props) => {
  const { slides, options } = props

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({ delay: 4000, stopOnInteraction: false })])

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla-container">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((photo) => (
            <div className="embla__slide" key={photo.id}>
              <div className="before-after-container">
                <div className="before-image">
                  <img src={photo.before} alt="Foto Antes" />
                  <p>Antes</p>
                </div>
                <div className="after-image">
                  <img src={photo.after} alt="Foto Depois" />
                  <p>Depois</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
