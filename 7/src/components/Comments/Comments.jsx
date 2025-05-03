import { useEffect, useState } from "react";
import Search from "../Search/Search.jsx";
import s from "./Comments.module.scss";

export default function Comments() {
    const [comments, setComments] = useState([]);

    const [message, setMessage] = useState("");

    async function getComments() {
        const url = "https://jsonplaceholder.typicode.com/comments?postId=10";
        const query = await fetch(url);

        const response = await query.json();

        setComments(response);
    }
    useEffect(() => {
        getComments();
    }, []);

    console.log(comments)

    const [search, setSearch] = useState("");

    const filteredComments = comments.filter((comment) => {
            return comment.email.toLowerCase().includes(search.toLowerCase());
        }
    );
    function handleSearch(e) {
        setSearch(e.target.value);
    }

    async function sendData(e) {
        e.preventDefault();

        const form = e.target;
        console.log(form.username);

        const formData = Object.fromEntries(new FormData(form));

        const response = await fetch("https://jsonplaceholder.typicode.com/comments?postId=1", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        });

        setMessage("Отправлено");

        const commentResponse = await response.json();

        setTimeout(() => {
            setMessage("Данные приняты");
        }, 500);


        setComments([...comments, commentResponse]);
    }


    return (
        <>
            <div className={s.comments}>
                <div className={s.container}>
                    <form className={s.form} onSubmit={sendData}>
                        <input
                            type="text"
                            className={s.username}
                            name="username"
                            placeholder="Ваше имя:"
                            required
                        />
                        <input
                            type="text"
                            className={s.email}
                            name="email"
                            placeholder="Ваша почта"    
                            required
                        />
                        <input
                            type="text"
                            className={s.email}
                            name="email"
                            placeholder="Комментарий"    
                            required
                        />
                        <button className={s.submit}>Зарегистрироваться</button>
                        <p>{message}</p>
                    </form>
                    <Search className={s.Search} handleChange={handleSearch}/>
                    <div className={s.comments__data}>
                        {
                            filteredComments.map((comment) => {
                                return (
                                    <div className={s.comment} key={comment.id}>
                                        <div className={s.Id}>{comment.id}</div>
                                        <div className={s.name}>{comment.name}</div>
                                        <div className={s.email}>{comment.email}</div>
                                        <div className={s.body}>{comment.body}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}