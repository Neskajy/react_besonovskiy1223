import { useState, useEffect } from "react";
import s from "./Posts.module.scss";

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [message, setMessage] = useState();
    async function fetchPosts() {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await response.json();
        setPosts(posts);
    }
    async function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: FormData
        });

        e.target.reset();
        setMessage("Форма отправлена");
    }
    useEffect(()=> {
        fetchPosts();
    }, []);
    return (
        <>
            <div className={s.Posts}>
                <div className={s.container}>
                    <form className={s.form} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Введите название" name="title"/>
                        <input type="text" placeholder="Введите текст поста" name="body"/>
                        <button type="submit">Отправить</button>
                        <p>{message}</p>
                    </form>
                    {
                        posts.map(post => {
                            return (
                                <div key={post.id} className={s.post}>
                                    <h3 className={s.post__id}>id: { post.id }</h3>
                                    <div className={s.title}>Title: { post.title }</div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </>
    )
}