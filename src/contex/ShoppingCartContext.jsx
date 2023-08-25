
import {createContext, useState} from "react"
export const CartContext = createContext(null)

export const ShoppingCartProvider = ({children})=>{
        const [cart,setCart] = useState([])
        const addToCart = (item, quantity) =>{
            if(!isInCart(item.id)){
                setCart(Prev =>[...Prev, {...item, quantity}])
            }
        }
        const removeItem = (itemId) => {
            const updatedCart = cart.filter(producto => producto.id !== itemId)
            setCart(updatedCart);}
        const clearCart =() =>{
            setCart([])
        }
        const isInCart = (itemId) =>{
            return cart.some(productos => productos.id === itemId)
        }
        const getTotalQuantity = () => {
            return cart.reduce((total, item) => total + item.quantity, 0)
        }
        const getTotalPrice = () => {
            return cart.reduce((total, item) => total + item.precio * item.quantity, 0);
        }
    return(
        <CartContext.Provider value= {{cart, setCart, addToCart, removeItem, clearCart, total: getTotalQuantity(), totalPrice: getTotalPrice()}}>
            {children}
        </CartContext.Provider>
    )
}

export default ShoppingCartProvider