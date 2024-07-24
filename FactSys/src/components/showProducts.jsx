import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import './showProducts.css'


export default function ShowProducts() {
    const fetchProducts = useSelector(state => state.productData.productAdded)
    console.log(fetchProducts);
    const [filterProducts, setFilterProducts] = useState([])
    console.log(filterProducts);
    useEffect(() => {
        console.log("product", filterProducts);
        filterProducts.length > 0 && setFilterProducts([...filterProducts, fetchProducts])
    }, [fetchProducts])




        return <React.Fragment>
            <div className="containerShowProducts">
                <ul className="ulTitleShowProducts">
                    <li>Producto</li>
                    {
                        filterProducts?.map((product) => <li className="liShowProducts" key={filterProducts.indexOf(product)}>{product.product}</li>)
                    }
                </ul>
                <ul className="ulTitleShowProducts">
                    <li>Codigo</li>
                    {
                        filterProducts && filterProducts.map((product) => (
                            <li className="liShowProducts" key={filterProducts.indexOf(product)}>{product.code}</li>
                        ))
                    }
                </ul>
                <ul className="ulTitleShowProducts">
                    <li>Precio</li>
                    {
                        filterProducts && filterProducts.map((product) => (
                            <li className="liShowProducts" key={filterProducts.indexOf(product)}>{product.price}</li>
                        ))
                    }
                </ul>
                <ul className="ulTitleShowProducts">
                    <li>Cantidad</li>
                    {filterProducts && filterProducts.map((product) => (
                        <li className="liShowProducts" key={filterProducts.indexOf(product)}>{product.quantity}</li>
                    ))}
                </ul>
                <ul className="ulTitleShowProducts">
                    <li>Eliminar</li>
                    { filterProducts && filterProducts.map((product) => <li key={filterProducts.indexOf(product)} className="liButtonDelete">
                        <button className="buttonDeleteProduct">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="15"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M3 6h18" />
                                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                            </svg>
                        </button>

                    </li>)}

                </ul>
            </div>
            <div className="containerButtonShowProducts">
                <input type="button" value="Guardar" className="buttonSave" />

            </div>

        </React.Fragment>
    }