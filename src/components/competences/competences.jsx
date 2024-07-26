import React from "react";
import { useFetchData } from "../../hookFetch/useFetchData.js"
import CardSkill from '../cardskill/cardskill.jsx'
import './_competences.scss'

function Competences() {

  const skills = useFetchData(`/skills-data.json`)

  return (
    <div className="comp">
        {skills.map((skill) => ( 
            <>
                <article key={skill.id}>                       
                    <CardSkill image={skill.picture} title={skill.title} />  
                </article> 

               
            </>
        ))}

    </div>
);
};

export default Competences