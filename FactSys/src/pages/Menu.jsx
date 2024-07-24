import React, { useEffect, useState } from "react"
import './Login.css'
import { Navigate } from "react-router-dom";
import Cookies from 'js-cookie'
import NavBar from '../components/navbar'
import MenuList from '../components/menuList'
import AddProducts from '../components/addProducts'
import ShowProducts from '../components/showProducts'
import {getBdProducts} from "../functions/middle"

export default function Menu() {
    const token = Cookies.get("token")
    const [products, setProducts] = useState({
        products: ""
    })

    useEffect(() => {
        if (!token) {
            window.location.href = "/"
        }
        const productsBd = getBdProducts()
            .then(products => {
                setProducts({ products: products })
            })
    }, [])


    return <React.Fragment>
        {!token && <Navigate to={"/"} />}
        <div className="containerMenu">
            <NavBar/>
            <div className="containerMain">
                <div className="areaMenu"><MenuList/></div>
                <div className="containerAddProducts">
                    <div className="dvAddProducts">
                        <AddProducts fetchProducts={products.products}/>
                    </div>
                    <div>
                        <ShowProducts />
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
}