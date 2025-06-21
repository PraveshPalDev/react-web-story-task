import { useState } from "react";
import "../styles/StoryModal.css";

const StoryModal = ({ slides, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onClose();
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const slide = slides[currentIndex];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="story-header">
          <div className="progress-bar">
            <div
              className="progress"
              style={{
                width: `${((currentIndex + 1) / slides.length) * 100}%`,
              }}
            />
          </div>
          <button className="close-button" onClick={onClose}>
            ⏸
          </button>
        </div>

        <div className="arrow-button left-arrow" onClick={prevSlide}>
          ‹
        </div>

        <img src={slide.image} alt="slide" className="slide-image" />

        {slide.button_text && slide.link && (
          <a
            href={slide.link}
            target="_blank"
            rel="noopener noreferrer"
            className="story-button"
          >
            {slide.button_text}
          </a>
        )}

        <div className="arrow-button right-arrow" onClick={nextSlide}>
          ›
        </div>
      </div>
    </div>
  );
};

export default StoryModal;
