import React from "react"
import Banner from '../../components/banner/banner.jsx'
import ProjetAssignment from '../../components/Passignment/Passignment.jsx'
import ProjetContext from '../../components/Pcontext/Pcontext.jsx'
import ProjetRessources from '../../components/Pressources/Pressources.jsx'
import ProjetSkillsAssessed from '../../components/PskillsAssessed/PskillsAssessed.jsx'
import ProjetSkills from '../../components/Pskills/Pskills.jsx'
import AccueilImage from '../../assets/images/imgBanner.png'
import { useParams } from 'react-router-dom'
import Error from '../../pages/error/error.jsx'
import './_ficheProjet.scss'
import { useEffect } from 'react';

/* Ne pas utiliser de fetch pour récupérer les données du fichier json */
/* Car les données seraient utilisées avant d'être disponible */
/* Cela affiche brièvement une page d'erreur */
/* import { useFetchData } from "../../hookFetch/useFetchData.js" */
import Projets from '../../fiches-projet.json'


/* import CardSkill from "../../components/cardskill/cardskill.jsx" */
/* import Competences from '../../components/competences/competences.jsx' */

/* import Gallery from '../../components/gallery/gallery.jsx' */


function FicheProjet() {
/* Le useEffect permet de faire défiler la page au début */
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);

  /* const Projets = useFetchData(`/fiches-projet.json`)  */ 
    
  // Récupérer l'identifiant du projet actuel
  const idProjet = useParams("id").id
  
  console.log(Projets);
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
        <div className="pA">
          <h2>Contexte</h2>            
            <ProjetContext context={currentProjet[0].context} />            
          <h2>Mission</h2>                                   
            <ProjetAssignment assignment={currentProjet[0].assignments.map((assignment, index) => (
                <li key={index}>{assignment}</li>
            ))} />  
                                      
          <h2>Ressources</h2>
            <ProjetRessources ressources={currentProjet[0].ressources.map((ressources, index) => (
                <li key={index}>{ressources}</li>
            ))} />
          <h2>Compétences évaluées</h2>
            <ProjetSkillsAssessed skillsAssessed={currentProjet[0].skillsAssessed.map((skillsAssessed, index) => (
                <li key={index}>{skillsAssessed}</li>
            ))} />
          <h2>Outils utilisés</h2>  
            <ProjetSkills skills={currentProjet[0].skills.map((skills, index) => (
                <li key={index}>{skills}</li>
            ))} />                  
        </div>
        
      </>
      


    )}
  
  export default FicheProjet

  