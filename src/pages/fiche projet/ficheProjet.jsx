import React from "react"
import Banner from '../../components/banner/banner.jsx'
import AccueilImage from '../../assets/images/imgBanner.png'
import { useFetchData } from "../../hookFetch/useFetchData.js"

/* import Gallery from '../../components/gallery/gallery.jsx' */


function FicheProjet() {

  const Projets = useFetchData(`/fiches-projet.json`)

  return (
      <>   
          
          {/* <Banner  image={AccueilImage} altText="Banner"/> */} 
          
          {Projets.map((projet) => ( 
              
              <div key={projet.id}> <Banner image={AccueilImage} altText="Banner" title={projet.title} text={projet.subtitle}/>  </div>    
          
                 
      
          ))}
      </>
    )}
  
  export default FicheProjet