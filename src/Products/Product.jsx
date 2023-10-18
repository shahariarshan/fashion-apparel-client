

const Product = ({product}) => {
    const {name,photo,bName}=product;

    return (
        <div >
            <div className="card bg-red-100  shadow-xl">
                <figure><img src={photo} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h2 className="card-title">Brand Name:<span className="text-sky-400">{bName}</span></h2>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default Product;