import { useAppDispatch } from '../../app/hooks';
import {addToCart, CartItem,} from '../cart/cartSlice';
import {putCartItem} from "../../infrastructure/firebase";

export interface ProductCardProps {
    name: string;
    description: string;
    price: number;
    extraClass: string | null;
}

export function ProductCard(props: ProductCardProps) {

    const dispatch = useAppDispatch();
    const wrapperClass = "card mb-3 " + props.extraClass;

    const onAddToCart = ( name: string, price: number) => {
        const newItem: CartItem = {
            name,
            price,
            quantity: 1
        }
        putCartItem(newItem)
            .then(() => dispatch(addToCart(newItem)));
    }

    return (
        <div className={wrapperClass}>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.description}</p>
                <button
                    onClick={() =>onAddToCart(props.name, props.price)}
                    className="btn btn-primary"
                >Add to cart
                </button>
            </div>
        </div>
    )
}