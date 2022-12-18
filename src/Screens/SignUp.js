import { StoreContext } from '../Providers/Store';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { useForm } from "react-hook-form";


export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signup } = useContext(StoreContext);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => fetchUser(data);

    function fetchUser(data) {
        fetch('http://edu.project.etherial.fr/users', {
        method: 'POST',
        headers:{
          'Content-Type':'application/json'
        }, 
        body: JSON.stringify({
          firstname: data.firstname,
          lastname: data.lastname,
          email: data.email,
          password: data.password,
          password_verif: data.passwordVerification,
        })
      }).then((res) => {
        res.json().then((json) =>{ 
          console.log(json)
        })
        })

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input className="mt-6" placeholder="firstname" {...register("firstname", { required: true })} />
            <input placeholder="lastname" {...register("lastname", { required: true })} />
            <input placeholder="email" {...register("email", { required: true })} />
            <input placeholder="password" {...register("password", { required: true })} />
            <input placeholder="password verification" {...register("passwordVerification", { required: true })} />

            <input type="submit" />
        </form>
    );
}
