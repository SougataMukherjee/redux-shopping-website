import {useSelector,useDispatch} from 'react-redux'
import{remove} from '../store/cardSlice';
import { formatDistanceToNow } from "date-fns";
const Cart = () => {
    const products=useSelector(state=>state.cart)
    const dispatch=useDispatch()
    const handleRemove =(productId) =>{
        dispatch(remove(productId))
    }
    const timePeriod=formatDistanceToNow(new Date())
  return (
    <div>
        <h3>Cart</h3>
        <div className="cartWrapper">
            {
                products.map((product)=>(
                    <div className='cartCard' key={product.id}>
                        <img src={product.image} alt=''/>
                        <h5>{product.title}</h5>
                        <h4>{product.price}</h4>
                        <p>added {timePeriod} ago</p>
                        <button className='btn' onClick={()=>handleRemove(product.id)}>Remove</button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Cart