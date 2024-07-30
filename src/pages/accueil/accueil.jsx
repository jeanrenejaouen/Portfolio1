import React from "react"
import Banner from '../../components/banner/banner.jsx'
import Competences from '../../components/competences/competences.jsx'
import AccueilImage from '../../assets/images/imgBanner.png'
import Gallery from "../../components/gallery/gallery.jsx"
import APropos from '../../components/a-propos/a-propos.jsx'
import Contact from "../../components/contact/contact.jsx"


function Accueil() {
  
  return (
    <>
        <Banner image={AccueilImage} altText="Banner" title="BIENVENUE SUR MON PORTFOLIO" text="Je suis développeur web front-end junior" />
        <a href= "#" title="RETOUR">
          <h2 id="competences">MES COMPETENCES</h2>
        </a>  
          <Competences />
        <a href= "#" title="RETOUR"> 
          <h2 id="a-propos">A PROPOS DE MOI</h2> 
        </a>
          <APropos />
        <a href= "#" title="RETOUR">
          <h2 id="projets">PROJETS REALISES</h2>
        </a>            
            <Gallery />            
        <a href= "#" title="RETOUR">       
          <h2 id="contact">CONTACT</h2>
        </a>   
          <Contact />
        
    </>
    )
  }
  
  export default Accueil