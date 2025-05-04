import s from "./Search.module.scss";
export default function Search({handleChange}) {
    return (
        <>
            <input type="text" onChange={handleChange}
            placeholder="Поиск"
            className={s.search}/>
        </>
    )
}