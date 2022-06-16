const ews = require("./assets/ews.png");
const fitness = require("./assets/fitness-tracker.jpg")
const snake = require("./assets/retro-arcade-snake.png")

const portfolioData = [
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
      ]
  },
];

module.exports = portfolioData;