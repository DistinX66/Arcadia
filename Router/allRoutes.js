// Import the Route class from Route.js
import Route from "./Route.js";

// Define your routes here
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", "index.html"),
    new Route("/habitat", "Habitat", "/pages/habitat.html"),
    new Route("/signin", "Connexion/Deconnexion", "/pages/signin.html")
  ];

// The title is displayed as follows: Route.titre - websitename
export const websiteName = "Arcadia";