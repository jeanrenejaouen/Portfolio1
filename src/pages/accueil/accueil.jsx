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
        <h2 id="competences">MES COMPETENCES</h2>
          <Competences />
        <h2 id="a-propos">A PROPOS DE MOI</h2> 
          <APropos />
        <h2 id="projets">PROJETS REALISES</h2>
          <Gallery />        
        <h2 id="contact">CONTACT</h2>
          <Contact />
        
    </>
    )
  }
  
  export default Accueil