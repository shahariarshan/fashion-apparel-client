import { Link } from "react-router-dom";


const PickUp = () => {
    return (
       <div className="mx-auto text-black">
         <select className="select select-success w-full max-w-xs text-center">
  <option disabled selected>Pick your favorite Brand</option>
 <option>Nike</option>
  <option>H & M</option>
  <option>Adidas</option>
  <option>Gucci</option>
  <option>Zara</option>
  <option>Levi's</option>
 
</select>
       </div>
    );
};

export default PickUp;