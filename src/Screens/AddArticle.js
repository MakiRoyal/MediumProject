import { StoreContext } from '../Providers/Store';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { useForm } from "react-hook-form";

export default function AddArticle() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { addArticle } = useContext(StoreContext);

    const onSubmit = data => fetchArticle(data);

    function fetchArticle(data) {
        fetch('http://edu.project.etherial.fr/articles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify({
                title: data.title,
                content: data.content,
                article_category_id	: 8,
            })
        }).then((res) => {
            res.json().then((json) => {})
        })
    }

        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="title" {...register("title", { required: true })} />
                <input placeholder="content" {...register("content", { required: true })} />
                <input type="submit" />
        
            </form>
        );
}

