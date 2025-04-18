import { Link } from 'react-router-dom'
import BlueBtn from '../../../components/BlueBtn/BlueBtn'
import s from './Card.module.css'
export default function Card(props){
    return(
        <div className={s.card}>
            <div className={s.card__img}>
                <img src={props.img} alt="#" />
            </div>
            <h3 className="card__name">{props.name}</h3>
            <p className="card_price">{props.price}</p>
            <Link to={`${props.id}`}>
                <BlueBtn text='Подробнее'/>
            </Link>
            
        </div>
    )
}