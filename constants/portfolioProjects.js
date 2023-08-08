import drizco from "../assets/drizco.png";
import drizcoGIF from "../assets/drizco.gif";
import gluetube from "../assets/gluetube.png";
import gluetubeVideo from "../assets/gluetubeVideo.png";
import gluetubeChannel from "../assets/gluetubeChannel.png";
import stickstock from "../assets/stickstock.png";
import stickstockProfile from "../assets/stickstockProfile.png";
import stickstockUpload from "../assets/stickstockUpload.png";

import drizcoPay from "../assets/drizcoPay.png";
import drizcoProduct from "../assets/drizcoProduct.png";
import drizcoCart from "../assets/drizcoCart.png";
import chatethHome from "../assets/chatethHome.png";
import chatethLogin from "../assets/chatethLogin.png";
import portfolio1 from "../assets/portfolio1.png";
import portfolio1responsive from "../assets/portfolio1responsive.png";
import slimeyHome from "../assets/slimeyHome.png";
import slimeyTut from "../assets/slimeyTut.png";
import slimeyGame from "../assets/slimeyGame.png";
import slimeyEnd from "../assets/slimeyEnd.png";

const projects = [
  {
    name: "Drizco",
    coverImage: drizco,
    coverGIF: drizcoGIF,
    githubLink: "https://github.com/HenjiShip/Ecommerce",
    liveDemo: "https://drizco.netlify.app",
    technologies:
      "Javascript, Sanity CMS, NextJS, React, Stripe, JSONWebToken, Express, NodeJS, Axios, Google OAuth",
    images: [drizco, drizcoProduct, drizcoCart, drizcoPay],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    name: "Stickstock",
    coverImage: stickstock,
    coverGIF: drizcoGIF,
    githubLink: "https://github.com/HenjiShip/StickStock",
    liveDemo: "https://stickstock.netlify.app",
    technologies:
      "Javascript, NodeJS, ExpressJS, MongoDB, Cloudinary CDN, Redux, Axios, Google OAuth, MaterialUI, JSONWebToken",
    images: [stickstock, stickstockProfile, stickstockUpload],
    description: "I hate mustard too",
  },
  {
    name: "Chateth",
    coverImage: chatethLogin,
    coverGIF: drizcoGIF,
    githubLink: "https://github.com/HenjiShip/Chateth",
    liveDemo: "https://chateth.netlify.app",
    technologies: "Vite, Javascript, SASS, React, Firebase",
    images: [chatethLogin, chatethHome],
    description: "I hate mustard also",
  },
  {
    name: "Gluetube",
    coverImage: gluetube,
    coverGIF: drizcoGIF,
    githubLink: "https://github.com/HenjiShip/Youtube-Clone",
    liveDemo: "https://gluetube.netlify.app",
    technologies: "React, Javascript, CSS, RapidAPI, Axios",
    images: [gluetube, gluetubeVideo, gluetubeChannel],
    description: "I hate mustard also",
  },
  {
    name: "Portfolio v1.0",
    coverImage: portfolio1,
    coverGIF: drizcoGIF,
    githubLink: "https://github.com/HenjiShip/Portfolio",
    liveDemo: "https://henji.netlify.app/",
    technologies: "React, Javascript, CSS",
    images: [portfolio1, portfolio1responsive],
    description: "I hate mustard also",
  },
  {
    name: "Snake Game",
    coverImage: slimeyHome,
    coverGIF: drizcoGIF,
    githubLink: "https://github.com/HenjiShip/worm-game",
    liveDemo: "https://sesameworm.netlify.app",
    technologies: "Phaser 3",
    images: [slimeyHome, slimeyTut, slimeyGame, slimeyEnd],
    description: "I hate mustard also",
  },
];

export default projects;
