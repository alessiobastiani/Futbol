
import {createContext, useState} from "react"
export const CartContext = createContext(null)

export const ShoppingCartProvider = ({children})=>{
        const [cart,setCart] = useState([])
        console.log(cart)
        const addToCart = (item, quantity,) =>{
            if(!isInCart(item.id)){
                setCart(Prev =>[...Prev, {...item, quantity}])
            }else{
                console.error("el producto fue agregado")
            }
        }
        const removeItem = (itemId) => {
            const cartUpdated = cart.filter(productos => productos.id !== itemId)
            setCart(cartUpdated)
        }
        const clearCart =() =>{
            setCart([])
        }
        const isInCart = (itemId) =>{
            return cart.some(productos => productos.id !== itemId)
        }
    return(
        <CartContext.Provider value= {{cart, setCart, addToCart, removeItem, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default ShoppingCartProvider