import React from 'react'
import { useForm } from 'react-hook-form';

function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => console.log(data); 

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type='text' { ...register("firstname", { required: true})} />
                {errors.firstname && <span>Please input your Firstname</span>}

            <input type='number' { ...register("age", {min: 18, max: 35,}) } />
                {errors.age?.type === 'max' && <span> You are too old for this site</span>}
                {errors.age?.type === 'min' && <span> You are too young for this site</span>}

            <button>Submit</button>
        </form>
    )
}

export default Form;