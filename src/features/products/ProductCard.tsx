import React from 'react';

export interface ProductCardProps {
    name: string;
    description: string;
    price: number;
}

const ProductCard = (props: ProductCardProps) => {
    return (
        <div>
            <div className="card mb-2" >
                    <div className="card-body">
                        <h3 className="card-title">{props.name}</h3>
                        <p className="card-text"
                        >{props.description}
                        </p>
                        <p className="card-text">Price:{props.price} </p>
                        <a href="#" className="btn btn-primary">Add to cart</a>
                    </div>
            </div>
        </div>
    );
};

export default ProductCard;