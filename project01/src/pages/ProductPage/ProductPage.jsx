import { products } from '../../products';
import { useParams } from 'react-router-dom';
import BlueBtn from '../../components/BlueBtn/BlueBtn'

export default function ProductPage() {
    const { id } = useParams();
    const product = products.find(product => product.id == id);
    return (
        <div className="product">
            <div className="img">
                <img src={`${product.img}`} alt="" />
            </div>
            <div className="about">
                <h3 className="name">{product.name}</h3>
                <p className="price">{product.price}$</p>
                <BlueBtn text='В корзину' />
            </div>
        </div>
    )
}