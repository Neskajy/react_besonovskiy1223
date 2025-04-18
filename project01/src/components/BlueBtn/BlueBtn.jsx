import s from './BlueBtn.module.css'
export default function BlueBtn({text='Кнопка по умолчанию'}){
    return(
        <button className={s.btn}>{text}</button>
    )
}