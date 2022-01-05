import React from "react";
import logo from "./logo.svg";
import "./App.css";

// Exercice simple visant a prouver la capacité d'utilisation d'une API basique, et le rendu propre de ses
// résultats en utilisant des composants dynamiques, et des affichages graphiques

// L'exercice  a pour but de tester les compétences suivantes :
// - Création de composants fonction, avec hooks et state
// - Utiliser les données d'une API
// - Afficher des composants en boucle
// - Utiliser du CSS de base, et les flex

// Instructions :
// 1) Créer un input de texte utilisant un STATE pour demander le nom de l'utilisateur
// 2) Créer un boutton déclanchant un appel a fetchNameOrigins, et qui stocke les résultats dans un STATE
// 3) Créer un composant Results pour afficher les résultats. Il prendra en Props les résultats (props typés)
// 4) Dans "Results", afficher le champ "name".
// 5) Créer un composant Origin qui affichera chaque origine probable du prénom. Il doit etre d'une taille en dur de 500x500px posséder une bordure, et doit contenir le code du pays.
// 6) Afficher "Origin" en boucle dans "Results". Les composants doivent être cote a code dans une div en utilisant les propriétés de flex.
// 7) Dans "Origin", afficher le pourcentage sous forme graphique au choix (barre, cercle, couleur, gradient....) (avec materialUI ou en CSS pur)

export interface NameOriginsResponse {
  name: string;
  country: CountryOrigin[];
}

export interface CountryOrigin {
  country_id: string;
  probability: number;
}

const fetchNameOrigins = async (
  name: string
): Promise<NameOriginsResponse[]> => {
  const res = await fetch(`https://api.nationalize.io/?name=${name}`);
  return await res.json();
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
