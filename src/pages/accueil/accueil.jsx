import React from "react"
import Banner from '../../components/banner/banner.jsx'
import AccueilImage from '../../assets/images/imgBanner.png'
import Gallery from "../../components/gallery/gallery.jsx"
/* import Gallery from '../../components/gallery/gallery.jsx' */


function Accueil() {
  return (
    <>
        <Banner image={AccueilImage} altText="Banner" title="BIENVENUE SUR MON PORTFOLIO" text="Je suis développeur front-end junior" />
        <h2>A PROPOS DE MOI</h2> 
        <h2>PROJETS REALISES</h2>
        <Gallery />
        <h2>CONTACT</h2>       
    </>
    )
  }
  
  export default Accueil