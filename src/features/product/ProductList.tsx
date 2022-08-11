import { ProductCard } from "./ProductCard";
import { Product } from "./productSlice";

export interface ProductsListProps {
    products: Product[];
}

export function ProductsList(props: ProductsListProps) {
    return (
        <div>
            { props.products.map((product,index) =>
                (<ProductCard extraClass={null}
                              key={index}
                              name={product.name}
                              description={product.description}
                              price={product.price} />))}
        </div>
    )
}
export default ProductsList;