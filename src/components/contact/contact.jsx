import React from "react";
/* import { Form } from "react-hook-form"; */

/* import './_contact.scss' */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {

    return (
      <>
          {/* <Form /> */} 

          <p>Prévoir formulaire de contact ...</p>

          

          <p>Envoyez-moi un email</p>

            <a href="mailto:jeanrenejaouen29@gmail.com">            
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            
      </>
      )
    }
    
    export default Contact