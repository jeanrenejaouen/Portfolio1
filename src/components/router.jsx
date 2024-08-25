import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Accueil from '../pages/accueil/accueil.jsx'
import FicheProjet from '../pages/fiche projet/ficheProjet.jsx'
import Error from '../pages/error/error.jsx'
import Header from './header/header'
import Footer from './footer/footer'



function Router() {
    return (
         
        <HashRouter>       
               
            <Header/>
            
            <main>             
                <Routes>
                    <Route path="/" element={<Accueil />} />                                                                            
                    <Route path="/ficheProjet/:id" element={<FicheProjet />} />                   
                    <Route path="*" element={<Error />} />                                                       
                </Routes> 
            </main>
            <Footer/> 
        </HashRouter>           
        
    )
}

export default Router