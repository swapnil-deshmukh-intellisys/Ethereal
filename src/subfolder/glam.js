import React from "react";
import "./glam.css";

// Glam Stay images
import img1 from "../Assets/g1.jpeg";
import img2 from "../Assets/glam.jpg";
import img3 from "../Assets/glam2.jpg";
import img4 from "../Assets/tent1.jpg";
import img5 from "../Assets/dome (2).jpg";
import img6 from "../Assets/g6.jpeg";
import img7 from "../Assets/tent5.jpg";
import img8 from "../Assets/book2.jpg";
// Tent images
import tent1 from "../Assets/book1.jpg";
import tent2 from "../Assets/gg1.jpg";
import tent3 from "../Assets/dome (4).jpg";
import tent4 from "../Assets/gg4.jpg";
import tent5 from "../Assets/book3.jpg";
import tent6 from "../Assets/tent5.jpg";

// Array of gallery items for Glam Stay images
const galleryItems = [
  { image: img1, className: "" },
  { image: img2, className: "" },
  { image: img7, className: "" },
  { image: img5, className: "" },
  { image: img3, className: "tall" },
  { image: img4, className: "wide" },
  { image: img8, className: "" },
  { image: img6, className: "" },
];

// Array of gallery items for Tent Stay images
const images = [
  { image: tent1, className: "tall1" },
  { image: tent2, className: "tall1" },
  { image: tent6, className: "tall1" },
  { image: tent3, className: "tall1" },
  { image: tent4, className: "tall1" },
  { image: tent5, className: "tall1" },
];

function Gallery() {
  return (
    <div className="main-div-gal">
    <section id="gallery" className="modern">
      <h1>Gallery</h1>
      <p>Experience the beauty through our lens.</p>
      <div className="grid">
        {/* Loop through galleryItems to display Glam Stay images */}
        {galleryItems.map((item, index) => (
          <div key={index} className={`galleryimg ${item.className}`}>
            <img src={item.image} alt={`Gallery Item ${index + 1}`} />
          </div>
        ))}
      </div>

      
      <div className="gallery-container">
        {/* Loop through images to display Tent Stay images */}
        {images.map((img, index) => (
          <div key={index} id={`image-${index + 1}`} className={`image-card ${img.className}`}>
            <img src={img.image} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}

export default Gallery;
