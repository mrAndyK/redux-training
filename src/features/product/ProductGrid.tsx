import { ProductCard } from "./ProductCard";
import { Product } from './productSlice';

interface ProductsGridProps {
    products: Product[];
}

export function ProductsGrid(props: ProductsGridProps) {
    return (
        <div className="row">
            { props.products.map((product, index) =>
                (<ProductCard
                    extraClass="col"
                    key={index} name={product.name}
                    description={product.description}
                    price={product.price} />))}
        </div>
    )
}