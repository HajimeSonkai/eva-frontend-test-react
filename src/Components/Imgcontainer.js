import React, { useState } from "react";

const Imgcontainer = () => {
  const [currentIndex, setCurrentIndex] = useState("img1");
  const images = ["img1", "img2", "img3"];

  const backchanger = (imgIndex) => {
    setCurrentIndex(imgIndex);
  };

  return (
    <div className="background-slider">
      <div className={`background-${currentIndex}`}>
      <div className="dot-container">
        {images.map((img, imgIndex) => {
          return (
            <div
              className="dot"
              key={imgIndex}
              onClick={() => backchanger(img)}
            >
              {img === currentIndex ? "🟣️" : "⚪️"}
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default Imgcontainer;
