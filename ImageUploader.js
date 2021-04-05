import { useState } from "react";
const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const handleImageUpload = (e) => {
    const url = URL.createObjectURL(e.target.files[0]);
    setImage(url);
  };
  return React.createElement(
    "article",
    null,
    React.createElement("input", { onChange: handleImageUpload, type: "file" }),
    image
      ? React.createElement("img", { src: image, alt: "image preview" })
      : React.createElement("p", null, "Please Upload Image")
  );
};
export default ImageUploader;
