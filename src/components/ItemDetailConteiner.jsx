import React from 'react'
import pelota from "../assets/pelota.jpg"
import pelota2 from "../assets/pelota2.png"
import pelota3 from "../assets/pelota3.jpg"
import botines1 from "../assets/botines1.jpg"
import botines2 from "../assets/botinres2.jpg"
import botines3 from "../assets/botines3.jpg"
import casaca1 from "../assets/casaca1.png"
import casaca2 from "../assets/casaca2.jpg"
import casaca3 from "../assets/casaca3.jpg"
import ItemDetail from './ItemDetail'

const ItemDetailConteiner = () => {
    const productos = [
        {id: 1, nombre: "Botines1", description:"descripcion de producto 1", stock:5, img: botines1, categoria:"Botines"},
        {id: 2, nombre: "Botines2", description:"descripcion de producto 2", stock:5, img: botines2, categoria:"Botines"},
        {id: 3, nombre: "Botines3", description:"descripcion de producto 3", stock:5, img: botines3, categoria:"Botines"},
        {id: 4, nombre: "casaca1", description:"descripcion de producto 4", stock:5, img: casaca1, categoria:"Casacas"},
        {id: 5, nombre: "casaca2", description:"descripcion de producto 5", stock:5, img: casaca2, categoria:"Casacas" },
        {id: 6, nombre: "casaca3", description:"descripcion de producto 6", stock:5, img: casaca3, categoria:"Casacas" },
        {id: 7, nombre: "pelota1", description:"descripcion de producto 7", stock:5, img: pelota, categoria:"Pelotas"},
        {id: 8, nombre: "pelota2", description:"descripcion de producto 8", stock:5, img: pelota2, categoria:"Pelotas"},
        {id: 9, nombre: "pelota3", description:"descripcion de producto 9", stock:5, img: pelota3, categoria:"Pelotas"},
        
    ]
    const getProductos = new Promise((resolve, reject) => {
        if (productos.length > 0){
        setTimeout(()=> {
            resolve(productos)
        }, 2000)
        }else{
        reject(new Error ("no se encuentran datos"))
        }
    })

    getProductos
        .then((res)=>{
            console.log(res)
        })
        .catch((error)=>{
            console.log(error)
        })

    return (
        <>
            <ItemDetail productos={productos}
            />
        </>
    )
}

export default ItemDetailConteiner