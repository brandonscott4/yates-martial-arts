import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import lucyKata from "../assets/lucy-kata.jpg";
import lucyKataSmall from "../assets/lucy-kata-small.jpg";
import lukeFight from "../assets/luke-fight.jpg";
import lukeFightSmall from "../assets/luke-fight-small.jpg";
import vickyFight from "../assets/vicky-fight.jpg";
import vickyFightSmall from "../assets/vicky-fight-small.jpg";

function Gallery() {
  const images = [
    {
      original: lukeFight,
      thumbnail: lukeFightSmall,
    },
    {
      original: lucyKata,
      thumbnail: lucyKataSmall,
    },
    {
      original: vickyFight,
      thumbnail: vickyFightSmall,
    },
  ];

  return (
    <>
      <div className="bg-sky-100">
        <h1 className="font-bold text-3xl lg:text-4xl mb-12 pt-20 text-center">
          GALLERY
        </h1>
        <div className="flex items-center justify-center pb-20 mx-6">
          <ImageGallery items={images} />
        </div>
      </div>
    </>
  );
}

export default Gallery;
