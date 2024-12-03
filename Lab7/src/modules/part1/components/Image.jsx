import React, { useState } from "react";
import "./styles.css";

export const Image = () => {
  const [isImageVisible, setIsImageVisible] = useState(true);
  const [imageWidth, setImageWidth] = useState(500);

  const handleAdd = () => {
    setIsImageVisible(true);
  };

  const handleReduce = () => {
    setImageWidth((prevWidth) => (prevWidth > 50 ? prevWidth - 50 : 50));
  };

  const handleIncrease = () => {
    setImageWidth((prevWidth) => prevWidth + 50);
  };

  const handleDelete = () => {
    setIsImageVisible(false);
  };

  return (
    <div>
      {/* Conditionally render the image */}
      {isImageVisible && (
        <img
          id="image"
          src="https://ukr-prokat.com/wp-content/uploads/2020/07/lviv.jpg"
          alt="Львів"
          width={imageWidth}
        />
      )}

      {/* Buttons */}
      <div className="buttons-container">
        <button
          disabled={isImageVisible}
          className="button"
          id="add-button"
          onClick={handleAdd}
        >
          Add
        </button>
        <button
          className="button"
          id="reduce-button"
          disabled={!isImageVisible}
          onClick={handleReduce}
        >
          Reduce
        </button>
        <button
          className="button"
          id="increase-button"
          disabled={!isImageVisible}
          onClick={handleIncrease}
        >
          Increase
        </button>
        <button
          className="button"
          id="delete-button"
          disabled={!isImageVisible}
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
