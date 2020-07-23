import React from 'react';
import { PhotoSwipeGallery } from 'react-photoswipe';
// import Slider from "react-slick";

// import "slick-carousel/slick/slick.css";

let items = [
  {
    src: 'http://lorempixel.com/1200/900/sports/1',
    thumbnail: 'http://lorempixel.com/120/90/sports/1',
    w: 1200,
    h: 900,
    title: 'Image 1'
  },
  {
    src: 'http://lorempixel.com/1200/900/sports/2',
    thumbnail: 'http://lorempixel.com/120/90/sports/2',
    w: 1200,
    h: 900,
    title: 'Image 2'
  },
  {
    src: 'http://lorempixel.com/1200/900/sports/3',
    thumbnail: 'http://lorempixel.com/120/90/sports/3',
    w: 1200,
    h: 900,
    title: 'Image 2'
  },
  {
    src: 'http://lorempixel.com/1200/900/sports/4',
    thumbnail: 'http://lorempixel.com/120/90/sports/4',
    w: 1200,
    h: 900,
    title: 'Image 2'
  },
  {
    src: 'http://lorempixel.com/1200/900/sports/5',
    thumbnail: 'http://lorempixel.com/120/90/sports/5',
    w: 1200,
    h: 900,
    title: 'Image 2'
  },
  {
    src: 'http://lorempixel.com/1200/900/sports/6',
    thumbnail: 'http://lorempixel.com/120/90/sports/6',
    w: 1200,
    h: 900,
    title: 'Image 2'
  }
];

let options = {
  //http://photoswipe.com/documentation/options.html
};

let getThumbnailContent = (item) => {
  return (
    <img src={item.thumbnail} width={120} height={90} alt="" />
  );
}

export default function Presentation() {
  // console.log(<PhotoSwipeGallery items={items} options={options} thumbnailContent={getThumbnailContent} />);

  return (
    <PhotoSwipeGallery items={items} options={options} thumbnailContent={getThumbnailContent} />
  );
}
