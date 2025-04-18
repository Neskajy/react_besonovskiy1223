import BlueBtn from "../BlueBtn/BlueBtn";
import s from './Banner.module.css'
export default function Banner(){
    return(
        <section className={s.banner}>
            <h1 className={s.title}>Главный заголовок страницы</h1>
            <p className={s.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit pariatur aspernatur molestias facere placeat. Ipsum corporis vero modi doloremque officiis tempore nulla expedita sunt tempora ut nostrum id et mollitia voluptas temporibus iste dolorem, incidunt cumque ea quo. Harum, at!</p>
            <BlueBtn text='Перейти к каталогу'/>
        </section>
    )
}