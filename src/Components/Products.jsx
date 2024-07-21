import {useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {add} from '../store/cardSlice'

const Products = () => {
    const dispatch=useDispatch()
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);
  const handleAdd = (product) => {
    dispatch(add(product))
  };
if(!products.length){
    return <h1>Loading...</h1>; 
}else
  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>$ {product.price}</h5>
          <button className="btn" onClick={() => handleAdd(product)}>
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
