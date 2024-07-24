import React from "react"
import { Navigate } from "react-router-dom";
import Cookies from 'js-cookie'
import './menuList.css'
import homeLogo from '../images/homeLogo.png'

export default function Menu() {
    const token = Cookies.get("token")
    const svgFacturation = <svg className="imgLogoMenu"  xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" strokeWidth="4"><rect width="30" height="36" x="9" y="8" rx="2"/><path d="M18 4v6m12-6v6m-14 9h16m-16 8h12m-12 8h8"/></g></svg>
    const svgHome = <svg xmlns="http://www.w3.org/2000/svg" className="imgLogoMenu"  width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor"  strokeWidth="2" d="m3 12l2-2m0 0l7-7l7 7M5 10v10a1 1 0 0 0 1 1h3m10-11l2 2m-2-2v10a1 1 0 0 1-1 1h-3m-6 0a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1m-6 0h6"/></svg>
    const svgConfig = <svg xmlns="http://www.w3.org/2000/svg" className="imgLogoMenu" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5M12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6m0 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18M3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5m1.5 12h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5M3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12m6-8.25a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M12.75 12a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0M9 15.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5"/></svg>
    const svgExit = <svg xmlns="http://www.w3.org/2000/svg"  className="imgLogoMenu" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M10.09 15.59L11.5 17l5-5l-5-5l-1.41 1.41L12.67 11H3v2h9.67zM19 3H5a2 2 0 0 0-2 2v4h2V5h14v14H5v-4H3v4a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"/></svg>
    
    return <React.Fragment>
        <div className="containerMenuCompo">
                <ul>

                    <li className="liMenuList"><p>Inicio</p>{svgHome}</li>
                    <li className="liMenuList"><p>Facturacion</p>{svgFacturation}</li>
                    <li className="liMenuList"><p>Configuracion</p>{svgConfig}</li>
                    <li className="liMenuList"><p>Salir</p>{svgExit}</li>
                
                </ul>
        </div>
    </React.Fragment>
}