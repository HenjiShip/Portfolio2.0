import drizco from "../assets/drizco.png";
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

import drizcoGIF from "../assets/drizco.gif";
import stickstockGIF from "../assets/stickstock.gif";
import chatethGIF from "../assets/chateth.gif";
import gluetubeGIF from "../assets/gluetube.gif";
import portfolio1GIF from "../assets/portfolio1.gif";
import slimeyGIF from "../assets/slimey.gif";

const projects = [
  {
    name: "Drizco",
    coverImage: drizco,
    coverGIF: drizcoGIF,
    githubLink: "https://github.com/HenjiShip/Ecommerce",
    liveDemo: "https://drizco.netlify.app",
    technologies:
      "Javascript | Sanity CMS | NextJS | React | Stripe | JSONWebToken | Express | NodeJS | Axios | Google OAuth",
    images: [drizco, drizcoProduct, drizcoCart, drizcoPay],
    features: [
      "Personalized login functionality",
      "Persistent user carts for easy updates",
      "Responsive design across devices",
      "Streamlined product management with Sanity CMS",
      "Robust security with JSON Web Tokens and HTTP-only cookies",
      "Stripe payments",
      "Functional payment processing (Test with: Card Number: 4242 4242 4242 4242, Expiration: 12/34, CVC: Any 3 digits)",
    ],
    description:
      "Meet Drizco, your go-to ecommerce destination, designed to elevate your online shopping journey. With personalized login features, effortlessly manage your cart and make updates seamlessly. Drizco ensures a consistent experience across all devices, complemented by streamlined product management through Sanity CMS. Rest easy knowing that robust security measures, including JSON Web Tokens and HTTP-only cookies, safeguard your information. Plus, experience hassle-free payment processing, ready for testing with the provided card details. Discover the future of online shopping with Drizco!",
  },
  {
    name: "Stickstock",
    coverImage: stickstock,
    coverGIF: stickstockGIF,
    githubLink: "https://github.com/HenjiShip/StickStock",
    liveDemo: "https://stickstock.netlify.app",
    technologies:
      "Javascript | NodeJS | ExpressJS | MongoDB | Cloudinary CDN | Redux | Axios | Google OAuth | MaterialUI | JSONWebToken",
    images: [stickstock, stickstockProfile, stickstockUpload],
    features: [
      "Database CRUD functionality",
      "JSON web tokens",
      "Full stack application",
      "Cloudinary CDN for speedy content delivery",
      "REST API",
    ],
    description:
      "This is an image sharing website with UI inspired by TikTok. There placeholder buttons for upcoming features, however, the functions that do work include liking posts, uploading posts, deleting posts, creating posts, and logging in with google auth. StickStock automatically sets the profile picture linked to your google account as well!",
  },
  {
    name: "Chateth",
    coverImage: chatethLogin,
    coverGIF: chatethGIF,
    githubLink: "https://github.com/HenjiShip/Chateth",
    liveDemo: "https://chateth.netlify.app",
    technologies: "Vite | Javascript | SASS | React | Firebase",
    images: [chatethLogin, chatethHome],
    features: [
      "Real time chat functionality",
      "Cloud storage for chat and users with Firebase",
      "Reusable components",
      "Image uploading for chat",
    ],
    description:
      "Presenting an innovative chat application that draws design inspiration from the renowned RPG game Persona 5. Currently in a developmental phase, this chat application showcases a fully operational chat interface, allowing users to seamlessly engage in conversations. By entering the user's unique ID, individuals can swiftly initiate dialogues, fostering seamless communication experiences.",
  },
  {
    name: "Gluetube",
    coverImage: gluetube,
    coverGIF: gluetubeGIF,
    githubLink: "https://github.com/HenjiShip/Youtube-Clone",
    liveDemo: "https://gluetube.netlify.app",
    technologies: "React, Javascript, CSS, RapidAPI, Axios",
    images: [gluetube, gluetubeVideo, gluetubeChannel],
    features: [
      "API",
      "Responsive design",
      "Video search and categorized videos",
      "View video statistics, comments, and details",
      "Visit user channels and view channel details",
    ],
    description:
      "A simple web application that uses Youtube's API to gather and watch videos. It includes many of Youtube's main video watching functionality.",
  },
  {
    name: "Portfolio v1.0",
    coverImage: portfolio1,
    coverGIF: portfolio1GIF,
    githubLink: "https://github.com/HenjiShip/Portfolio",
    liveDemo: "https://henjiv1.netlify.app/",
    technologies:
      "React | Javascript | CSS | ThreeJS | EmailJS | Framer Motion | Tailwind",
    images: [portfolio1, portfolio1responsive],
    features: [
      "Responsive design",
      "Uses tailwind for quick design",
      "Uploaded to netlify cloud hosting",
      "Contains links to various social media and project demos",
    ],
    description:
      "My old portfolio website that used ThreeJS for a rotating 3D object in the home page. It's a responsive portfolio website that features some neat CSS animations and can be used to contact me through the emailJS service",
  },
  {
    name: "Snake Game",
    coverImage: slimeyHome,
    coverGIF: slimeyGIF,
    githubLink: "https://github.com/HenjiShip/worm-game",
    liveDemo: "https://sesameworm.netlify.app",
    technologies: "Phaser 3 | HTML | CSS",
    images: [slimeyHome, slimeyTut, slimeyGame, slimeyEnd],
    features: [
      "Phaser 3 engine for controls using arrow keys",
      "Start and end game lifestyle",
    ],
    description:
      "Developed during my time at Sesame Workshop, the Snake Game stands as a testament to my commitment to innovation and collaboration. Amidst addressing software issues and ensuring system integrity, I dedicated my downtime to collaborate with the Sesame team, conceiving an engaging fan game. This joined effort yielded a captivating snake game, seamlessly integrated into the Sesame Workshop website. Throughout this endeavor, I embraced an agile framework, leveraging pivotal tools such as JIRA and Bitbucket to meticulously manage codebase iterations and commits. This experience not only underscored my technical proficiency but also highlighted my capacity to thrive within dynamic, team-driven environments.",
  },
];

export default projects;
