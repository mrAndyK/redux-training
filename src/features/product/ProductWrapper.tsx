import { useEffect, useState } from "react"
import { ProductsGrid } from './ProductGrid';
import {initProducts, Product, selectProducts} from "./productSlice";
import {
    useAppSelector,
    useAppDispatch
} from '../../app/hooks';
import ProductsList from "./ProductList";
import {getProducts,} from "../../infrastructure/firebase";


export function ProductsWrapper() {
    const [displayMode, setDisplayMode] = useState('list');

    const products = useAppSelector(selectProducts);
    const dispatch = useAppDispatch();

    const displayList = () => {
        setDisplayMode('list');
    }

    const displayGrid = () => {
        setDisplayMode('grid');
    }

    useEffect(() => {
        getProducts().then(snapshot =>{
            const products = snapshot.docs.map(doc => doc.data())
            console.log(products)
            dispatch(initProducts(products as Product[]))
        });

    }, [dispatch]);

    return (
        <div>
            <nav className="btn-group mb-5">
                <button className="btn btn-primary"
                        onClick={() => displayList()}>List</button>
                <button className="btn btn-success"
                        onClick={() => displayGrid()}>Grid</button>
            </nav>
            { displayMode === 'list' ? <ProductsList products={products} />
                : <ProductsGrid products={products} />}
        </div>
    )
}