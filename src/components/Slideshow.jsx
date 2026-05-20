import { useState } from 'react'

function Slideshow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)
  }

  const handleNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1)
  }

  return (
    <div className="slideshow">
      <img
        src={images[currentIndex]}
        alt={`Photo ${currentIndex + 1}`}
        className="slideshow__img"
      />

      {images.length > 1 && (
        <>
          <button className="slideshow__btn slideshow__btn--prev" onClick={handlePrev}>
            &#8249;
          </button>
          <button className="slideshow__btn slideshow__btn--next" onClick={handleNext}>
            &#8250;
          </button>
          <span className="slideshow__counter">
            {currentIndex + 1} / {images.length}
          </span>
        </>
      )}
    </div>
  )
}

export default Slideshow