import React from "react"
/* Import du hook personnalisé useFetchData */
/* import { useFetchData } from "../../hookFetch/useFetchData.js" */
/* import Logements from '../../data/fiches-logement.json' */
import Card from '../card/card'
import './_gallery.scss'
import { NavLink } from "react-router-dom"

/* Ne pas utiliser de fetch pour récupérer les données du fichier json */
/* Car les données seraient utilisées avant d'être disponible */
/* Cela affiche brièvement une page d'erreur */
/* import { useFetchData } from "../../hookFetch/useFetchData.js" */
import Projets from '../../fiches-projet.json'

function Gallery() {

    /* const Projets = useFetchData(`/fiches-projet.json`) */
    
    //afficher une galerie avec tous les projets provenants de la base de données JSON
    //pour chaque projet rendre un article "cliquable"
    //se connecter au composant "ficheprojet/id"
    //Le composant "Card" est appelé avec 3 paramètres (une image, un titre et la description)
    return (
        <div className="gallery">
            {Projets.map((projet) => ( 
                <>
                    <article key={projet.id}>                       
                        <Card image={projet.cover} title={projet.title} description={projet.description} />

                        <button className="button">
                            <NavLink to={`/ficheProjet/${projet.id}`}>En savoir plus</NavLink>
                        </button>

                    </article> 

                   
                </>
            ))}

        </div>
    );
};

export default Gallery