const {
  ewsThumbnail,
  ewsProducts,
  ewsSingle,
  ewsCheckout,
  ewsAdmin,
  ewsEdit,
} = require("./assets/elite-web-services");
const {
  arcadeThumbnail,
  arcadeHome,
  arcadeHighscores,
  arcadeSettings,
  arcadeNew,
  arcadeGame,
  arcadeTitle,
} = require("./assets/retro-arcade-snake");
const {
  fitnessThumbnail,
  fitnessHome,
  fitnessRoutines,
  fitnessEdit,
} = require("./assets/fitness-tracker");

const portfolioData = [
  // ------------ Elite Web Services start --------------
  {
    route: "elite-web-services",
    title: "Elite Web Services",
    siteUrl: "https://elite-web-services.herokuapp.com/",
    codeUrl: "https://github.com/Elite-Web-Services/Elite-Web-Services",
    img: {
      src: ewsThumbnail,
      alt: "Elite Web Services",
    },
    carousel: [
      {
        src: ewsProducts,
        alt: "Products Page",
      },
      {
        src: ewsSingle,
        alt: "Single Product View",
      },
      {
        src: ewsCheckout,
        alt: "Checkout",
      },
      {
        src: ewsAdmin,
        alt: "Admin Functionality",
      },
      {
        src: ewsEdit,
        alt: "Editing a Product",
      },
    ],
    description: [
      "This was a group project completed as part of my Fullstack Academy curriculum. It is a react app which utilizes a PostgreSQL database. Along with two partners, I helped create a template e-commerce site with a fully functioning backend that allows users to create accounts, view products, and add them to their carts for checkout.",
      "My personal responsibilities were focused on the products and searchbar, along with some contributions to cart functionality. I built out the products database, as well as the front-end functionality of adding, editing, and removing products on the site. And of course, all CSS styling involving products.",
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
      src: arcadeThumbnail,
      alt: "Retro Arcade Snake",
    },
    carousel: [
      {
        src: arcadeHome,
        alt: "Main Menu",
      },
      {
        src: arcadeHighscores,
        alt: "View All Highscores",
      },
      {
        src: arcadeSettings,
        alt: "Game Settings",
      },
      {
        src: arcadeNew,
        alt: "New Highscore Pop Up",
      },
      {
        src: arcadeGame,
        alt: "Playing the Game",
      },
      {
        src: arcadeTitle,
        alt: "Title Art",
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
      src: fitnessThumbnail,
      alt: "Fitness Tracker",
    },
    carousel: [
      {
        src: fitnessHome,
        alt: "Home Page",
      },
      {
        src: fitnessRoutines,
        alt: "View Other User's Routines",
      },
      {
        src: fitnessEdit,
        alt: "Edit Your Own Routines",
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
