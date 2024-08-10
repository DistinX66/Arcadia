export default class Route {
    constructor(url, title, pathHtml, pathJS = "") {
      this.url = url;
      this.title = title;
      this.pathHtml = pathHtml;
      this.pathJS = pathJS;
    }
}

// Define your routes here

export const allRoutes = [
  new Route("/", "Accueil", "/pages/home.html", "index.html"),
  new Route("/habitat", "Habitat", "/pages/habitat.html"),
  new Route("/signin", "Connexion/Deconnexion", "/pages/signin.html", "/javascript/auth/signin.js"),
  new Route("/Forêt", "forêt", "/pages/Forêt.html"),
  new Route("/Air", "air", "/pages/Air.html"),
  new Route("/Rivière", "rivière", "/pages/Rivière.html"),
  new Route("/Contact", "contact", "/pages/contact.html", "/javascript/auth/contact.js"),
  new Route("service", "service", "/pages/service.html"),
];
