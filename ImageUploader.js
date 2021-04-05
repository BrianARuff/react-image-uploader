import React, { useRef, useState } from "react";

const ImageUploader = () => {
  const [image, setImages] = useState(null);
  const handleImageUpload = (e) => {
    const url = URL.createObjectURL(e.target.files[0]);
    setImages(url);
  };
  return (
    <article>
      <input onChange={handleImageUpload} type="file" />
      {image ? (
        <img src={image} alt="image preview" />
      ) : (
        <p>Please Upload Image</p>
      )}
    </article>
  );
};

export default ImageUploader;
