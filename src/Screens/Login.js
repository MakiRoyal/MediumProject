import { StoreContext } from '../Providers/Store';
import { useState, useEffect } from 'react';
import { useContext, } from 'react';
import { useForm } from "react-hook-form";

export default function Login() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => loginSubmit(data);

    function loginSubmit(data) {
        fetch('http://edu.project.etherial.fr/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password,
            })
        }).then((res) => {
            res.json().then((json) => {
                console.log(json)
                localStorage.setItem('token', json.data.token)
            })
        })
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="email"
                    placeholder="Email"
                    {...register("email", { required: true })}
                />
                {errors.email && <span>This field is required</span>}
                <input
                    type="password"
                    placeholder="Password"
                    {...register("password", { required: true })}
                />
                {errors.password && <span>This field is required</span>}
                <button type="submit">
                    Login
                </button>
            </form>
        </div>
    );
}