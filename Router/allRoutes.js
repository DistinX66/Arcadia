// Import the Route class from Route.js
import Route from "./Route.js";

// Define your routes here
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", "index.html"),
    new Route("/habitat", "Habitat", "/pages/habitat.html"),
    new Route("/signin", "Connexion/Deconnexion", "/pages/signin.html"),
    new Route("/Forêt", "forêt", "/pages/Forêt.html"),
    new Route("/Air", "air", "/pages/Air.html"),
    new Route("/Rivière", "rivière", "/pages/Rivière.html"),
    new Route("/Contact", "contact", "/pages/contact.html"),
    new Route("service", "service", "/pages/service.html"),
  ];

// The title is displayed as follows: Route.titre - websitename
export const websiteName = "Arcadia";