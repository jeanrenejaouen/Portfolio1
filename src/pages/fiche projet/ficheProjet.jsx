import React from "react"
import Banner from '../../components/banner/banner.jsx'
import AccueilImage from '../../assets/images/imgBanner.png'
import { useFetchData } from "../../hookFetch/useFetchData.js"
import { useParams } from 'react-router-dom'
import Error from '../../pages/error/error.jsx'

/* import Gallery from '../../components/gallery/gallery.jsx' */


function FicheProjet() {

  const Projets = useFetchData(`/fiches-projet.json`)  
    
  // Récupérer l'identifiant du projet actuel
  const idProjet = useParams("id").id

  // inclure dans un tableau "currentProjet" uniquement le projet avec l'identifiant récupéré ci-dessus 
  const currentProjet = Projets.filter(item => item.id === idProjet);

  // si aucun projet dans la table "currentProjet", appelez le composant "Error"
  if (currentProjet.length === 0) {
      return (
          <Error />
      )
  }

  return (
      <>   
        {/* Afficher 'imgBanner.png' nommée 'AccueilImage' provenant du fichier image pour avoir la même
        image de fond que sur la bannière de la page d'accueil*/}
        {/* Afficher le titre du projet courant */}
        {/* Afficher le sous-titre du projet courant */}

        <Banner  image={AccueilImage} altText="Banner" 
        title={currentProjet[0].title} 
        text={currentProjet[0].subtitle}/> 

        
      </>
    )}
  
  export default FicheProjet