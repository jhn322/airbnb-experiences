import swim from "./assets/swimmer.jpg";
import photograph from "./assets/photography.jpg";
import bike from "./assets/biking.jpg";
import skydive from "./assets/skydiving.jpg";
import dive from "./assets/scubadive.jpg";
import climb from "./assets/climbing.jpg";

const Data = [
  {
    id: 1,
    title: "Swimming lessons with a professional swimmer",
    description:
      "I will share with you my best tips and tricks from throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.",
    price: 125,
    coverImg: swim,
    stats: {
      rating: 4.2,
      reviewCount: 61,
    },
    location: "USA",
    openSpots: 0,
  },
  {
    id: 2,
    title: "Learn Photography",
    description:
      "Interested in becoming a photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave with memories that'll last a lifetime.",
    price: 85,
    coverImg: photograph,
    stats: {
      rating: 4.5,
      reviewCount: 36,
    },
    location: "Online",
    openSpots: 7,
  },
  {
    id: 3,
    title: "Group Mountain Biking",
    description:
      "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
    price: 65,
    coverImg: bike,
    stats: {
      rating: 4.8,
      reviewCount: 24,
    },
    location: "Norway",
    openSpots: 3,
  },
  {
    id: 4,
    title: "Skydiving experience",
    description:
      "Experience the ultimate rush as you leap into the boundless skies above Australia, where every freefall is a thrilling dance with gravity and freedom.",
    price: 224,
    coverImg: skydive,
    stats: {
      rating: 3.8,
      reviewCount: 44,
    },
    location: "United Emirates",
    openSpots: 2,
  },
  {
    id: 5,
    title: "Scuba diving dream",
    description:
      "Dive into the vibrant depths of Australia's marine wonderland, where every plunge unveils an underwater kaleidoscope of life and color.",
    price: 139,
    coverImg: dive,
    stats: {
      rating: 4.5,
      reviewCount: 65,
    },
    location: "Australia",
    openSpots: 2,
  },
  {
    id: 6,
    title: "Mountain climbing",
    description:
      "Embark on an exhilarating ascent amidst Australia's rugged peaks, where each step echoes the triumph of conquering nature's majestic heights.",
    price: 124,
    coverImg: climb,
    stats: {
      rating: 3.9,
      reviewCount: 12,
    },
    location: "Chile",
    openSpots: 8,
  },
];

export default Data;
