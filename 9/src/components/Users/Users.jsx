import { useEffect, useState } from "react";
import Search from "../Search/Search.jsx";
import s from "./Users.module.scss";

export default function Users() {
    let [users, setUsers] = useState([]);
    const [message, setMessage] = useState("");
    
    async function fetchData() {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const usersObject = await response.json();
        setUsers(usersObject);
    }
    
    useEffect(() => {
        fetchData();
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();

        const formData = Object.fromEntries(new FormData(e.target));

        const response = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error("Ошибка при отправке данных");
        }

        let newUserResponse = await response.json();
        console.log("Новый пользователь:", newUserResponse);


        const newUser = {
            id: newUserResponse.id,
            username: newUserResponse.username,
            email: newUserResponse.email
        }

        setUsers((prevUsers) => [...prevUsers, newUser]);


        e.target.reset();

        setMessage("Отправлено");
        setTimeout(() => {
            setMessage("");
        }, 3000);

    }

    const [search, setSearch] = useState("");
    
    const filteredUsers = users.filter(user => user.username.toLowerCase().includes(search.toLowerCase()));

    function handleSearch(e) {
        setSearch(e.target.value);
    }

    return (
        <>
            <div className={s.users}>
                <div className={s.container}>
                    <form className={s.form} onSubmit={ handleSubmit }>
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
                        <button className={s.submit}>Зарегистрироваться</button>
                        <p>{ message }</p>
                    </form>
                    <Search className={s.Search} handleChange={handleSearch} />
                    <div className={s.users}>
                        {
                            filteredUsers.map(user => {
                                return (
                                    <div className={s.user} key={user.id}>
                                        <h3>id: { user.id }</h3>
                                        <p>username: {user.username}</p>
                                        <p>email: {user.email}</p>
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