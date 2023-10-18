import { useLoaderData, useParams } from "react-router-dom";


const Adidas = () => {
    const {bName,photo,name,description,type,price} =useParams()
    console.log(bName,photo,name,description,price,type );
    const loadedData =useLoaderData()
    console.log(loadedData)
    
    const products =loadedData.filter(product => product.bName===bName)
 

    return (
        <div>
           <h1>Brand Name:{bName} </h1> 
           

           
           
           {
            products.map(product => <div key={product._id} >
                <h2>{product.name}</h2>
                <h2>{product.type}</h2>
                <p>{product.description}</p>
                <h1>{product.price}</h1>
                <img src={product.photo} alt="" />
                </div>)
           }
          
        </div>
    );
};

export default Adidas;