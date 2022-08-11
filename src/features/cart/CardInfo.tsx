import React, {useEffect, useState} from 'react';
import {
    CartItem,
    decrementQuantity,
    incrementQuantity, initCart, removeFromCart,
    selectCartItems,
    selectCartItemsCount,
    selectCartTotal
} from "./cartSlice";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import './CartInfo.css';
import {initializeApp} from "firebase/app";
import {firebaseConfig} from "../../config";
import {collection, getDocs, getFirestore} from "firebase/firestore";
import {initProducts, Product} from "../product/productSlice";


export const CardInfo = () => {
    const [display, setDisplay] = useState(false)
    const cartItemsCount = useAppSelector(selectCartItemsCount);
    const items = useAppSelector(selectCartItems);
    const total = useAppSelector(selectCartTotal)
    const dispatch = useAppDispatch();

    const quantityCounter = (item:CartItem) => {
        return(<span className='d-flex justify-content-between'>
            <button onClick={() => dispatch(decrementQuantity(item.name))}
                    className="btn btn-xs"
            >-</button>
             <span className="badge bg-secondary"
             >{item.quantity}
             </span>
            <button onClick={() => dispatch(incrementQuantity(item.name))}
                    className="btn btn-xs"
            >+</button></span> )
    }

    const itemsList = items.map(item =>
        <li key={item.name} className='list-group-item d-flex justify-content-between'
        >{item.name}
            {quantityCounter(item)}
            <strong>{item.price} </strong>
            <button className="btn btn-xs"
                    onClick={() => dispatch(removeFromCart(item.name))}>
                <i className="bi bi-trash"></i>
            </button> </li>
    )

    const cartDetails = cartItemsCount > 0 ? itemsList : <p>Your cart is empty</p>;

    useEffect(() => {
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
        const cartCollection = collection(db, 'cart');
        getDocs(cartCollection)
            .then(snapshot =>{
                const items = snapshot.docs.map(doc => doc.data())
                dispatch(initCart (items as CartItem[]))
            });

    }, [dispatch]);

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid d-flex justify-content-around">
                <div className="navbar-brand  h1">ClothStore</div>

                <div className='me-5' onMouseOver={() => setDisplay(true)}
                     onMouseOut={() => setDisplay(false)}>
                    <button type="button" className="btn btn-primary "
                                > Cart
                        <span className="badge bg-secondary "
                            >{cartItemsCount}
                        </span>
                    </button>
                    <div>{ display &&
                        <ul className='list-group position-absolute popup me-5 w-auto'>
                            {cartDetails}
                            <li className='list-group-item d-flex
                            justify-content-between list-group-item-success'>
                                    <strong>Total</strong>{total}
                            </li>
                        </ul>}
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default CardInfo;