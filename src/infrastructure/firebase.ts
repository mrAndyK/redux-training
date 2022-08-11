import {initializeApp} from "firebase/app";
import {firebaseConfig} from "../config";
import {addDoc, collection, getDocs, getFirestore} from "firebase/firestore";
import {CartItem} from "../features/cart/cartSlice";




const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const getProducts = () => {
    const clotheStore = collection(db, 'clothStore');
    return getDocs(clotheStore);
}

export const putCartItem = (cartItem: CartItem) => {
    const cartCollection = collection(db, 'cart');
    return addDoc(cartCollection, cartItem)
}



