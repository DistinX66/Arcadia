export default class Route {
    constructor(url, title, pathHtml, authorize, pathJS = "") {
      this.url = url;
      this.title = title;
      this.pathHtml = pathHtml;
      this.pathJS = pathJS;
      this.authorize = authorize;
    }
}

/* 
[] -> tout le,monde peut y acceder.
[disconnected] -> pour les users déconnectés
[admin] -> Réservé aux admin
[employé] -> Réservé aux employés
[employé, vétérinaire] -> Réservé aux employés et vétérinaires

*/

// Define your routes here

export const allRoutes = [
  new Route("/", "Accueil", "/pages/home.html", "index.html", []),
  new Route("/habitat", "Habitat", "/pages/habitat.html", []),
  new Route("/signin", "Connexion/Deconnexion", "/pages/signin.html", ["disconnected"], "/javascript/auth/signin.js"),
  new Route("/Forêt", "forêt", "/pages/Forêt.html", []),
  new Route("/Air", "air", "/pages/Air.html", []),
  new Route("/Rivière", "rivière", "/pages/Rivière.html", []),
  new Route("/Contact", "contact", "/pages/contact.html", [], "/javascript/auth/contact.js"),
  new Route("service", "service", "/pages/service.html", []),
  new Route("/Air", "air", "/pages/Airs_Emp.html", ["employé", "vétérinaire"]),
  new Route("/Rivière", "rivière", "/pages/Rivière_Emp.html", ["employé", "vétérinaire"]),
  new Route("/Forêt", "forêt", "/pages/Forêt_Emp.html", ["employé", "vétérinaire"]),
];
