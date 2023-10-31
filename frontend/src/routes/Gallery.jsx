import { Fade } from "react-awesome-reveal";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import lucyKata from "../assets/lucy-kata.jpg";
import lukeFight from "../assets/luke-fight.jpg";
import vickyFight from "../assets/vicky-fight.jpg";
import ymaPad from "../assets/yma-pad.jpg";
import padWork from "../assets/pad-work.jpg";
import ymaPunch from "../assets/yma-punch.jpg";

function Gallery() {
  const images = [
    {
      original: lukeFight,
    },
    {
      original: lucyKata,
    },
    {
      original: vickyFight,
    },
    {
      original: ymaPad,
    },
    {
      original: padWork,
    },
    {
      original: ymaPunch,
    },
  ];

  return (
    <>
      <div className="bg-sky-100">
        <Fade triggerOnce>
          <h1 className="font-bold text-3xl lg:text-4xl mb-12 pt-20 text-center">
            GALLERY
          </h1>
        </Fade>
        <div className="flex items-center justify-center pt-10 pb-40 md:pb-72 lg:pt-0 lg:pb-20 mx-6 bg-sky-10">
          <ImageGallery items={images} />
        </div>
      </div>
    </>
  );
}

export default Gallery;
