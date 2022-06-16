const ews = require("./assets/ews.png");
const fitness = require("./assets/fitness-tracker.jpg");
const snake = require("./assets/retro-arcade-snake.png");

const portfolioData = [
  // ------------ Elite Web Services start --------------
  {
    route: "elite-web-services",
    title: "Elite Web Services",
    siteUrl: "https://elite-web-services.herokuapp.com/",
    codeUrl: "https://github.com/Elite-Web-Services/Elite-Web-Services",
    img: {
      src: ews,
      alt: "Elite Web Services",
    },
    carousel: [
      {
        src: fitness,
        alt: "fitness",
      },
      {
        src: snake,
        alt: "retro-arcade-snake",
      },
    ],
    description: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    ],
  },
  // ------------ Elite Web Services end --------------

  // ------------ Retro Arcade Snake start --------------
  {
    route: "retro-arcade-snake",
    title: "Retro Arcade Snake",
    siteUrl: "https://retro-arcade-snake.herokuapp.com/",
    codeUrl: "https://github.com/hays-b/Arcade-Snake",
    img: {
      src: snake,
      alt: "Retro Arcade Snake",
    },
    carousel: [
      {
        src: fitness,
        alt: "fitness",
      },
      {
        src: snake,
        alt: "retro-arcade-snake",
      },
    ],
    description: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    ],
  },
  // ------------ Retro Arcade Snake end --------------

  // ------------ Fitness Tracker start --------------
  {
    route: "fitness-tracker",
    title: "Fitness Tracker",
    siteUrl: "https://fitness-tracker-react-app.herokuapp.com/",
    codeUrl: "https://github.com/hays-b/FitnessTracker-fullstack",
    img: {
      src: fitness,
      alt: "Fitness Tracker",
    },
    carousel: [
      {
        src: fitness,
        alt: "fitness",
      },
      {
        src: snake,
        alt: "retro-arcade-snake",
      },
    ],
    description: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    ],
  },
  // ------------ Fitness Tracker end --------------
];

module.exports = portfolioData;
