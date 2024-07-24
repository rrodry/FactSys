import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import './addProduct.css'
import Select from 'react-select'
import { productAdded } from "../reducer/productReducer"

export default function AddProducts({ fetchProducts }) {
    const dispatch = useDispatch()

    const [productSearched, setProductSearched] = useState({})
    
    const [quantity, setQuantity] = useState(0)

    const fetchProductsCode = []

    fetchProducts && fetchProducts.map((product) => {
        fetchProductsCode.push({
            value: product.code,
            label: product.code,
            product: product.value,
            price: product.price
        })
    })

    return <React.Fragment>
        <div className="divAddProducts">
            <div className="divAddProductsTitle">
                <p>Registar producto</p>
            </div>
            <div className="containerAddProductsCompo">

                <div className="divAddProductsInputs">

                    <Select
                        className="selectProductCode"
                        options={fetchProductsCode}
                        placeholder="Codigo"
                        defaultValue={productSearched.value}
                        onChange={(event) => {
                            setProductSearched({
                                product: event.product,
                                code: event.value,
                                price: event.price
                            })
                    }} />

                </div>
                <div className="divAddProductsInputs">
                    <input type="text" placeholder="Producto" className=" css-13cymwt-control" readOnly value={ productSearched.product ? productSearched.product : "" } />
                </div>
                <div className="divAddProductsInputs">
                    <input type="text" placeholder="Precio" className=" css-13cymwt-control" readOnly value={ productSearched.price ? productSearched.price : "" } />
                </div>
                <div className="divAddProductsInputs">
                    <input type="number" defaultValue={1} placeholder="Cantidad" className=" css-13cymwt-control" id="quantity"
                    onChange={ (event) => {
                        setQuantity(event.target.value)
                    } } />
                </div>
                <div className="divAddProductsButtons">
                    <button className="buttonAddProducts" onClick={() => {
                        dispatch(productAdded({
                            product: productSearched.product,
                            code: productSearched.code,
                            price: productSearched.price,
                            quantity: quantity ? quantity : document.getElementById("quantity").value 
                        }))
                        setQuantity(1)
                        setProductSearched({})
                    }}>Agregar</button>
                </div>
            </div>
        </div>
    </React.Fragment>
}