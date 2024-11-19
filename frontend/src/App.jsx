// Importation des composants nécessaires depuis React Router DOM
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Importation des styles globaux
import './App.css';

// Importation de la page d'accueil
import Home from "./Pages/Home";

// Importation du composant Layout pour la mise en page
import Layout from "./Components/Client/Layout";

// Fonction principale de l'application
function App() {
  return (
    // Configuration du routeur principal pour gérer la navigation
    <BrowserRouter>
      <Routes>
        {/* Définition de la route principale ("/") */}
        <Route
          path="/"
          element={
            // Utilisation du composant Layout pour encapsuler la page d'accueil
            <Layout>
              <Home />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

// Exportation du composant App pour son utilisation dans le projet
export default App;
